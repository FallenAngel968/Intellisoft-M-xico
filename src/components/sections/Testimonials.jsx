import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'María González',
      position: 'CEO, TecnoMex Solutions',
      company: 'TecnoMex Solutions',
      image: '/api/placeholder/64/64',
      rating: 5,
      text: 'Intellisoft México transformó completamente nuestra infraestructura tecnológica. El equipo es excepcional y el soporte en español marca la diferencia. Hemos visto un incremento del 300% en nuestra productividad.',
      results: '300% incremento en productividad'
    },
    {
      id: 2,
      name: 'Carlos Mendoza',
      position: 'Director de TI',
      company: 'Comercial del Pacífico',
      image: '/api/placeholder/64/64',
      rating: 5,
      text: 'La migración a la nube que realizaron fue impecable. Sin interrupciones en el servicio y con una reducción del 40% en costos operativos. Su expertise en tecnologías mexicanas es invaluable.',
      results: '40% reducción en costos'
    },
    {
      id: 3,
      name: 'Ana Rodríguez',
      position: 'Fundadora',
      company: 'E-commerce Maya',
      image: '/api/placeholder/64/64',
      rating: 5,
      text: 'Nuestra tienda online desarrollada por Intellisoft México superó todas las expectativas. Las ventas se triplicaron en los primeros 6 meses. Su comprensión del mercado mexicano es excepcional.',
      results: '300% incremento en ventas'
    },
    {
      id: 4,
      name: 'Roberto Silva',
      position: 'Gerente General',
      company: 'Manufactura Integral',
      image: '/api/placeholder/64/64',
      rating: 5,
      text: 'El sistema de gestión empresarial que desarrollaron revolucionó nuestros procesos. Ahora manejamos todo desde una sola plataforma. La inversión se recuperó en menos de un año.',
      results: 'ROI en menos de 12 meses'
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
            Lo que Dicen Nuestros
            <span className="text-blue-600 ml-2">Clientes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor carta de presentación. 
            Descubre cómo hemos transformado empresas mexicanas como la tuya.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4">
                <div className="bg-blue-600 text-white p-3 rounded-full">
                  <Quote className="h-6 w-6" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </blockquote>

              {/* Results Badge */}
              <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                {testimonial.results}
              </div>

              {/* Author Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                  <span className="text-gray-600 font-semibold text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.position}</div>
                  <div className="text-blue-600 text-sm font-medium">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Confianza Comprobada
              </h3>
              <p className="text-gray-600">
                Empresas de todos los tamaños confían en Intellisoft México
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                <div className="text-gray-600 text-sm">Satisfacción del Cliente</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">12+</div>
                <div className="text-gray-600 text-sm">Proyectos Completados</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">2+</div>
                <div className="text-gray-600 text-sm">Años de Experiencia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-gray-600 text-sm">Soporte en Español</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Google Reviews Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-full shadow-md border border-gray-200">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-gray-700 font-medium">4.9/5</span>
            <span className="text-gray-500">•</span>
            <span className="text-gray-600">Basado en 12 reseñas</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials