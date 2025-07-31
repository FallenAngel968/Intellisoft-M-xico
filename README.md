# INTELLISOFT MÉXICO - Sitio Web Corporativo

Una página web profesional y moderna para **INTELLISOFT MÉXICO**, empresa líder en soluciones tecnológicas innovadoras. Desarrollada con **React** y **TailwindCSS** para ofrecer una experiencia de usuario excepcional.

## 🚀 Características Principales

### ✨ Funcionalidades Destacadas
- **Landing Page Impactante**: Hero con animaciones y llamadas a la acción
- **Sobre Nosotros**: Misión, visión, valores, historia y equipo
- **Servicios Completos**: 6 servicios principales con detalles técnicos
- **Portafolio Interactivo**: Casos de éxito con filtros por categoría
- **Formulario de Contacto**: Validación completa y estados de envío
- **Asistente Virtual IA**: Chatbot inteligente con recomendaciones (ARIA)
- **Diseño Responsivo**: Optimizado para desktop, tablet y móvil
- **Animaciones Fluidas**: Implementadas con Framer Motion

### 🎨 Diseño y UX
- **Moderna y Limpia**: Diseño profesional con gradientes y efectos
- **Colores Corporativos**: Paleta azul/púrpura con acentos amarillos
- **Tipografía**: Inter para texto y JetBrains Mono para código
- **Iconografía**: Lucide React para consistencia visual
- **Micro-interacciones**: Hover effects y transiciones suaves

## 🛠 Stack Tecnológico

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 4.5.0
- **Styling**: TailwindCSS 3.3.5
- **Animations**: Framer Motion 10.16.4
- **Icons**: Lucide React 0.294.0
- **Routing**: React Router DOM 6.18.0
- **Development**: Hot Module Replacement (HMR)

## 📁 Estructura del Proyecto

```
intellisoft-mexico-website/
├── public/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx       # Navegación responsiva
│   │   │   └── Footer.jsx       # Footer con links y contacto
│   │   └── sections/
│   │       ├── Hero.jsx         # Sección hero principal
│   │       ├── Stats.jsx        # Estadísticas animadas
│   │       ├── FeaturedServices.jsx # Servicios destacados
│   │       ├── Testimonials.jsx # Testimonios de clientes
│   │       └── CTA.jsx          # Llamadas a la acción
│   ├── pages/
│   │   ├── Home.jsx             # Página principal
│   │   ├── About.jsx            # Sobre nosotros
│   │   ├── Services.jsx         # Servicios detallados
│   │   ├── Portfolio.jsx        # Portafolio de proyectos
│   │   ├── Contact.jsx          # Formulario de contacto
│   │   └── InteractiveAssistant.jsx # Asistente IA (ARIA)
│   ├── App.jsx                  # Componente raíz
│   ├── main.jsx                 # Punto de entrada
│   └── index.css                # Estilos globales
├── package.json
├── tailwind.config.js           # Configuración TailwindCSS
├── vite.config.js              # Configuración Vite
└── README.md
```

## 🚀 Instalación y Configuración

### Requisitos Previos
- Node.js 16.0 o superior
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone [repository-url]
cd intellisoft-mexico-website
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

3. **Configurar variables de entorno (opcional)**
```bash
# Crear archivo .env.local
VITE_API_URL=your-api-url
VITE_CONTACT_EMAIL=contacto@intellisoft.mx
```

4. **Iniciar servidor de desarrollo**
```bash
npm run dev
# o
yarn dev
```

5. **Abrir en navegador**
```
http://localhost:5173
```

## 📱 Páginas y Secciones

### 🏠 Página Principal (Home)
- **Hero Section**: Presentación impactante con animaciones
- **Características**: Por qué elegir INTELLISOFT
- **Estadísticas**: Métricas de rendimiento
- **Servicios Destacados**: Servicios principales
- **Testimonios**: Opiniones de clientes reales
- **Innovación**: Sección diferenciadora
- **CTA Final**: Llamada a la acción

### 👥 Sobre Nosotros (About)
- **Misión y Visión**: Propósito de la empresa
- **Valores**: 4 valores fundamentales
- **Historia**: Timeline interactivo
- **Equipo**: Perfiles del equipo directivo
- **Estadísticas**: Números de la empresa

### 🛠 Servicios (Services)
- **Navegación Interactiva**: 6 servicios principales
- **Detalles Completos**: Características, tecnologías, precios
- **Proceso de Trabajo**: 4 fases metodológicas
- **Servicios Complementarios**: Servicios adicionales

### 💼 Portafolio (Portfolio)
- **Filtros por Categoría**: Web, Móvil, E-commerce, Cloud
- **Casos de Estudio**: 6 proyectos detallados
- **Resultados Medibles**: Métricas de éxito
- **Testimonios**: Opiniones de clientes por proyecto

### 📞 Contacto (Contact)
- **Formulario Completo**: 8 campos con validación
- **Información de Contacto**: 4 métodos de contacto
- **Mapa Interactivo**: Ubicación de oficinas
- **Redes Sociales**: Enlaces a perfiles

### 🤖 Asistente IA (ARIA)
- **Chat Interactivo**: Conversación en tiempo real
- **Recomendaciones Inteligentes**: Basadas en consultas
- **Sugerencias Rápidas**: Botones de respuesta
- **Interfaz Moderna**: Diseño tipo WhatsApp/Telegram

## 🎨 Personalización

### Colores Corporativos
```css
/* Colores principales */
primary: azul (#3b82f6 a #1e3a8a)
secondary: gris (#f8fafc a #0f172a)
accent: púrpura (#fdf4ff a #701a75)
```

### Fuentes
- **Principal**: Inter (Google Fonts)
- **Monospace**: JetBrains Mono (código)

### Animaciones
- **Entrada**: fadeIn, slideUp
- **Hover**: scale, translate
- **Loading**: spin, bounce

## 📊 Métricas y Rendimiento

### Optimizaciones Implementadas
- **Lazy Loading**: Componentes y imágenes
- **Code Splitting**: Rutas separadas
- **Tree Shaking**: Eliminación de código no usado
- **Minificación**: CSS y JavaScript
- **Compresión**: Imágenes optimizadas

### SEO
- **Meta Tags**: Título, descripción, keywords
- **Estructura Semántica**: HTML5 apropiado
- **URLs Amigables**: Rutas descriptivas
- **Schema Markup**: Datos estructurados

## 🔧 Scripts Disponibles

```bash
# Desarrollo
npm run dev          # Servidor de desarrollo

# Producción
npm run build        # Build para producción
npm run preview      # Vista previa del build

# Linting
npm run lint         # Verificar código
```

## 🚀 Deployment

### Build para Producción
```bash
npm run build
```

### Opciones de Deployment
- **Vercel**: Deployment automático desde Git
- **Netlify**: Integración continua
- **GitHub Pages**: Hosting gratuito
- **AWS S3**: Hosting en la nube
- **Servidor Apache/Nginx**: Hosting tradicional

## 📧 Contacto

**INTELLISOFT MÉXICO**
- **Email**: contacto@intellisoft.mx
- **Teléfono**: +52 55 1234 5678
- **Dirección**: Av. Revolución 1425, Col. Tlacopac, CDMX
- **Website**: www.intellisoft.mx

## 📄 Licencia

Este proyecto es propiedad de **INTELLISOFT MÉXICO**. Todos los derechos reservados.

---

**Desarrollado con ❤️ por el equipo de INTELLISOFT MÉXICO**

*Transformamos ideas en realidad digital*