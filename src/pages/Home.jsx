import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  Code2, 
  Smartphone, 
  Cloud, 
  Shield,
  Zap,
  Users,
  Trophy,
  Star
} from 'lucide-react'
import Hero from '../components/sections/Hero'
import Stats from '../components/sections/Stats'
import FeaturedServices from '../components/sections/FeaturedServices'
import Testimonials from '../components/sections/Testimonials'
import CTA from '../components/sections/CTA'

const Home = () => {
  const features = [
    {
      icon: Code2,
      title: 'Desarrollo Personalizado',
      description: 'Soluciones a medida que se adaptan perfectamente a las necesidades de tu negocio.'
    },
    {
      icon: Smartphone,
      title: 'Tecnología Móvil',
      description: 'Apps nativas y multiplataforma con las últimas tecnologías del mercado.'
    },
    {
      icon: Cloud,
      title: 'Soluciones en la Nube',
      description: 'Migración y optimización de infraestructura para máxima eficiencia.'
    },
    {
      icon: Shield,
      title: 'Seguridad Avanzada',
      description: 'Protección integral de datos con los más altos estándares de seguridad.'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
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
              ¿Por qué elegir 
              <span className="text-blue-600 ml-2">Intellisoft México?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combinamos experiencia, innovación y tecnología de vanguardia para 
              impulsar el crecimiento de tu empresa en la era digital.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <feature.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <Stats />

      {/* Featured Services */}
      <FeaturedServices />

      {/* Testimonials */}
      <Testimonials />

      {/* Innovation Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Innovación que Transforma tu Negocio
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                En Intellisfot México no solo desarrollamos software, creamos 
                experiencias digitales que revolucionan la forma en que las 
                empresas mexicanas operan y crecen.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Zap className="h-6 w-6 text-yellow-400" />
                  <span className="text-lg">Implementación rápida y eficiente</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-yellow-400" />
                  <span className="text-lg">Soporte 24/7 en español</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Trophy className="h-6 w-6 text-yellow-400" />
                  <span className="text-lg">Garantía de calidad certificada</span>
                </div>
              </div>
              <Link
                to="/asistente"
                className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 mt-8 group"
              >
                Prueba nuestro Asistente IA
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">12+</div>
                    <div className="text-blue-100">Proyectos Exitosos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">98%</div>
                    <div className="text-blue-100">Satisfacción Cliente</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">2+</div>
                    <div className="text-blue-100">Años Experiencia</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                    <div className="text-blue-100">Soporte Técnico</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTA />
    </div>
  )
}

export default Home