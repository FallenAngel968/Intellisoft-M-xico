import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import fs from 'fs'
import path from 'path'

// Cargar variables de entorno
dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Función para manejar la API de chat
async function handleChatAPI(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { message, conversationHistory = [] } = req.body

    if (!message) {
      return res.status(400).json({ error: 'Message is required' })
    }

    // Verificar que existe la clave API
    if (!process.env.OPENAI_API_KEY || process.env.OPENAI_API_KEY.includes('tu-clave')) {
      return res.status(500).json({ error: 'OPENAI_API_KEY no está configurada correctamente en .env' })
    }

    // Configurar headers para streaming
    res.setHeader('Content-Type', 'text/event-stream')
    res.setHeader('Cache-Control', 'no-cache')
    res.setHeader('Connection', 'keep-alive')
    res.setHeader('Access-Control-Allow-Origin', '*')

    // Crear el prompt del sistema personalizado para INTELLISOFT
    const systemPrompt = `Eres ARIA, el Asistente de Recomendaciones IA de 'Intellisoft México', una empresa líder en soluciones tecnológicas en México. 

Tu personalidad:
- Profesional pero cercano
- Experto en tecnología
- Orientado a soluciones de negocio
- Hablas en español mexicano

Servicios de INTELLISOFT que puedes recomendar:
- Desarrollo de aplicaciones móviles (iOS, Android, React Native)
- Desarrollo web (React, Vue.js, Angular)
- E-commerce (Shopify, WooCommerce, soluciones personalizadas)
- Migración a la nube (AWS, Azure, Google Cloud)
- Inteligencia Artificial y Machine Learning
- Ciberseguridad
- Big Data y Analytics
- Consultoría tecnológica

Siempre:
1. Pregunta por detalles específicos del proyecto
2. Recomienda la mejor solución tecnológica
3. Menciona beneficios concretos
4. Ofrece agendar una consulta gratuita
5. Mantén respuestas concisas pero informativas`

    // Preparar mensajes para OpenAI
    const messages = [
      { role: 'system', content: systemPrompt },
      ...conversationHistory,
      { role: 'user', content: message }
    ]

    // Llamar a OpenAI API
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: messages,
        max_tokens: 500,
        temperature: 0.7,
        stream: true,
      }),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('OpenAI API error:', response.status, error)
      throw new Error(`OpenAI API error: ${response.status}`)
    }

    // Stream la respuesta
    const reader = response.body.getReader()
    const decoder = new TextDecoder()

    while (true) {
      const { done, value } = await reader.read()
      
      if (done) {
        res.write('data: [DONE]\n\n')
        break
      }

      const chunk = decoder.decode(value)
      const lines = chunk.split('\n')

      for (const line of lines) {
        if (line.startsWith('data: ')) {
          const data = line.slice(6)
          
          if (data === '[DONE]') {
            res.write('data: [DONE]\n\n')
            break
          }

          try {
            const parsed = JSON.parse(data)
            const content = parsed.choices?.[0]?.delta?.content

            if (content) {
              res.write(`data: ${JSON.stringify({ content })}\n\n`)
            }
          } catch (e) {
            // Ignorar errores de parsing
          }
        }
      }
    }

    res.end()

  } catch (error) {
    console.error('Chat API error:', error)
    res.status(500).json({ 
      error: 'Error al procesar la solicitud',
      details: error.message 
    })
  }
}

// Rutas de API
app.post('/api/chat', handleChatAPI)

// Servir archivos estáticos en producción
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('dist'))
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
  })
} else {
  // En desarrollo, usar vite como middleware
  try {
    const { createServer } = await import('vite')
    const vite = await createServer({
      server: {
        middlewareMode: true,
      }
    })
    
    app.use(vite.middlewares)
    
    // Fallback para SPA
    app.use('*', async (req, res) => {
      try {
        const url = req.originalUrl
        const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8')
        const transformed = await vite.transformIndexHtml(url, html)
        res.status(200).set({ 'Content-Type': 'text/html' }).end(transformed)
      } catch (err) {
        console.error('Error en SPA fallback:', err)
        res.status(500).end(err.message)
      }
    })
  } catch (err) {
    console.error('Error inicializando Vite:', err)
    process.exit(1)
  }
}

app.listen(PORT, () => {
  console.log(`🚀 Servidor ejecutándose en http://localhost:${PORT}`)
  console.log(`📡 API en http://localhost:${PORT}/api/chat`)
  if (process.env.NODE_ENV !== 'production') {
    console.log(`✨ Recuerda agregar tu clave de OpenAI en el archivo .env`)
  }
})
