import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  ShoppingCart, 
  Database,
  Shield,
  Code,
  Palette,
  Headphones,
  ArrowRight,
  Check,
  Star,
  Clock,
  Users
} from 'lucide-react'

const Services = () => {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      id: 'web-development',
      icon: Globe,
      title: 'Desarrollo Web',
      subtitle: 'Sitios web modernos y aplicaciones web robustas',
      description: 'Creamos experiencias web excepcionales que combinan diseño atractivo con funcionalidad avanzada. Utilizamos las tecnologías más modernas para garantizar sitios web rápidos, seguros y escalables.',
      features: [
        'Diseño visual profesional y adaptable a móviles',
      'Administración fácil del contenido',
      'Carga rápida y segura',
      
      'Formularios de contacto y cotización',
      'Integración con redes sociales',
      'Pasarelas de pago si se requiere',
      'Panel para que tú mismo puedas hacer cambios'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'TypeScript'],
      price: '$9,000 MXN',
      deliveryTime: '4+ semanas',
      color: 'blue'
    },
    {
      id: 'mobile-apps',
      icon: Smartphone,
      title: 'Aplicaciones Móviles',
      subtitle: 'Apps personalizadas para iPhone y Android',
      description: 'Desarrollamos apps para que tu negocio esté presente en los celulares de tus clientes. Fáciles de usar, atractivas y funcionales.',
      features: [
        'Diseño intuitivo y moderno',
      'Funciona en iPhone y Android',
      'Notificaciones para tus usuarios',
      'Geolocalización o mapas si se necesita',
      'Cámara, multimedia y más funciones nativas',
      'Publicación en App Store y Google Play',
      'Integración con sistemas que ya usas',
      'Soporte y actualizaciones'
      ],
      technologies: ['React Native', 'Flutter', 'Kotlin', 'Firebase'],
      price: '$29,000 MXN',
      deliveryTime: '7+ semanas',
      color: 'green'
    },
    {
      id: 'cloud-solutions',
      icon: Cloud,
      title: 'Soluciones en la Nube',
      subtitle: 'Moderniza tu empresa con tecnología en línea',
      description: 'Llevamos tus sistemas a la nube para que puedas acceder a ellos desde cualquier lugar, ahorres costos y trabajes con más seguridad.',
      features: [
        'Migramos tus sistemas a servidores seguros',
      'Acceso en línea desde cualquier dispositivo',
      'Automatización de procesos internos',
      'Respaldo automático de información',
      'Mayor protección de datos',
      'Menor gasto en infraestructura física',
      'Mejora el rendimiento de tus equipos',
      'Escalable según el crecimiento de tu negocio'
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud'],
      price: '$25,000 MXN',
      deliveryTime: '4+ semanas',
      color: 'purple'
    },
    {
      id: 'ecommerce',
      icon: ShoppingCart,
      title: 'E-commerce',
      subtitle: 'Vende por internet de forma segura y profesional',
      description: 'Creamos tu tienda virtual lista para vender, con carrito de compras, pagos seguros y gestión de productos sencilla.',
      features: [
        'Diseño visual que genera confianza',
      'Gestión fácil de productos e inventario',
      'Pagos con tarjetas, OXXO, transferencia, etc.',
      'Panel para ver ventas y pedidos',
      'Envío automático de correos de confirmación',
      'Integración con redes sociales y marketplaces',
      'Soporte para descuentos y cupones',
      'Optimizada para que aparezcas en Google'
      ],
      technologies: ['Shopify', 'WooCommerce', 'Stripe', 'PayPal', 'Mercado Pago'],
      price: '$30,000 MXN',
      deliveryTime: '9+ semanas',
      color: 'orange'
    },
    {
      id: 'data-analytics',
      icon: Database,
      title: 'Big Data & Analytics',
      subtitle: 'Conoce mejor tu negocio con datos',
      description: 'Te ayudamos a entender la información de tu empresa para que tomes mejores decisiones y crezcas con estrategia.',
      features: [
        'Reportes visuales y fáciles de leer',
      'Análisis de ventas, clientes y comportamiento',
      'Automatización de reportes',
      'Predicción de tendencias futuras',
      'Unificación de información de diferentes áreas',
      'Seguimiento de indicadores clave (KPIs)',
      'Paneles de control interactivos',
      'Acceso desde cualquier lugar'
      ],
      technologies: ['Python', 'Excel avanzado', 'Power BI', 'Tableau', 'Apache Spark'],
      price: '$33,000 MXN',
      deliveryTime: '6+ semanas',
      color: 'indigo'
    },
    {
      id: 'cybersecurity',
      icon: Shield,
      title: 'Ciberseguridad',
      subtitle: 'Protección total para tus sistemas y datos',
      description: 'Protegemos la información de tu empresa contra robos, virus y ataques, asegurando que solo las personas autorizadas tengan acceso.',
      features: [
        'Revisión completa de seguridad en tus sistemas',
      'Configuración de protecciones y alertas',
      'Respaldo automático de información',
      'Prevención contra robo de datos',
      'Asesoría para buenas prácticas de seguridad',
      'Cumplimiento con normativas locales',
      'Capacitación para tu personal',
      'Recuperación de información ante emergencias'
      ],
      technologies: ['Wireshark', 'Nessus', 'Metasploit', 'OWASP', 'ISO 27001'],
      price: '$19,000 MXN',
      deliveryTime: '3+ semanas',
      color: 'red'
    }
  ]

  const additionalServices = [
    {
      icon: Code,
      title: 'Desarrollo de Software a Medida',
      description: 'Sistemas empresariales personalizados'
    },
    {
      icon: Palette,
      title: 'Diseño UX/UI',
      description: 'Interfaces intuitivas y atractivas'
    },
    {
      icon: Headphones,
      title: 'Soporte Técnico 24/7',
      description: 'Mantenimiento y soporte continuo'
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
      indigo: 'from-indigo-500 to-indigo-600',
      red: 'from-red-500 to-red-600'
    }
    return colors[color] || colors.blue
  }

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
              Nuestros
              <span className="text-blue-600 ml-3">Servicios</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ofrecemos un ecosistema completo de soluciones tecnológicas diseñadas para 
              impulsar el crecimiento y la transformación digital de tu empresa.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Service Navigation */}
            <div className="space-y-4">
              {services.map((service, index) => (
                <motion.button
                  key={service.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setActiveService(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${
                    activeService === index
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-gray-200 bg-white hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {React.createElement(service.icon, { 
                      className: `h-6 w-6 ${
                        activeService === index ? 'text-blue-600' : 'text-gray-600'
                      }`
                    })}
                    <span className={`font-medium ${
                      activeService === index ? 'text-blue-600' : 'text-gray-900'
                    }`}>
                      {service.title}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>

            {/* Service Details */}
            <div className="lg:col-span-3">
              <motion.div
                key={activeService}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
              >
                {/* Header */}
                <div className={`bg-gradient-to-r ${getColorClasses(services[activeService].color)} p-8 text-white`}>
                  <div className="flex items-start justify-between">
                    <div>
                      {React.createElement(services[activeService].icon, { className: "h-12 w-12 mb-4" })}
                      <h2 className="text-3xl font-bold mb-2">{services[activeService].title}</h2>
                      <p className="text-white/90 text-lg">{services[activeService].subtitle}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-sm opacity-90">Desde</div>
                      <div className="text-2xl font-bold">{services[activeService].price}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    {services[activeService].description}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Features */}
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        ¿Qué incluye este servicio?
                      </h3>
                      <ul className="space-y-3">
                        {services[activeService].features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-3">
                            <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Details */}
                    <div className="space-y-6">
                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Tecnologías</h4>
                        <div className="flex flex-wrap gap-2">
                          {services[activeService].technologies.map((tech) => (
                            <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Timeline */}
                      <div className="flex items-center space-x-4">
                        <Clock className="h-5 w-5 text-gray-400" />
                        <div>
                          <div className="font-medium text-gray-900">Tiempo de entrega</div>
                          <div className="text-gray-600 text-sm">{services[activeService].deliveryTime}</div>
                        </div>
                      </div>

                      {/* Team */}
                      <div className="flex items-center space-x-4">
                        <Users className="h-5 w-5 text-gray-400" />
                        <div>
                          <div className="font-medium text-gray-900">Equipo dedicado</div>
                          <div className="text-gray-600 text-sm">3-5 especialistas asignados</div>
                        </div>
                      </div>

                      {/* CTA */}
                      <div className="pt-4">
                        <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center group">
                          Solicitar Cotización
                          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Servicios
              <span className="text-blue-600 ml-2">Complementarios</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Además de nuestros servicios principales, ofrecemos soluciones complementarias 
              para cubrir todas tus necesidades tecnológicas.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                  {React.createElement(service.icon, { className: "h-8 w-8 text-blue-600" })}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro
              <span className="text-blue-600 ml-2">Proceso</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un proceso probado que garantiza resultados excepcionales en cada proyecto.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Análisis', description: 'Entendemos a fondo tus necesidades y objetivos de negocio.' },
              { step: '02', title: 'Planificación', description: 'Diseñamos la estrategia y arquitectura de tu solución.' },
              { step: '03', title: 'Desarrollo', description: 'Construimos tu solución con las mejores prácticas.' },
              { step: '04', title: 'Entrega', description: 'Implementamos y brindamos soporte continuo.' }
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  {phase.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{phase.title}</h3>
                <p className="text-gray-600">{phase.description}</p>
                
                {/* Connector */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-blue-200 transform -translate-y-px"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para empezar tu proyecto?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Agenda una consulta gratuita y descubre cómo podemos ayudarte a 
              alcanzar tus objetivos de negocio con tecnología innovadora.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-colors duration-300">
                Consulta Gratuita
              </button>
              <button className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-colors duration-300">
                Ver Portafolio
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Services