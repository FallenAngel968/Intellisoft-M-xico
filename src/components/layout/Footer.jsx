import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook,
  MessageCircle, // Usamos MessageCircle para WhatsApp
  Linkedin, 
  Instagram,
  ArrowUp
} from 'lucide-react'
// Importamos el isotipo
import IsotipoLight from '../../assets/images/iISOTIPO_MAYORQUE_ 1.svg'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Servicios', path: '/servicios' },
    { name: 'Portafolio', path: '/portafolio' },
    { name: 'Contacto', path: '/contacto' },
  ]

  const services = [
    'Desarrollo Web',
    'Aplicaciones Móviles',
    'Consultoría TI',
    'Transformación Digital',
    'Soporte Técnico',
  ]

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/share/1NkuH1E9H6/?mibextid=wwXIfr', name: 'Facebook' },
    { icon: MessageCircle, href: 'https://wa.me/message/E7ZCATTSTYXHF1', name: 'WhatsApp' },
   // { icon: Linkedin, href: '#', name: 'LinkedIn' },
    { icon: Instagram, href: 'http://www.instagram.com/intellisoft.mx', name: 'Instagram' },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <span className="font-bold text-xl">
                Intellisoft
                <span className="text-blue-400 ml-1">México</span>
              </span>
              <img 
                src={IsotipoLight} 
                alt="INTELLISOFT" 
                className="h-8 w-8"
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Transformamos ideas en soluciones tecnológicas innovadoras. 
              Somos tu socio estratégico en la transformación digital de tu empresa.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 lg:ml-8"
          >
            <h3 className="text-lg font-semibold text-white">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Servicios</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm hover:text-blue-400 transition-colors duration-200 cursor-pointer">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Palmar de Bravo, Puebla, México
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  +52 249 177 7726
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  +52 221 691 6933
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  intellisoft.mx@gmail.com
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2025 Intellisoft México. Todos los derechos reservados.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start space-x-4 mt-2">
                <Link to="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                  Aviso de Privacidad
                </Link>
                <Link to="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                  Términos y Condiciones
                </Link>
                <Link to="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200">
                  Política de Cookies
                </Link>
              </div>
            </div>
            
            {/* Scroll to Top Button */}
            <motion.button
              onClick={scrollToTop}
              className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="h-5 w-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer