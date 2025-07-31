import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  ShoppingCart, 
  Database,
  Shield,
  ArrowRight
} from 'lucide-react'

const FeaturedServices = () => {
  const services = [
    {
      icon: Globe,
      title: 'Desarrollo Web',
      description: 'Sitios web modernos y aplicaciones web robustas con las últimas tecnologías.',
      features: ['React & Vue.js', 'Backend escalable', 'SEO optimizado', 'Responsive design'],
      color: 'blue'
    },
    {
      icon: Smartphone,
      title: 'Apps Móviles',
      description: 'Aplicaciones nativas y multiplataforma para iOS y Android.',
      features: ['React Native', 'Flutter', 'UI/UX optimizado', 'Push notifications'],
      color: 'green'
    },
    {
      icon: Cloud,
      title: 'Soluciones Cloud',
      description: 'Migración e implementación de infraestructura en la nube.',
      features: ['AWS & Azure', 'DevOps', 'Escalabilidad', 'Monitoreo 24/7'],
      color: 'purple'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce',
      description: 'Tiendas online completas con sistemas de pago integrados.',
      features: ['Shopify & WooCommerce', 'Pasarelas de pago', 'Inventario', 'Analytics'],
      color: 'orange'
    },
    {
      icon: Database,
      title: 'Big Data & BI',
      description: 'Análisis de datos e inteligencia de negocios para toma de decisiones.',
      features: ['Data warehouses', 'Dashboards', 'Machine Learning', 'Reportes'],
      color: 'indigo'
    },
    {
      icon: Shield,
      title: 'Ciberseguridad',
      description: 'Protección integral de sistemas y datos empresariales.',
      features: ['Auditorías', 'Pentesting', 'Compliance', 'Capacitación'],
      color: 'red'
    }
  ]

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
      green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
      purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
      orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
      indigo: 'from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700',
      red: 'from-red-500 to-red-600 hover:from-red-600 hover:to-red-700'
    }
    return colors[color] || colors.blue
  }

  return (
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
            Nuestros Servicios
            <span className="text-blue-600 ml-2">Especializados</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ofrecemos un ecosistema completo de soluciones tecnológicas diseñadas 
            específicamente para impulsar el crecimiento de empresas mexicanas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${getColorClasses(service.color)} p-6 text-white`}>
                <service.icon className="h-8 w-8 mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-white/90 text-sm">{service.description}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/servicios"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:translate-x-1 transition-transform duration-300"
                >
                  Ver más detalles
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              ¿No encuentras el servicio que necesitas?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              En Intellisoft México desarrollamos soluciones personalizadas. Cuéntanos sobre 
              tu proyecto y creemos juntos la solución perfecta para tu empresa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contacto"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 inline-flex items-center justify-center"
              >
                Consultoría Personalizada
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/servicios"
                className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-300"
              >
                Ver Todos los Servicios
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturedServices