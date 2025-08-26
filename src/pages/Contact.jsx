import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  User,
  Building,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Facebook,
  MessageCircle,
  Linkedin,
  Instagram
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
    acceptTerms: false
  })
  const [formStatus, setFormStatus] = useState(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const services = [
    'Desarrollo Web',
    'Aplicaciones Móviles',
    'E-commerce',
    'Soluciones Cloud',
    'Big Data & Analytics',
    'Ciberseguridad',
    'Consultoría TI',
    'Otro'
  ]

  const budgets = [
    '$7,000 - $15,000 MXN',
    '$15,000 - $25,000 MXN',
    '$25,000 - $50,000 MXN',
    '$50,000 - $100,000 MXN',
    '$100,000 - $250,000 MXN',
    '$250,000+ MXN',
    'A definir'
  ]

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulación de envío de formulario
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setFormStatus('success')
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        message: '',
        acceptTerms: false
      })
    } catch (error) {
      setFormStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      details: ['+52 249 177 7726', '+52 221 691 6933'],
      description: 'Lun-Vie 9:00 AM - 7:00 PM (CST)'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['intellisoft.mx@gmail.com', ''],
      description: 'Respuesta en menos de 2 horas'
    },
    {
      icon: MapPin,
      title: 'Oficina',
      details: ['Av. 5 Oriente, 119, Col. Cuacnopalan', 'Palmar de Bravo, Puebla, 75515'],
      description: 'Visitas con cita previa'
    },
    {
      icon: Clock,
      title: 'Horarios',
      details: ['Lunes a Viernes: 9:00 AM - 7:00 PM', 'Sábados: 11:00 AM - 2:00 PM'],
      description: 'Soporte 24/7 para clientes'
    }
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/1NkuH1E9H6/?mibextid=wwXIfr', name: 'Facebook', color: 'text-blue-600' },
    { icon: MessageCircle, href: 'https://wa.me/message/E7ZCATTSTYXHF1', name: 'WhatsApp', color: 'text-green-600' },
    //{ icon: Linkedin, href: '#', name: 'LinkedIn', color: 'text-blue-700' },
    { icon: Instagram, href: 'http://www.instagram.com/intellisoft.mx', name: 'Instagram', color: 'text-pink-600' }
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Hablemos de tu
              <span className="text-blue-600 ml-3">Proyecto</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              ¿Tienes una idea innovadora? Estamos aquí para ayudarte a hacerla realidad. 
              Agenda una consulta gratuita y descubre cómo podemos transformar tu visión.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Consulta Gratuita
                </h2>
                <p className="text-gray-600 mb-8">
                  Completa el formulario y uno de nuestros expertos se contactará contigo 
                  en menos de 24 horas para discutir tu proyecto.
                </p>

                {formStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center"
                  >
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <span className="text-green-800">
                      ¡Mensaje enviado exitosamente! Te contactaremos pronto.
                    </span>
                  </motion.div>
                )}

                {formStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6 flex items-center"
                  >
                    <AlertCircle className="h-5 w-5 text-red-600 mr-3" />
                    <span className="text-red-800">
                      Hubo un error al enviar el mensaje. Inténtalo de nuevo.
                    </span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Nombre completo *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Tu nombre completo"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Empresa
                      </label>
                      <div className="relative">
                        <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="Nombre de tu empresa"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Teléfono
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          placeholder="+52 55 1234 5678"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Servicio de interés *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Selecciona un servicio</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-900 mb-2">
                        Presupuesto estimado
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Selecciona un rango</option>
                        {budgets.map((budget) => (
                          <option key={budget} value={budget}>{budget}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-900 mb-2">
                      Mensaje *
                    </label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        placeholder="Cuéntanos sobre tu proyecto, objetivos y cualquier requerimiento específico..."
                      />
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      name="acceptTerms"
                      checked={formData.acceptTerms}
                      onChange={handleInputChange}
                      required
                      className="mt-1 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label className="text-sm text-gray-600">
                      Acepto los{' '}
                      <a href="#" className="text-blue-600 hover:underline">términos y condiciones</a>{' '}
                      y la{' '}
                      <a href="#" className="text-blue-600 hover:underline">política de privacidad</a> *
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Enviar Mensaje
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Información de Contacto
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Estamos ubicados en el corazón de la Ciudad de México, 
                  listos para atenderte y hacer realidad tus proyectos tecnológicos.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <info.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="text-gray-700 font-medium">
                            {detail}
                          </div>
                        ))}
                        <p className="text-gray-600 text-sm mt-1">{info.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media */}
              <div className="bg-blue-600 rounded-xl p-8 text-white">
                <h3 className="text-xl font-semibold mb-6">Síguenos en Redes Sociales</h3>
                <p className="text-blue-100 mb-8 text-center">
                  Mantente al día con nuestras últimas innovaciones y casos de éxito.
                </p>
                <div className="flex justify-center space-x-8 mb-8">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <social.icon className="h-7 w-7 text-white" />
                    </motion.a>
                  ))}
                </div>
                <div className="text-center">
                  <p className="text-blue-100 text-sm">
                    ¡Síguenos para conocer nuestros últimos proyectos y novedades!
                  </p>
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Stats Section - Moved below main content */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8 border border-gray-200 max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
              ¿Por qué elegir Intellisoft México?
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">15min</div>
                <div className="text-sm text-gray-600">Tiempo de respuesta</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Consultas gratuitas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">96%</div>
                <div className="text-sm text-gray-600">Clientes satisfechos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Soporte disponible</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Visítanos en Nuestra Oficina
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estamos ubicados en una zona accesible del estado de Puebla. 
              ¡Agenda una cita y conoce nuestro equipo!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="h-96 bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <div className="text-gray-600">
                  <div className="font-semibold">Intellisoft México</div>
                  <div>Calle 2 sur 119, Col. Cuacnopalan</div>
                  <div>Palmar de Bravo, Puebla, 75515</div>
                </div>
              </div>
            </div>
            <div className="p-6 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-sm text-gray-600">Metro más cercano</div>
                  <div className="font-semibold text-gray-900">----</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Estacionamiento</div>
                  <div className="font-semibold text-gray-900">Disponible</div>
                </div>
                <div>
                  <div className="text-sm text-gray-600">Acceso</div>
                  <div className="font-semibold text-gray-900">Con cita previa</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact