import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Phone, Mail, Calendar } from 'lucide-react'

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold leading-tight mb-6"
              >
                ¿Listo para 
                <span className="block text-yellow-400">Transformar tu Empresa?</span>
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl text-blue-100 leading-relaxed mb-8"
              >
                No esperes más para llevar tu negocio al siguiente nivel. 
                Agenda una consulta gratuita y descubre cómo podemos impulsar 
                el crecimiento de tu empresa con tecnología de vanguardia.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <span className="text-lg">Consulta inicial completamente gratuita</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <span className="text-lg">Análisis personalizado de tu proyecto</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">✓</span>
                </div>
                <span className="text-lg">Propuesta de solución sin compromiso</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition-all duration-300 group transform hover:-translate-y-1 hover:shadow-lg"
              >
                <Calendar className="mr-3 h-6 w-6" />
                Agenda tu Consulta Gratuita
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <a
                href="tel:+525512345678"
                className="inline-flex items-center justify-center bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              >
                <Phone className="mr-3 h-6 w-6" />
                Llama Ahora
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Contact Options */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Contáctanos Hoy</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                  <Phone className="h-6 w-6 text-yellow-400" />
                  <div>
                    <div className="font-semibold">Teléfono</div>
                    <div className="text-blue-100">+52 55 1234 5678</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg">
                  <Mail className="h-6 w-6 text-yellow-400" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-blue-100">contacto@intellisoft.mx</div>
                  </div>
                </div>
                
                <div className="text-center pt-4">
                  <div className="text-sm text-blue-100 mb-4">
                    Horarios de atención: Lun-Vie 9:00 AM - 7:00 PM (CST)
                  </div>
                  <div className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    <span className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></span>
                    En línea ahora
                  </div>
                </div>
              </div>
            </div>

            {/* Urgency Indicator */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="bg-yellow-400 text-gray-900 rounded-xl p-6 text-center"
            >
              <div className="font-bold text-lg mb-2">🚀 Oferta Limitada</div>
              <div className="text-sm">
                Consulta gratuita + 20% de descuento en tu primer proyecto
              </div>
              <div className="text-xs mt-2 opacity-80">
                Válido hasta fin de mes. No pierdas esta oportunidad.
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">15min</div>
            <div className="text-blue-100 text-sm">Tiempo de respuesta promedio</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
            <div className="text-blue-100 text-sm">Consultas gratuitas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
            <div className="text-blue-100 text-sm">Soporte disponible</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-yellow-400 mb-2">0%</div>
            <div className="text-blue-100 text-sm">Compromiso inicial</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA