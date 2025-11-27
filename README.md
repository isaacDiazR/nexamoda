# NexaModa - Prototipo Visual

## 🎨 Descripción

NexaModa es una plataforma que conecta emprendedores de moda con talleres de confección en Cúcuta, Colombia. Este prototipo visual demuestra las funcionalidades principales de la plataforma sin backend real.

**Slogan:** *"Impulsamos tu visión, vestimos tu futuro"*

## 🚀 Características Implementadas

### Páginas Funcionales

1. **Landing Page** (`index.html`)
   - Presentación de la plataforma
   - Información para emprendedores y talleres
   - Estadísticas y testimonios
   - Enlaces a registro y login

2. **Sistema de Autenticación**
   - **Login** (`login.html`): Selector de rol (Emprendedor/Taller)
   - **Registro Emprendedor** (`registro-emprendedor.html`): Proceso de 3 pasos
   - **Registro Taller** (`registro-taller.html`): Proceso de 3 pasos

3. **Dashboards**
   - **Dashboard Emprendedor** (`dashboard-emprendedor.html`):
     - Estadísticas de proyectos
     - Proyectos activos y completados
     - Notificaciones
     - Talleres recomendados
   
   - **Dashboard Taller** (`dashboard-taller.html`):
     - Solicitudes nuevas
     - Proyectos en producción
     - Estadísticas y certificaciones
     - Perfil del taller

4. **Búsqueda de Talleres** (`buscar-talleres.html`)
   - Búsqueda por texto
   - Filtros por especialidad, ubicación, calificación
   - Tarjetas de talleres con información detallada
   - Sistema de favoritos

## 🎨 Paleta de Colores

La paleta de colores está basada en el logo de NexaModa:

### Morado/Púrpura (Primary)
```css
50:  #faf5ff
100: #f3e8ff
200: #e9d5ff
300: #d8b4fe
400: #c084fc
500: #a855f7
600: #6b21a8 (principal)
700: #5b1a8c
800: #4c1570
900: #3d1158
```

### Dorado (Accent)
```css
50:  #fefce8
100: #fef9c3
200: #fef08a
300: #fde047
400: #facc15
500: #d4af37 (principal)
600: #b8941f
700: #9d7c1a
800: #826515
900: #674e11
```

## 📁 Estructura del Proyecto

```
nexamoda/
├── index.html                        # Landing page principal
├── login.html                        # Página de inicio de sesión
├── perfil-taller.html                # Perfil detallado del taller
├── perfil-emprendedor.html           # Perfil del emprendedor
├── proyecto.html                     # Vista detallada de proyecto
├── registro-emprendedor.html         # Registro para emprendedores
├── registro-taller.html              # Registro para talleres
├── dashboard-emprendedor.html        # Dashboard de emprendedor
├── dashboard-taller.html             # Dashboard de taller
├── buscar-talleres.html              # Búsqueda de talleres
├── assets/
│   ├── js/
│   │   └── app.js                    # Funciones JavaScript globales
│   └── data/
│       └── mock-data.js              # Datos de ejemplo (talleres, usuarios, proyectos)
├── Contexto/
│   ├── prototipado.md                # Documentación de ideación
│   └── desarrollo_prototipo.md       # Documentación de desarrollo
├── Landing anterior/
│   └── index.html                    # Versión anterior de la landing
├── Dockerfile                        # Configuración de contenedor Docker
├── docker-compose.yml                # Orquestación con Docker Compose
├── .dockerignore                     # Archivos excluidos del build
├── nginx.conf                        # Configuración del servidor Nginx
├── docker-build.ps1                  # Script automatizado de build
├── docker-compose-build.ps1          # Script automatizado con Compose
└── README.md                         # Este archivo
```

## 🔧 Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **Tailwind CSS 3**: Framework CSS utility-first (CDN)
- **Font Awesome 6**: Iconografía
- **JavaScript Vanilla**: Funcionalidades interactivas
- **LocalStorage**: Simulación de autenticación y datos persistentes
- **Docker & Docker Compose**: Contenedorización y despliegue
- **Nginx**: Servidor web optimizado para archivos estáticos

## 🎯 Datos de Ejemplo

El prototipo incluye datos de ejemplo en `assets/data/mock-data.js`:

- **6 talleres** con información completa (ubicación, especialidades, calificaciones, etc.)
- **3 emprendedores** con sus marcas
- **4 proyectos** en diferentes estados
- **Notificaciones** para ambos roles

### Talleres de Ejemplo:
1. Confecciones María - Ropa casual (⭐ 4.8)
2. Modas y Diseños JL - Vestidos y formal (⭐ 4.9)
3. Textiles del Norte - Ropa deportiva (⭐ 4.6)
4. Creaciones Sofía - Ropa infantil (⭐ 5.0)
5. Estilo Urbano - Streetwear (⭐ 4.7)
6. Confecciones El Éxito - Blusas y faldas (⭐ 4.8)

## 🚀 Cómo Usar el Prototipo

### Opción 1: Directo en el navegador
```bash
# Simplemente abre index.html en tu navegador
# O usa un servidor local como Live Server
```

### Opción 2: Con Docker Compose 🐳

#### Requisitos previos:
- Docker Desktop instalado ([Descargar aquí](https://www.docker.com/products/docker-desktop))
- Docker Desktop corriendo

#### Comandos Docker Compose:

```powershell
# Construir e iniciar (modo detached)
docker compose up -d --build

# Ver logs en tiempo real
docker compose logs -f

# Ver estado de los contenedores
docker compose ps

# Detener los servicios
docker compose stop

# Reiniciar los servicios
docker compose restart

# Detener y eliminar todo (contenedores, redes)
docker compose down

# Ver logs de un servicio específico
docker compose logs nexamoda-web -f

# Reconstruir sin caché
docker compose build --no-cache
docker compose up -d
```

**La aplicación estará disponible en:** http://localhost:3000

### 2. Flujo de Emprendedor
1. Abre `index.html`
2. Click en "Registrarse" o "Iniciar Sesión"
3. Selecciona rol "Emprendedor"
4. Completa el registro (o usa datos de prueba en login)
5. Explora el dashboard emprendedor
6. Busca talleres en "Buscar Talleres"
7. Ve detalles de proyectos

### 3. Flujo de Taller
1. Abre `index.html`
2. Click en "Registrarse" o "Iniciar Sesión"
3. Selecciona rol "Taller"
4. Completa el registro
5. Explora el dashboard del taller
6. Revisa solicitudes nuevas
7. Gestiona proyectos en producción

## 💡 Funcionalidades Simuladas

- ✅ Validación de formularios
- ✅ Navegación entre páginas con persistencia de sesión
- ✅ Filtrado y búsqueda de talleres
- ✅ Sistema de favoritos (localStorage)
- ✅ Indicadores de progreso de proyectos
- ✅ Notificaciones en tiempo real (simuladas)
- ✅ Diferentes vistas según rol de usuario
- ✅ Responsive design (mobile-friendly)

## 🎨 Componentes Visuales

### Tarjetas (Cards)
- Hover effects con elevación
- Bordes redondeados
- Sombras suaves

### Botones
- Gradientes de primary a accent
- Estados hover con transform scale
- Botones outline para acciones secundarias

### Badges/Tags
- Certificaciones de talleres
- Estados de proyectos
- Especialidades

### Formularios
- Inputs con focus states
- Validación visual
- Formularios multi-paso con indicadores

## 📱 Responsive Design

Todas las páginas están optimizadas para:
- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1280px+)

## 🔄 Próximas Funcionalidades (No implementadas)

Las siguientes funcionalidades no están implementadas en este prototipo visual:
- Sistema de mensajería en tiempo real
- Sistema de pagos integrado
- Cargar imágenes de portafolio (actualmente son placeholders)
- Edición de perfil con formularios
- Sistema de notificaciones push
- Backend con API REST y base de datos

## 🐳 Docker & Despliegue

### Arquitectura de Contenedores

El proyecto utiliza:
- **Imagen base**: `nginx:alpine` (ligera y optimizada)
- **Puerto**: 3000 (externo) → 80 (interno)
- **Servidor web**: Nginx con configuración personalizada
- **Volúmenes**: Montaje de código para desarrollo en tiempo real

### Características de Docker:
- ✅ Compresión gzip habilitada
- ✅ Caché de archivos estáticos optimizado
- ✅ Headers de seguridad configurados
- ✅ Redirección de errores 404
- ✅ Build multi-stage preparado para producción
- ✅ Scripts PowerShell para automatización

### Variables de Entorno:
```yaml
NGINX_HOST: localhost
NGINX_PORT: 80
```

## 🐛 Notas de Desarrollo

- Este es un **prototipo visual** sin backend
- Los datos son simulados y se almacenan en localStorage
- No hay validación de email real
- Las contraseñas no se encriptan
- No hay conexión a base de datos
- Las imágenes de talleres son placeholders

## 👥 Equipo

- Fernanda Uribe
- Nicole Gomez
- Angélica Jaimes

## 📄 Licencia

Este es un proyecto académico/prototipo para NexaModa.

---

**¿Necesitas ayuda?** Revisa la documentación en la carpeta `Contexto/` para más detalles sobre el diseño y la arquitectura de la solución.
