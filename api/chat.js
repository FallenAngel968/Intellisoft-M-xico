export default async function handler(req, res) {
  // Solo permitir métodos POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { message, conversationHistory = [] } = req.body

    if (!message) {
      return res.status(400).json({ error: 'Message is required' })
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