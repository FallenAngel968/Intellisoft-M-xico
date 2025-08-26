import React from 'react'
import { motion } from 'framer-motion'
import { 
  Target, 
  Eye, 
  Heart, 
  Users, 
  Award, 
  Calendar,
  MapPin,
  Lightbulb,
  TrendingUp,
  Shield
} from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovación',
      description: 'Buscamos constantemente nuevas formas de resolver problemas complejos con tecnología de vanguardia.'
    },
    {
      icon: Heart,
      title: 'Compromiso',
      description: 'Nos dedicamos completamente al éxito de nuestros clientes, tratando cada proyecto como si fuera nuestro.'
    },
    {
      icon: Shield,
      title: 'Confiabilidad',
      description: 'Cumplimos nuestras promesas y entregamos soluciones robustas que funcionan cuando más las necesitas.'
    },
    {
      icon: TrendingUp,
      title: 'Excelencia',
      description: 'Mantenemos los más altos estándares de calidad en cada línea de código y cada interacción.'
    }
  ]

  const timeline = [
    {
      year: 'Marzo 2022',
      title: 'Fundación de INTELLISOFT',
      description: 'Iniciamos como un equipo de desarrolladores apasionados por transformar ideas en soluciones digitales.'
    },
    {
      year: 'Julio 2022',
      title: 'Primeros Proyectos Exitosos',
      description: 'Completamos nuestros primeros 25 proyectos, estableciendo nuestra reputación en el mercado mexicano.'
    },
    {
      year: 'Enero 2023',
      title: 'Expansión de Servicios',
      description: 'Incorporamos servicios de consultoría en la nube y ciberseguridad, ampliando nuestro alcance.'
    },
    //{
     // year: 'Abril 2024',
      //title: 'Reconocimiento Nacional',
      //description: 'Recibimos el premio "Mejor Empresa de Tecnología Emergente" por nuestro impacto en PyMEs mexicanas.'
    //},
    {
      year: 'Abril 2024',
      title: 'Innovación con IA',
      description: 'Lanzamos nuestro asistente virtual inteligente, siendo pioneros en IA aplicada a negocios.'
    },
    {
      year: ' Marzo 2025',
      title: 'Liderazgo Consolidado',
      description: 'Alcanzamos los 12+ proyectos exitosos y establecemos nuevas metas de crecimiento sostenible.'
    }
  ]

  const team = [
    {
      name: 'Ing. Héctor Catillo',
      position: 'CEO & Fundador',
      description: 'Especialista en desarrollo Frontend y UX/UI .',
      expertise: ['Diseño UX/UI', 'Transformación Digital', 'Prototipado']
    },
    {
      name: 'Ing. Angel Eduardo',
      position: 'CEO & Fundador',
      description: 'Especialista en tecnologías emergentes y arquitecturas escalables. Líder en innovación tecnológica.',
      expertise: ['Cloud Computing', 'DevOps', 'Arquitectura de Software']
    },
    {
      name: 'Ing. Antonio Arellano',
      position: 'Director de Proyectos',
      description: 'Experto en gestión de proyectos ágiles con certificaciones PMP y Scrum Master.',
      expertise: ['Metodologías Ágiles', 'Gestión de Equipos', 'Entrega de Proyectos']
    },
    
    //{
      //name: 'Ing. Ana Martínez',
     //position: 'Directora de UX/UI',
      //description: 'Diseñadora con enfoque en experiencia de usuario y interfaces intuitivas para el mercado mexicano.',
      //expertise: ['Diseño UX/UI', 'Investigación de Usuarios', 'Prototipado']
   // }
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
              Sobre
              <span className="text-blue-600 ml-3">Intellisfot México</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Somos un equipo de visionarios tecnológicos comprometidos con transformar 
              el panorama digital de México, una solución innovadora a la vez.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full flex items-center justify-center">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h2>
              <p className="text-gray-600 leading-relaxed">
                Empoderar a las empresas mexicanas con soluciones tecnológicas innovadoras 
                que impulsen su crecimiento, mejoren su competitividad y transformen su 
                futuro digital.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-purple-100 rounded-full flex items-center justify-center">
                <Eye className="h-8 w-8 text-purple-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Visión</h2>
              <p className="text-gray-600 leading-relaxed">
                Ser la empresa líder en soluciones tecnológicas de México, reconocida por 
                nuestra innovación, calidad excepcional y el impacto positivo en la 
                transformación digital del país.
              </p>
            </motion.div>

            {/* Values Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestros Valores</h2>
              <p className="text-gray-600 leading-relaxed">
                Nos guiamos por principios sólidos de innovación, compromiso, confiabilidad 
                y excelencia en cada proyecto que emprendemos.
              </p>
            </motion.div>
          </div>

          {/* Detailed Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <value.icon className="h-8 w-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
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
              Nuestra
              <span className="text-blue-600 ml-2">Historia</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desde nuestros humildes inicios hasta convertirnos en líderes del sector, 
              cada paso ha sido guiado por nuestra pasión por la innovación.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-600"></div>

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <div className="text-blue-600 font-bold text-lg mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>

                {/* Spacer */}
                <div className="w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              <span className="text-blue-600 ml-2">Equipo</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conoce a los expertos que hacen posible la transformación digital 
              de empresas mexicanas cada día.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <div className="text-blue-600 font-medium mb-3">{member.position}</div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Intellisoft México en Números
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Nuestro crecimiento y éxito se reflejan en estas métricas que demuestran 
              nuestro compromiso con la excelencia.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-yellow-400 mb-2">12+</div>
              <div className="text-blue-100">Proyectos Completados</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-yellow-400 mb-2">98%</div>
              <div className="text-blue-100">Satisfacción del Cliente</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-yellow-400 mb-2">2+</div>
              <div className="text-blue-100">Años de Experiencia</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-yellow-400 mb-2">25+</div>
              <div className="text-blue-100">Especialistas</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About