import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, Code, Rocket } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium"
            >
              <Rocket className="h-4 w-4 mr-2" />
              Innovación Tecnológica Mexicana
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight"
            >
              Transformamos
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Ideas en Realidad
              </span>
              Digital
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl text-gray-600 leading-relaxed max-w-lg"
            >
              Somos Intellisoft México, tu socio estratégico en tecnología. 
              Desarrollamos soluciones innovadoras que impulsan el crecimiento 
              de empresas mexicanas hacia el futuro digital.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/contacto"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 group transform hover:-translate-y-1 hover:shadow-lg"
              >
                Consulta Gratuita
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
            >
              <div>
                <div className="text-2xl font-bold text-blue-600">12+</div>
                <div className="text-sm text-gray-600">Proyectos Exitosos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">96%</div>
                <div className="text-sm text-gray-600">Clientes Satisfechos</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-blue-600">2+</div>
                <div className="text-sm text-gray-600">Años de Experiencia</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Illustration Container */}
              <div className="relative z-10">
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    rotate: [0, 1, 0]
                  }}
                  transition={{ 
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100"
                >
                  <div className="space-y-6">
                    {/* Code Editor Mockup */}
                    <div className="bg-gray-900 rounded-lg p-4">
                      <div className="flex items-center space-x-2 mb-4">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="space-y-2 text-sm font-mono">
                        <div className="text-blue-400">function innovate() {'{'}</div>
                        <div className="text-white ml-4">const solution = new Technology();</div>
                        <div className="text-green-400 ml-4">return solution.transform();</div>
                        <div className="text-blue-400">{'}'}</div>
                      </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">↗️</div>
                        <div className="text-sm text-gray-600">Performance</div>
                        <div className="text-lg font-semibold text-gray-900">+250%</div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">💰</div>
                        <div className="text-sm text-gray-600">ROI</div>
                        <div className="text-lg font-semibold text-gray-900">+180%</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -12, 0],
                  x: [0, 9, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -top-4 -right-4 z-20"
              >
                <div className="bg-blue-600 text-white p-3 rounded-full shadow-lg">
                  <Code className="h-6 w-6" />
                </div>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  x: [0, -10, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute -bottom-6 -left-6 z-20"
              >
                <div className="bg-purple-600 text-white p-4 rounded-xl shadow-lg">
                  <div className="text-sm font-semibold">Intellisoft</div>
                  <div className="text-xs opacity-90">México</div>
                </div>
              </motion.div>

              {/* Background Decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-2xl transform rotate-3 scale-105 -z-10"></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-300 rounded-full blur-3xl"
        ></motion.div>
      </div>
    </section>
  )
}

export default Hero