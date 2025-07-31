import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Users, Award, Clock } from 'lucide-react'

const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      number: '250%',
      label: 'Incremento en Productividad',
      description: 'Promedio de mejora en eficiencia operativa'
    },
    {
      icon: Users,
      number: '20+',
      label: 'Clientes Satisfechos',
      description: 'Empresas que confían en nuestras soluciones'
    },
    {
      icon: Award,
      number: '98%',
      label: 'Tasa de Éxito',
      description: 'Proyectos entregados exitosamente'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Soporte Técnico',
      description: 'Disponibilidad completa en español'
    }
  ]

  return (
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
            Resultados que Hablan por Sí Solos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestro compromiso con la excelencia se refleja en cada proyecto. 
            Estos números demuestran el impacto real de nuestras soluciones.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold text-gray-900 mb-2"
                >
                  {stat.number}
                </motion.div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-blue-600 text-white rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para ser parte de estas estadísticas?
            </h3>
            <p className="text-blue-100 text-lg mb-6">
              Únete a las empresas mexicanas que ya están transformando su futuro con Intellisoft México.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-2xl font-bold text-yellow-400">15 días</div>
                <div className="text-blue-100">Tiempo promedio de implementación</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">180%</div>
                <div className="text-blue-100">ROI promedio en el primer año</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-400">100%</div>
                <div className="text-blue-100">Garantía de satisfacción</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Stats