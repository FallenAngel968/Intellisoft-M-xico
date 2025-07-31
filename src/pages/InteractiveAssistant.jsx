import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Bot, 
  Send, 
  User, 
  Sparkles, 
  Brain, 
  Zap,
  Code,
  Lightbulb,
  ArrowRight,
  MessageCircle,
  Mic,
  Volume2,
  RotateCcw
} from 'lucide-react'

const InteractiveAssistant = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: '¡Hola! Soy ARIA, el Asistente de Recomendaciones IA de INTELLISOFT. ¿En qué puedo ayudarte hoy?',
      sender: 'bot',
      timestamp: new Date(),
      suggestions: [
        'Quiero desarrollar una app móvil',
        'Necesito una tienda online',
        'Migrar a la nube',
        'Consultoría en IA'
      ]
    }
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const messagesEndRef = useRef(null)

  const predefinedResponses = {
    'app móvil': {
      text: '¡Excelente! Desarrollar una app móvil es una gran decisión. Te recomiendo nuestro servicio de Aplicaciones Móviles que incluye desarrollo nativo para iOS y Android, o multiplataforma con React Native. ¿Qué tipo de app tienes en mente?',
      suggestions: ['App de e-commerce', 'App corporativa', 'App de servicios', 'Juego móvil']
    },
    'tienda online': {
      text: 'Perfecto para expandir tu negocio. Nuestro servicio de E-commerce incluye desarrollo completo con Shopify, WooCommerce o soluciones personalizadas. Integramos pasarelas de pago mexicanas y optimizamos para conversiones. ¿Ya tienes productos o servicios definidos?',
      suggestions: ['Tengo productos físicos', 'Vendo servicios digitales', 'Marketplace', 'B2B E-commerce']
    },
    'nube': {
      text: 'La migración a la nube es fundamental para la escalabilidad. Ofrecemos migración completa a AWS, Azure o Google Cloud, con arquitecturas serverless y microservicios. Reducirás costos hasta un 40%. ¿Qué sistemas tienes actualmente?',
      suggestions: ['Servidores físicos', 'Hosting compartido', 'Sistema legacy', 'Múltiples sistemas']
    },
    'ia': {
      text: 'La Inteligencia Artificial puede revolucionar tu negocio. Implementamos chatbots, análisis predictivo, automatización de procesos y machine learning. ¿Qué procesos te gustaría automatizar?',
      suggestions: ['Atención al cliente', 'Análisis de datos', 'Procesos repetitivos', 'Recomendaciones']
    },
    'web': {
      text: 'Desarrollo web moderno con React, Vue.js o Angular. Creamos sitios responsivos, rápidos y optimizados para SEO. Incluimos panel de administración y analytics. ¿Es para empresa o proyecto personal?',
      suggestions: ['Sitio corporativo', 'Landing page', 'Portal web', 'Sistema web']
    },
    'default': {
      text: 'Entiendo tu consulta. Como empresa líder en soluciones tecnológicas en México, podemos ayudarte con desarrollo web, apps móviles, e-commerce, soluciones cloud, big data y ciberseguridad. ¿Te interesa algún servicio en particular?',
      suggestions: ['Ver todos los servicios', 'Agendar consulta', 'Casos de éxito', 'Cotización personalizada']
    }
  }

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getResponseKey = (message) => {
    const lowerMessage = message.toLowerCase()
    if (lowerMessage.includes('app') || lowerMessage.includes('móvil') || lowerMessage.includes('aplicacion')) return 'app móvil'
    if (lowerMessage.includes('tienda') || lowerMessage.includes('ecommerce') || lowerMessage.includes('e-commerce')) return 'tienda online'
    if (lowerMessage.includes('nube') || lowerMessage.includes('cloud') || lowerMessage.includes('migra')) return 'nube'
    if (lowerMessage.includes('ia') || lowerMessage.includes('inteligencia') || lowerMessage.includes('artificial')) return 'ia'
    if (lowerMessage.includes('web') || lowerMessage.includes('sitio') || lowerMessage.includes('página')) return 'web'
    return 'default'
  }

  const handleSendMessage = async (messageText = inputMessage) => {
    if (!messageText.trim()) return

    const userMessage = {
      id: Date.now(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsTyping(true)
    setShowSuggestions(false)

    // Simular tiempo de respuesta del bot
    await new Promise(resolve => setTimeout(resolve, 1500))

    const responseKey = getResponseKey(messageText)
    const response = predefinedResponses[responseKey]

    const botMessage = {
      id: Date.now() + 1,
      text: response.text,
      sender: 'bot',
      timestamp: new Date(),
      suggestions: response.suggestions
    }

    setMessages(prev => [...prev, botMessage])
    setIsTyping(false)
    setShowSuggestions(true)
  }

  const handleSuggestionClick = (suggestion) => {
    handleSendMessage(suggestion)
  }

  const resetConversation = () => {
    setMessages([
      {
        id: 1,
        text: '¡Hola! Soy ARIA, el Asistente de Recomendaciones IA de INTELLISOFT. ¿En qué puedo ayudarte hoy?',
        sender: 'bot',
        timestamp: new Date(),
        suggestions: [
          'Quiero desarrollar una app móvil',
          'Necesito una tienda online',
          'Migrar a la nube',
          'Consultoría en IA'
        ]
      }
    ])
    setShowSuggestions(true)
  }

  const features = [
    {
      icon: Brain,
      title: 'Inteligencia Artificial',
      description: 'Powered by GPT y machine learning para respuestas precisas'
    },
    {
      icon: Zap,
      title: 'Respuestas Instantáneas',
      description: 'Análisis inmediato de tu proyecto y recomendaciones personalizadas'
    },
    {
      icon: Code,
      title: 'Expertise Técnico',
      description: 'Conocimiento profundo en todas nuestras tecnologías y servicios'
    },
    {
      icon: Lightbulb,
      title: 'Recomendaciones Smart',
      description: 'Sugerencias basadas en mejores prácticas y casos de éxito'
    }
  ]

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4 mr-2" />
              Inteligencia Artificial Avanzada
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Conoce a
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 ml-3">
                ARIA
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Nuestro Asistente de Recomendaciones IA que analiza tu proyecto en tiempo real 
              y te sugiere las mejores soluciones tecnológicas para tu negocio.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="pb-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden"
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Bot className="h-6 w-6" />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">ARIA - Asistente IA</h3>
                    <p className="text-blue-100 text-sm">En línea • Responde en segundos</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={resetConversation}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                    title="Reiniciar conversación"
                  >
                    <RotateCcw className="h-5 w-5" />
                  </button>
                  <button className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200">
                    <Volume2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gray-50">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-xs lg:max-w-md px-4 py-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-white text-gray-900 shadow-sm border border-gray-200'
                    }`}>
                      <div className="flex items-start space-x-2">
                        {message.sender === 'bot' && (
                          <Bot className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <p className="text-sm leading-relaxed">{message.text}</p>
                          <div className="text-xs opacity-70 mt-1">
                            {message.timestamp.toLocaleTimeString('es-MX', { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                          </div>
                        </div>
                        {message.sender === 'user' && (
                          <User className="h-5 w-5 text-blue-200 flex-shrink-0 mt-0.5" />
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex justify-start"
                >
                  <div className="bg-white text-gray-900 shadow-sm border border-gray-200 px-4 py-3 rounded-2xl">
                    <div className="flex items-center space-x-2">
                      <Bot className="h-5 w-5 text-blue-600" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions */}
            {showSuggestions && messages[messages.length - 1]?.suggestions && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <div className="text-sm text-gray-600 mb-3">Sugerencias rápidas:</div>
                <div className="flex flex-wrap gap-2">
                  {messages[messages.length - 1].suggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="bg-white text-gray-700 px-3 py-2 rounded-full text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200 border border-gray-200"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Chat Input */}
            <div className="p-6 bg-white border-t border-gray-200">
              <div className="flex items-center space-x-4">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Escribe tu consulta sobre tecnología..."
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                    <Mic className="h-5 w-5 text-gray-400" />
                  </button>
                </div>
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputMessage.trim()}
                  className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
              <div className="text-xs text-gray-500 mt-2 text-center">
                ARIA puede ayudarte con consultas sobre desarrollo, diseño, tecnología y servicios de INTELLISOFT
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para un Asesoramiento Humano?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              ARIA te ha dado las primeras recomendaciones. Ahora agenda una consulta 
              con nuestros expertos para profundizar en tu proyecto.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors duration-300 flex items-center justify-center">
                <MessageCircle className="mr-2 h-6 w-6" />
                Agendar Consulta Gratuita
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors duration-300 flex items-center justify-center">
                Ver Casos de Éxito
                <ArrowRight className="ml-2 h-6 w-6" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default InteractiveAssistant