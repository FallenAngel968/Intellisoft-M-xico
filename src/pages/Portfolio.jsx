import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ExternalLink, 
  Github, 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Database,
  Cloud,
  Filter,
  ArrowRight,
  Star,
  Calendar,
  Users
} from 'lucide-react'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all')

  const categories = [
    { id: 'all', name: 'Todos los Proyectos', count: 12 },
    { id: 'web', name: 'Desarrollo Web', count: 5 },
    { id: 'mobile', name: 'Apps Móviles', count: 3 },
    { id: 'ecommerce', name: 'E-commerce', count: 2 },
    { id: 'cloud', name: 'Soluciones Cloud', count: 2 }
  ]

  const projects = [
    {
      id: 1,
      title: 'TecnoMex Solutions - ERP Empresarial',
      category: 'web',
      client: 'TecnoMex Solutions',
      industry: 'Manufactura',
      description: 'Sistema de planificación de recursos empresariales completo que integra inventarios, ventas, contabilidad y recursos humanos en una sola plataforma.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
      features: [
        'Gestión de inventarios en tiempo real',
        'Sistema de facturación electrónica',
        'Módulo de recursos humanos',
        'Reportes y analytics avanzados'
      ],
      results: {
        efficiency: '+300%',
        cost: '-40%',
        time: '6 meses'
      },
      testimonial: 'Intellisoft México transformó completamente nuestra operación. El sistema es intuitivo y ha mejorado nuestra productividad significativamente.',
      clientName: 'María González, CEO',
      link: '#',
      github: '#',
      status: 'Completado',
      year: '2024'
    },
    {
      id: 2,
      title: 'Maya Store - Marketplace E-commerce',
      category: 'ecommerce',
      client: 'Comercial del Pacífico',
      industry: 'Retail',
      description: 'Plataforma de e-commerce completa con marketplace multi-vendedor, sistema de pagos integrado y gestión de logística.',
      image: '/api/placeholder/600/400',
      technologies: ['Shopify Plus', 'React', 'Node.js', 'Stripe'],
      features: [
        'Marketplace multi-vendedor',
        'Pasarelas de pago mexicanas',
        'Sistema de logistics y envíos',
        'Panel de administración avanzado'
      ],
      results: {
        sales: '+250%',
        vendors: '50+',
        time: '4 meses'
      },
      testimonial: 'Nuestra tienda online superó todas las expectativas. Las ventas se triplicaron en los primeros 6 meses.',
      clientName: 'Ana Rodríguez, Fundadora',
      link: '#',
      github: '#',
      status: 'Completado',
      year: '2024'
    },
    {
      id: 3,
      title: 'LogiTrans - App de Gestión de Flotas',
      category: 'mobile',
      client: 'LogiTrans México',
      industry: 'Logística',
      description: 'Aplicación móvil para gestión de flotas de transporte con tracking GPS, optimización de rutas y comunicación en tiempo real.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Firebase', 'Google Maps API', 'Node.js'],
      features: [
        'Tracking GPS en tiempo real',
        'Optimización de rutas inteligente',
        'Comunicación conductor-dispatcher',
        'Reportes de eficiencia de flota'
      ],
      results: {
        efficiency: '+180%',
        fuel: '-25%',
        time: '5 meses'
      },
      testimonial: 'La app revolucionó nuestra operación logística. Ahora tenemos control total de nuestra flota.',
      clientName: 'Roberto Silva, Gerente General',
      link: '#',
      github: '#',
      status: 'Completado',
      year: '2023'
    },
    {
      id: 4,
      title: 'CloudMed - Sistema Hospitalario',
      category: 'cloud',
      client: 'Hospital San Ángel',
      industry: 'Salud',
      description: 'Sistema integral de gestión hospitalaria en la nube con historiales médicos electrónicos, gestión de citas y facturación.',
      image: '/api/placeholder/600/400',
      technologies: ['AWS', 'React', 'Python', 'PostgreSQL'],
      features: [
        'Historiales médicos electrónicos',
        'Sistema de citas online',
        'Gestión de inventario médico',
        'Facturación y seguros'
      ],
      results: {
        efficiency: '+200%',
        paperless: '95%',
        time: '8 meses'
      },
      testimonial: 'El sistema digitalizó completamente nuestros procesos. Los médicos ahora tienen acceso instantáneo a la información.',
      clientName: 'Dr. Carlos Mendoza, Director Médico',
      link: '#',
      github: '#',
      status: 'Completado',
      year: '2023'
    },
    {
      id: 5,
      title: 'FinTech Wallet - App de Pagos',
      category: 'mobile',
      client: 'FinTech Innovations',
      industry: 'Finanzas',
      description: 'Aplicación móvil de billetera digital con transferencias P2P, pagos QR y integración con comercios.',
      image: '/api/placeholder/600/400',
      technologies: ['Flutter', 'Firebase', 'Blockchain', 'Node.js'],
      features: [
        'Transferencias P2P instantáneas',
        'Pagos con código QR',
        'Integración con comercios',
        'Seguridad blockchain'
      ],
      results: {
        users: '100K+',
        transactions: '1M+',
        time: '6 meses'
      },
      testimonial: 'La app cambió la forma en que nuestros usuarios manejan sus finanzas. La adopción fue increíble.',
      clientName: 'Laura Vega, Product Manager',
      link: '#',
      github: '#',
      status: 'Completado',
      year: '2023'
    },
    {
      id: 6,
      title: 'EduTech Platform - LMS Educativo',
      category: 'web',
      client: 'Universidad Tecnológica',
      industry: 'Educación',
      description: 'Plataforma de gestión de aprendizaje (LMS) con aulas virtuales, evaluaciones online y seguimiento de progreso.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC'],
      features: [
        'Aulas virtuales interactivas',
        'Sistema de evaluaciones',
        'Seguimiento de progreso',
        'Biblioteca digital'
      ],
      results: {
        students: '5000+',
        satisfaction: '96%',
        time: '7 meses'
      },
      testimonial: 'La plataforma transformó nuestra metodología educativa. Los estudiantes están más comprometidos que nunca.',
      clientName: 'Mtro. José Ramírez, Rector',
      link: '#',
      github: '#',
      status: 'En desarrollo',
      year: '2024'
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  const getCategoryIcon = (category) => {
    const icons = {
      web: Globe,
      mobile: Smartphone,
      ecommerce: ShoppingCart,
      cloud: Cloud,
      data: Database
    }
    return icons[category] || Globe
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
              Nuestro
              <span className="text-blue-600 ml-3">Portafolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubre los proyectos que han transformado empresas mexicanas. 
              Cada solución cuenta una historia de innovación y éxito.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">12+</div>
              <div className="text-gray-600">Proyectos Completados</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Tasa de Éxito</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600">Industrias Atendidas</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
              <div className="text-gray-600">Clientes Satisfechos</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <Filter className="h-4 w-4" />
                <span>{category.name}</span>
                <span className={`text-xs px-2 py-1 rounded-full ${
                  activeFilter === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {filteredProjects.map((project, index) => {
              const CategoryIcon = getCategoryIcon(project.category)
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300"
                >
                  {/* Project Image */}
                  <div className="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white">
                        <CategoryIcon className="h-16 w-16 mx-auto mb-4 opacity-80" />
                        <div className="text-sm font-medium opacity-90">{project.industry}</div>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Completado' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 text-white text-sm font-medium">
                      {project.year}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                        <div className="text-blue-600 font-medium text-sm">{project.client}</div>
                      </div>
                      <div className="flex space-x-2">
                        <a 
                          href={project.link} 
                          className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                        >
                          <ExternalLink className="h-4 w-4 text-gray-600" />
                        </a>
                        <a 
                          href={project.github} 
                          className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition-colors duration-200"
                        >
                          <Github className="h-4 w-4 text-gray-600" />
                        </a>
                      </div>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="text-sm font-medium text-gray-900 mb-2">Tecnologías:</div>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mb-6">
                      <div className="text-sm font-medium text-gray-900 mb-3">Resultados:</div>
                      <div className="grid grid-cols-3 gap-4">
                        {Object.entries(project.results).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-2xl font-bold text-blue-600">{value}</div>
                            <div className="text-xs text-gray-600 capitalize">{key}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gray-50 rounded-lg p-4 mb-6">
                      <p className="text-gray-700 text-sm italic mb-2">"{project.testimonial}"</p>
                      <div className="text-xs text-gray-600">- {project.clientName}</div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <div className="text-sm font-medium text-gray-900 mb-2">Características clave:</div>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2 flex-shrink-0"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center group">
                      Ver Caso de Estudio Completo
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              ¿Tu proyecto será el próximo?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Cada gran proyecto comienza con una conversación. Cuéntanos tu idea 
              y hagamos realidad tu próxima historia de éxito.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-colors duration-300">
                Iniciar mi Proyecto
              </button>
              <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors duration-300">
                Descargar Casos de Estudio
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio