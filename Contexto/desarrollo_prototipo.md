# Desarrollo del Prototipo - NexaModa

## 📋 Índice
1. [Descripción del Proyecto](#descripción-del-proyecto)
2. [Alcance del Prototipo](#alcance-del-prototipo)
3. [Requisitos Funcionales](#requisitos-funcionales)
4. [Requisitos No Funcionales](#requisitos-no-funcionales)
5. [Stack Tecnológico Recomendado](#stack-tecnológico-recomendado)
6. [Arquitectura del Sistema](#arquitectura-del-sistema)
7. [Modelo de Datos](#modelo-de-datos)
8. [Funcionalidades Principales](#funcionalidades-principales)
9. [Plan de Desarrollo](#plan-de-desarrollo)
10. [Estimación de Recursos](#estimación-de-recursos)

---

## 📱 Descripción del Proyecto

**NexaModa** es una plataforma marketplace que conecta emprendedores de moda con talleres de confección pequeños en Cúcuta, permitiendo producciones en pequeñas cantidades con transparencia, confianza y trazabilidad.

### Propuesta de Valor
- **Para Emprendedores**: Acceso a talleres confiables sin pedidos mínimos altos
- **Para Talleres**: Visibilidad y flujo constante de trabajo
- **Para la Economía Local**: Fortalecimiento del sector textil en Cúcuta

---

## 🎯 Alcance del Prototipo

### Fase 1 - MVP (Mínimo Producto Viable)
El prototipo incluirá:
- ✅ Registro y perfiles de usuarios (Emprendedores y Talleres)
- ✅ Catálogo de talleres con filtros básicos
- ✅ Sistema de publicación de proyectos/pedidos
- ✅ Sistema de cotizaciones
- ✅ Chat/mensajería interna
- ✅ Sistema de reseñas y calificaciones
- ✅ Panel de administración básico

### Fuera del Alcance (Fase 2+)
- ❌ IA para matching automático
- ❌ Blockchain para contratos inteligentes
- ❌ Sistema de pagos integrado
- ❌ Geolocalización en tiempo real
- ❌ Sistema de producción colaborativa entre talleres
- ❌ Gamificación completa (medallas, rankings)

---

## ⚙️ Requisitos Funcionales

### RF-001: Gestión de Usuarios

#### RF-001.1 Registro de Emprendedores
- El sistema debe permitir registro con email/contraseña
- Campos requeridos: nombre, email, teléfono, tipo de negocio
- Verificación de email obligatoria
- Opción de registro con Google/Facebook

#### RF-001.2 Registro de Talleres
- El sistema debe permitir registro de talleres
- Campos requeridos: nombre del taller, representante legal, RUT/NIT, dirección, teléfono, email
- Campos opcionales: fotos del taller, certificaciones, capacidad de producción
- Proceso de verificación administrativa

#### RF-001.3 Perfiles de Usuario
- Cada usuario debe tener un perfil editable
- Emprendedores: portafolio de diseños, histórico de proyectos
- Talleres: galería de trabajos, especialidades, tiempos promedio, precios referenciales

### RF-002: Gestión de Proyectos/Pedidos

#### RF-002.1 Publicación de Proyectos
- Emprendedores pueden crear proyectos con:
  - Tipo de prenda (camiseta, pantalón, vestido, etc.)
  - Cantidad requerida
  - Descripción detallada
  - Imágenes de referencia (máx. 5)
  - Presupuesto estimado
  - Fecha límite de entrega
  - Materiales (¿quién los provee?)

#### RF-002.2 Búsqueda y Filtrado de Talleres
- Filtros disponibles:
  - Tipo de especialidad
  - Ubicación (barrio/sector)
  - Rango de precios
  - Calificación mínima
  - Capacidad de producción
  - Disponibilidad

#### RF-002.3 Sistema de Cotizaciones
- Talleres pueden enviar propuestas a proyectos publicados
- Propuesta incluye: precio, tiempo de entrega, términos y condiciones
- Emprendedor puede aceptar, rechazar o negociar
- Máximo 5 cotizaciones por proyecto

### RF-003: Sistema de Comunicación

#### RF-003.1 Chat en Tiempo Real
- Mensajería 1 a 1 entre emprendedor y taller
- Notificaciones push/email de mensajes nuevos
- Compartir archivos (imágenes, PDFs) hasta 10MB
- Historial de conversaciones

### RF-004: Sistema de Reseñas y Calificaciones

#### RF-004.1 Calificación de Talleres
- Emprendedores califican de 1 a 5 estrellas
- Criterios: calidad, puntualidad, comunicación, precio-calidad
- Comentario obligatorio (mín. 50 caracteres)
- Solo se puede calificar después de finalizar proyecto

#### RF-004.2 Calificación de Emprendedores
- Talleres califican a emprendedores
- Criterios: claridad en especificaciones, pago puntual, comunicación
- Sistema bidireccional de reputación

### RF-005: Panel de Administración

#### RF-005.1 Gestión de Usuarios
- Listar, buscar, filtrar usuarios
- Aprobar/rechazar registro de talleres
- Suspender/eliminar cuentas
- Ver estadísticas de uso

#### RF-005.2 Moderación de Contenido
- Revisar reportes de usuarios
- Moderar reseñas
- Gestionar proyectos sospechosos

### RF-006: Notificaciones

#### RF-006.1 Notificaciones del Sistema
- Email: bienvenida, verificación, nueva cotización, mensaje nuevo
- In-app: actualizaciones de proyectos, recordatorios
- Configuración de preferencias de notificaciones

---

## 🔧 Requisitos No Funcionales

### RNF-001: Rendimiento
- **Tiempo de carga**: Páginas principales < 2 segundos
- **Tiempo de respuesta**: API < 500ms para el 95% de requests
- **Concurrencia**: Soportar al menos 100 usuarios simultáneos
- **Optimización de imágenes**: Compresión automática, lazy loading

### RNF-002: Seguridad
- **Autenticación**: JWT con refresh tokens
- **Contraseñas**: Hash con bcrypt (min. 10 rounds)
- **HTTPS**: Obligatorio en producción
- **Validación**: Sanitización de inputs (prevenir XSS, SQL injection)
- **Rate Limiting**: Máx. 100 requests por minuto por IP
- **CORS**: Configuración restrictiva
- **Protección de datos**: Cumplir con Ley de Protección de Datos Personales de Colombia

### RNF-003: Usabilidad
- **Responsive Design**: Compatible con mobile, tablet, desktop
- **Accesibilidad**: WCAG 2.1 nivel AA
- **Idioma**: Español (Colombia)
- **UX**: Máximo 3 clics para acciones principales
- **Onboarding**: Tutorial interactivo para nuevos usuarios

### RNF-004: Escalabilidad
- **Arquitectura**: Diseño modular y desacoplado
- **Base de datos**: Índices optimizados, consultas eficientes
- **CDN**: Para archivos estáticos e imágenes
- **Caché**: Redis para datos frecuentes
- **Horizontal scaling**: Preparado para múltiples instancias

### RNF-005: Disponibilidad
- **Uptime**: 99% disponibilidad
- **Backup**: Diario automático de base de datos
- **Recuperación**: Plan de disaster recovery
- **Monitoreo**: Logs centralizados, alertas automáticas

### RNF-006: Mantenibilidad
- **Código limpio**: Estándares de código documentados
- **Testing**: Cobertura mínima 70%
- **Documentación**: API documentada (Swagger/OpenAPI)
- **Versionado**: Git con conventional commits
- **CI/CD**: Pipeline automatizado

### RNF-007: Compatibilidad
- **Navegadores**: Chrome, Firefox, Safari, Edge (últimas 2 versiones)
- **Móviles**: iOS 13+, Android 8+
- **Responsive**: Diseño mobile-first

---

## 🛠️ Stack Tecnológico Recomendado

### Opción 1: Stack MERN (Recomendado para MVP)

#### Frontend
- **Framework**: React 18+ con TypeScript
- **UI Library**: Material-UI (MUI) o Chakra UI
- **Estado Global**: Zustand o React Context API
- **Formularios**: React Hook Form + Zod validation
- **HTTP Client**: Axios
- **Routing**: React Router v6
- **Build Tool**: Vite
- **Styling**: TailwindCSS + CSS Modules

#### Backend
- **Runtime**: Node.js 20 LTS
- **Framework**: Express.js o Fastify
- **Lenguaje**: TypeScript
- **ORM**: Prisma o Mongoose
- **Autenticación**: Passport.js + JWT
- **Validación**: Zod o Joi
- **File Upload**: Multer + Sharp (procesamiento imágenes)

#### Base de Datos
- **Principal**: PostgreSQL 15+ (relacional, robusto)
- **Alternativa**: MongoDB (si prefieren NoSQL)
- **Caché**: Redis
- **Storage**: AWS S3 o Cloudinary (imágenes)

#### Comunicación en Tiempo Real
- **WebSockets**: Socket.io
- **Alternativa**: Pusher (servicio manejado)

#### DevOps y Despliegue
- **Contenedores**: Docker + Docker Compose
- **CI/CD**: GitHub Actions
- **Hosting Backend**: Railway, Render, o DigitalOcean
- **Hosting Frontend**: Vercel o Netlify
- **Base de Datos**: Supabase o Railway
- **Monitoreo**: Sentry (errores) + LogRocket

---

### Opción 2: Stack con Firebase (Más Rápido para Prototipo)

#### Frontend
- **Framework**: React 18+ con TypeScript
- **UI Library**: Material-UI

#### Backend
- **BaaS**: Firebase
  - Authentication
  - Firestore (base de datos)
  - Cloud Storage (archivos)
  - Cloud Functions (lógica backend)
  - Cloud Messaging (notificaciones)

**Ventajas**: Desarrollo más rápido, menos infraestructura
**Desventajas**: Vendor lock-in, costos escalables

---

### Opción 3: Stack Moderno con Next.js (Recomendado para Producción)

#### Fullstack
- **Framework**: Next.js 14+ (App Router)
- **Lenguaje**: TypeScript
- **ORM**: Prisma
- **Base de Datos**: PostgreSQL
- **Autenticación**: NextAuth.js
- **UI**: Shadcn/ui + TailwindCSS
- **Validación**: Zod
- **Estado**: React Server Components + Zustand

**Ventajas**: SEO, SSR, mejor performance, desarrollo fullstack unificado
**Desventajas**: Curva de aprendizaje más pronunciada

---

## 🏗️ Arquitectura del Sistema

### Arquitectura de Alto Nivel

```
┌─────────────────────────────────────────────────────────┐
│                     USUARIOS                             │
│  (Emprendedores, Talleres, Administradores)              │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│                  FRONTEND (React)                        │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │  Public  │  │  Dashb.  │  │  Admin   │              │
│  │  Pages   │  │  Usuario │  │  Panel   │              │
│  └──────────┘  └──────────┘  └──────────┘              │
└────────────────────┬────────────────────────────────────┘
                     │ HTTPS/REST API
                     ▼
┌─────────────────────────────────────────────────────────┐
│              API GATEWAY / LOAD BALANCER                 │
└────────────────────┬────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────┐
│                BACKEND (Node.js/Express)                 │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │   Auth   │  │ Projects │  │Messages  │              │
│  │ Service  │  │ Service  │  │ Service  │              │
│  └──────────┘  └──────────┘  └──────────┘              │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐              │
│  │  Users   │  │ Reviews  │  │  Notif.  │              │
│  │ Service  │  │ Service  │  │ Service  │              │
│  └──────────┘  └──────────┘  └──────────┘              │
└─────┬──────────────┬──────────────┬─────────────────────┘
      │              │              │
      ▼              ▼              ▼
┌──────────┐  ┌──────────┐  ┌──────────┐
│PostgreSQL│  │  Redis   │  │  S3/CDN  │
│          │  │  Cache   │  │ (Images) │
└──────────┘  └──────────┘  └──────────┘
```

### Estructura de Carpetas (Backend)

```
backend/
├── src/
│   ├── config/           # Configuraciones (DB, env, etc.)
│   ├── controllers/      # Controladores de rutas
│   ├── middlewares/      # Auth, validation, error handling
│   ├── models/           # Modelos de datos (Prisma/Mongoose)
│   ├── routes/           # Definición de rutas
│   ├── services/         # Lógica de negocio
│   ├── utils/            # Funciones utilitarias
│   ├── validators/       # Schemas de validación
│   └── app.ts            # Configuración Express
├── prisma/
│   └── schema.prisma     # Schema de base de datos
├── tests/                # Tests unitarios e integración
├── uploads/              # Archivos temporales
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md
```

### Estructura de Carpetas (Frontend)

```
frontend/
├── public/               # Assets estáticos
├── src/
│   ├── assets/          # Imágenes, iconos
│   ├── components/      # Componentes reutilizables
│   │   ├── common/      # Botones, inputs, cards
│   │   ├── layout/      # Header, footer, sidebar
│   │   └── features/    # Componentes específicos
│   ├── pages/           # Páginas/vistas
│   │   ├── Home/
│   │   ├── Auth/
│   │   ├── Dashboard/
│   │   ├── Projects/
│   │   └── Admin/
│   ├── hooks/           # Custom hooks
│   ├── services/        # API calls
│   ├── store/           # Estado global
│   ├── types/           # TypeScript types
│   ├── utils/           # Helpers
│   ├── styles/          # Estilos globales
│   ├── App.tsx
│   └── main.tsx
├── .env.example
├── package.json
├── tsconfig.json
├── vite.config.ts
└── tailwind.config.js
```

---

## 🗄️ Modelo de Datos

### Diagrama Entidad-Relación Simplificado

```
┌─────────────────┐
│     USERS       │
├─────────────────┤
│ id (PK)         │
│ email           │
│ password_hash   │
│ role            │ ◄──┐
│ created_at      │    │
│ updated_at      │    │
└─────────────────┘    │
         │             │
         │ 1:1         │
         ▼             │
┌─────────────────────────────┐
│   ENTREPRENEUR_PROFILES     │
├─────────────────────────────┤
│ id (PK)                     │
│ user_id (FK)                │
│ business_name               │
│ phone                       │
│ description                 │
│ avatar_url                  │
└─────────────────────────────┘

┌─────────────────────────────┐
│    WORKSHOP_PROFILES        │
├─────────────────────────────┤
│ id (PK)                     │
│ user_id (FK)         ───────┘
│ workshop_name               │
│ legal_rep                   │
│ tax_id (RUT/NIT)           │
│ address                     │
│ phone                       │
│ description                 │
│ specialties                 │
│ capacity                    │
│ avg_rating                  │
│ total_reviews               │
│ verified                    │
│ gallery_images              │
└─────────────────────────────┘
         │
         │ 1:N
         ▼
┌─────────────────────────────┐
│       PROJECTS              │
├─────────────────────────────┤
│ id (PK)                     │
│ entrepreneur_id (FK)        │
│ title                       │
│ description                 │
│ garment_type                │
│ quantity                    │
│ budget_min                  │
│ budget_max                  │
│ deadline                    │
│ materials_provided_by       │
│ reference_images            │
│ status                      │
│ created_at                  │
│ updated_at                  │
└─────────────────────────────┘
         │
         │ 1:N
         ▼
┌─────────────────────────────┐
│       QUOTATIONS            │
├─────────────────────────────┤
│ id (PK)                     │
│ project_id (FK)             │
│ workshop_id (FK)            │
│ price                       │
│ delivery_time_days          │
│ notes                       │
│ status                      │
│ created_at                  │
└─────────────────────────────┘

┌─────────────────────────────┐
│        MESSAGES             │
├─────────────────────────────┤
│ id (PK)                     │
│ sender_id (FK)              │
│ receiver_id (FK)            │
│ project_id (FK) [nullable]  │
│ content                     │
│ attachments                 │
│ read                        │
│ created_at                  │
└─────────────────────────────┘

┌─────────────────────────────┐
│        REVIEWS              │
├─────────────────────────────┤
│ id (PK)                     │
│ project_id (FK)             │
│ reviewer_id (FK)            │
│ reviewee_id (FK)            │
│ rating                      │
│ quality_rating              │
│ punctuality_rating          │
│ communication_rating        │
│ value_rating                │
│ comment                     │
│ created_at                  │
└─────────────────────────────┘
```

### Schema Prisma (Ejemplo)

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum UserRole {
  ENTREPRENEUR
  WORKSHOP
  ADMIN
}

enum ProjectStatus {
  DRAFT
  PUBLISHED
  IN_NEGOTIATION
  IN_PROGRESS
  COMPLETED
  CANCELLED
}

enum QuotationStatus {
  PENDING
  ACCEPTED
  REJECTED
  NEGOTIATING
}

model User {
  id            String    @id @default(uuid())
  email         String    @unique
  passwordHash  String    @map("password_hash")
  role          UserRole
  isVerified    Boolean   @default(false) @map("is_verified")
  createdAt     DateTime  @default(now()) @map("created_at")
  updatedAt     DateTime  @updatedAt @map("updated_at")

  entrepreneurProfile EntrepreneurProfile?
  workshopProfile     WorkshopProfile?
  messagesSent        Message[] @relation("SentMessages")
  messagesReceived    Message[] @relation("ReceivedMessages")
  reviewsGiven        Review[] @relation("ReviewsGiven")
  reviewsReceived     Review[] @relation("ReviewsReceived")

  @@map("users")
}

model EntrepreneurProfile {
  id            String   @id @default(uuid())
  userId        String   @unique @map("user_id")
  businessName  String?  @map("business_name")
  phone         String
  description   String?
  avatarUrl     String?  @map("avatar_url")
  
  user          User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  projects      Project[]

  @@map("entrepreneur_profiles")
}

model WorkshopProfile {
  id              String   @id @default(uuid())
  userId          String   @unique @map("user_id")
  workshopName    String   @map("workshop_name")
  legalRep        String   @map("legal_rep")
  taxId           String   @map("tax_id")
  address         String
  phone           String
  description     String?
  specialties     String[] // Array de especialidades
  capacity        Int?     // Capacidad mensual
  avgRating       Float    @default(0) @map("avg_rating")
  totalReviews    Int      @default(0) @map("total_reviews")
  verified        Boolean  @default(false)
  galleryImages   String[] @map("gallery_images")
  
  user            User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  quotations      Quotation[]

  @@map("workshop_profiles")
}

model Project {
  id                    String        @id @default(uuid())
  entrepreneurId        String        @map("entrepreneur_id")
  title                 String
  description           String
  garmentType           String        @map("garment_type")
  quantity              Int
  budgetMin             Float?        @map("budget_min")
  budgetMax             Float?        @map("budget_max")
  deadline              DateTime?
  materialsProvidedBy   String        @map("materials_provided_by") // "emprendedor" | "taller" | "compartido"
  referenceImages       String[]      @map("reference_images")
  status                ProjectStatus @default(DRAFT)
  createdAt             DateTime      @default(now()) @map("created_at")
  updatedAt             DateTime      @updatedAt @map("updated_at")

  entrepreneur          EntrepreneurProfile @relation(fields: [entrepreneurId], references: [id])
  quotations            Quotation[]
  messages              Message[]
  reviews               Review[]

  @@map("projects")
}

model Quotation {
  id                String           @id @default(uuid())
  projectId         String           @map("project_id")
  workshopId        String           @map("workshop_id")
  price             Float
  deliveryTimeDays  Int              @map("delivery_time_days")
  notes             String?
  status            QuotationStatus  @default(PENDING)
  createdAt         DateTime         @default(now()) @map("created_at")

  project           Project          @relation(fields: [projectId], references: [id], onDelete: Cascade)
  workshop          WorkshopProfile  @relation(fields: [workshopId], references: [id])

  @@map("quotations")
}

model Message {
  id          String    @id @default(uuid())
  senderId    String    @map("sender_id")
  receiverId  String    @map("receiver_id")
  projectId   String?   @map("project_id")
  content     String
  attachments String[]
  read        Boolean   @default(false)
  createdAt   DateTime  @default(now()) @map("created_at")

  sender      User      @relation("SentMessages", fields: [senderId], references: [id])
  receiver    User      @relation("ReceivedMessages", fields: [receiverId], references: [id])
  project     Project?  @relation(fields: [projectId], references: [id])

  @@map("messages")
}

model Review {
  id                    String   @id @default(uuid())
  projectId             String   @map("project_id")
  reviewerId            String   @map("reviewer_id")
  revieweeId            String   @map("reviewee_id")
  rating                Float    // Promedio general
  qualityRating         Int      @map("quality_rating")
  punctualityRating     Int      @map("punctuality_rating")
  communicationRating   Int      @map("communication_rating")
  valueRating           Int      @map("value_rating")
  comment               String
  createdAt             DateTime @default(now()) @map("created_at")

  project               Project  @relation(fields: [projectId], references: [id])
  reviewer              User     @relation("ReviewsGiven", fields: [reviewerId], references: [id])
  reviewee              User     @relation("ReviewsReceived", fields: [revieweeId], references: [id])

  @@map("reviews")
}
```

---

## 🎨 Vistas del Frontend (Views)

### Estructura General de Vistas

El prototipo contará con **23 vistas principales** organizadas en 5 categorías:

---

### 📱 Categoría 1: Públicas (Sin Autenticación) - 4 vistas

#### 1.1 Landing Page (`/`)
**Descripción**: Página principal de marketing
**Componentes:**
- Navbar con logo, menú (Inicio, Cómo funciona, Para Talleres, Para Emprendedores, Login/Registro)
- Hero Section:
  - Título principal: "Conectamos tu visión con el taller perfecto"
  - Subtítulo explicativo
  - 2 CTAs: "Soy Emprendedor" y "Soy Taller"
  - Imagen/ilustración representativa
- Sección "Cómo Funciona" (3 pasos con iconos)
- Sección "Beneficios" (split: para emprendedores / para talleres)
- Testimonios (carrusel con 3-4 testimonios)
- Estadísticas (talleres registrados, proyectos completados, calificación promedio)
- CTA final con formulario de registro rápido
- Footer (enlaces legales, redes sociales, contacto)

**Responsive**: Mobile-first, hamburger menu en móvil

#### 1.2 Login (`/login`)
**Descripción**: Inicio de sesión
**Componentes:**
- Logo centrado
- Formulario:
  - Input email
  - Input password (con toggle show/hide)
  - Checkbox "Recordarme"
  - Link "¿Olvidaste tu contraseña?"
  - Botón "Iniciar Sesión"
- Divider "O continuar con"
- Botones de OAuth (Google, Facebook)
- Link "¿No tienes cuenta? Regístrate"
- Breadcrumb o link para volver al home

**Validaciones**: Email válido, campos requeridos

#### 1.3 Registro (`/register`)
**Descripción**: Registro de nuevos usuarios
**Componentes:**
- Step Indicator (3 pasos)
- **Paso 1: Selección de Rol**
  - Card "Soy Emprendedor" (con descripción)
  - Card "Soy Taller" (con descripción)
- **Paso 2: Datos Básicos**
  - Input nombre/nombre del negocio
  - Input email
  - Input teléfono
  - Input contraseña (con indicador de fortaleza)
  - Input confirmar contraseña
  - Checkbox términos y condiciones
- **Paso 3: Confirmación**
  - Resumen de datos
  - Mensaje de verificación de email
  - Botón "Crear Cuenta"
- Botones: "Atrás", "Siguiente", "Crear Cuenta"
- Link "¿Ya tienes cuenta? Inicia sesión"

**Validaciones**: Email único, contraseñas coinciden, teléfono formato válido

#### 1.4 Verificación de Email (`/verify-email/:token`)
**Descripción**: Página de confirmación de email
**Componentes:**
- Icono de éxito o error
- Mensaje de estado ("Email verificado" / "Link inválido")
- Botón "Ir al Dashboard" o "Solicitar nuevo link"
- Animación de loading durante verificación

---

### 👤 Categoría 2: Autenticación y Perfil - 5 vistas

#### 2.1 Completar Perfil Emprendedor (`/onboarding/entrepreneur`)
**Descripción**: Primera vez después de registro
**Componentes:**
- Progress bar (pasos del onboarding)
- Formulario:
  - Input nombre del negocio (opcional)
  - Textarea descripción breve
  - Upload foto de perfil
  - Input ciudad/ubicación
  - Select tipo de productos (ropa casual, deportiva, formal, etc.)
  - Checkbox "Completar después"
- Botón "Continuar al Dashboard"
- Tutorial tooltip opcional

#### 2.2 Completar Perfil Taller (`/onboarding/workshop`)
**Descripción**: Onboarding para talleres
**Componentes:**
- Progress bar
- Formulario (2 pasos):
  - **Paso 1: Información Legal**
    - Input nombre del taller
    - Input representante legal
    - Input RUT/NIT
    - Input dirección completa
    - Input teléfono de contacto
  - **Paso 2: Información Operativa**
    - Textarea descripción del taller
    - Multi-select especialidades (camisetas, pantalones, vestidos, bordado, etc.)
    - Input capacidad mensual (número)
    - Upload fotos del taller (hasta 5)
    - Input precio referencial por prenda
- Mensaje: "Tu taller será verificado en 24-48 horas"
- Botón "Enviar para Verificación"

#### 2.3 Perfil de Usuario - Vista Emprendedor (`/profile`)
**Descripción**: Ver/editar perfil propio
**Componentes:**
- Tabs: "Información Personal" | "Seguridad" | "Notificaciones"
- **Tab Información Personal:**
  - Avatar editable
  - Formulario con datos editables
  - Estadísticas: proyectos publicados, proyectos completados, calificación recibida
  - Botón "Guardar Cambios"
- **Tab Seguridad:**
  - Cambiar contraseña
  - Cambiar email
  - Sesiones activas
  - Eliminar cuenta (modal de confirmación)
- **Tab Notificaciones:**
  - Checkboxes para preferencias de email
  - Checkboxes para notificaciones in-app
  - Toggle notificaciones push

#### 2.4 Perfil de Usuario - Vista Taller (`/profile`)
**Descripción**: Perfil de taller (más complejo)
**Componentes:**
- Tabs: "Mi Taller" | "Galería" | "Seguridad" | "Notificaciones"
- **Tab Mi Taller:**
  - Estado de verificación (badge)
  - Formulario editable
  - Especialidades (chips editables)
  - Horarios de atención
  - Rating y estadísticas
- **Tab Galería:**
  - Grid de imágenes del taller
  - Upload nuevas fotos
  - Delete fotos existentes
  - Drag & drop para reordenar
- **Tabs Seguridad y Notificaciones**: Igual que emprendedor

#### 2.5 Ver Perfil Público (`/workshop/:id` o `/entrepreneur/:id`)
**Descripción**: Vista pública de perfil de otro usuario
**Componentes:**
- Header con avatar, nombre, rating
- Badge de verificado (para talleres)
- Sección "Acerca de" (descripción)
- **Para Talleres:**
  - Especialidades
  - Capacidad disponible
  - Rango de precios
  - Ubicación
  - Galería de trabajos
  - Reseñas recibidas (con paginación)
  - Botón "Enviar Mensaje"
- **Para Emprendedores:**
  - Proyectos públicos
  - Rating como cliente
  - Reseñas recibidas
- Botón "Reportar usuario"

---

### 🏠 Categoría 3: Dashboard y Navegación Principal - 8 vistas

#### 3.1 Dashboard Emprendedor (`/dashboard`)
**Descripción**: Vista principal después de login
**Componentes:**
- Sidebar de navegación
- Header con búsqueda, notificaciones, avatar
- **Sección "Resumen":**
  - Cards con métricas: proyectos activos, cotizaciones pendientes, mensajes sin leer
  - Gráfica simple de actividad
- **Sección "Proyectos Recientes":**
  - Tabla/cards con últimos 5 proyectos
  - Estados visuales (draft, publicado, en progreso, completado)
  - Acciones rápidas (ver, editar, eliminar)
- **Sección "Cotizaciones Recientes":**
  - Lista de últimas cotizaciones recibidas
  - Botones de acción rápida (ver, aceptar, rechazar)
- **Sección "Talleres Recomendados":**
  - Carrusel de talleres con alto rating
- CTA "Crear Nuevo Proyecto"

#### 3.2 Dashboard Taller (`/dashboard`)
**Descripción**: Vista principal para talleres
**Componentes:**
- Layout similar a emprendedor
- **Sección "Resumen":**
  - Proyectos disponibles
  - Cotizaciones enviadas
  - Proyectos en curso
  - Rating promedio
- **Sección "Proyectos Disponibles":**
  - Feed de proyectos publicados recientemente
  - Filtros rápidos (tipo de prenda, presupuesto, urgencia)
  - Botón "Enviar Cotización" en cada card
- **Sección "Mis Cotizaciones":**
  - Estados: pendiente, aceptada, rechazada
  - Temporizador para cotizaciones con deadline
- **Sección "Calendario":**
  - Vista de proyectos aceptados con fechas de entrega

#### 3.3 Mis Proyectos - Lista (`/projects`)
**Descripción**: Gestión de proyectos del emprendedor
**Componentes:**
- Header con tabs: "Todos" | "Borradores" | "Publicados" | "En Progreso" | "Completados"
- Botón "Nuevo Proyecto" (destacado)
- Barra de búsqueda y filtros:
  - Buscar por título
  - Filtrar por estado
  - Ordenar por fecha, cotizaciones recibidas
- Grid/Lista de proyectos:
  - Card por proyecto con:
    - Imagen principal
    - Título
    - Estado (badge)
    - Cantidad de cotizaciones
    - Fecha límite
    - Menú de acciones (ver, editar, eliminar, duplicar)
- Paginación
- Vista vacía con CTA si no hay proyectos

#### 3.4 Crear/Editar Proyecto (`/projects/new` o `/projects/:id/edit`)
**Descripción**: Formulario multi-paso para proyectos
**Componentes:**
- Stepper (4 pasos)
- **Paso 1: Información Básica**
  - Input título del proyecto
  - Select tipo de prenda (con iconos)
  - Input cantidad
  - Botón "Guardar como Borrador"
- **Paso 2: Detalles**
  - Textarea descripción (rich text básico)
  - Input presupuesto mínimo
  - Input presupuesto máximo
  - Date picker fecha límite
  - Radio buttons "¿Quién provee materiales?" (Yo, Taller, Compartido)
  - Textarea notas sobre materiales
- **Paso 3: Referencias Visuales**
  - Drag & drop upload de imágenes (máx 5)
  - Preview de imágenes cargadas
  - Botón para eliminar imágenes
  - Textarea notas adicionales
- **Paso 4: Revisión y Publicación**
  - Resumen completo del proyecto
  - Preview de cómo se verá publicado
  - Checkbox "He revisado toda la información"
  - Botones: "Guardar como Borrador" | "Publicar Proyecto"
- Navegación: Atrás, Siguiente, Cancelar
- Auto-save indicator

#### 3.5 Detalle de Proyecto (`/projects/:id`)
**Descripción**: Vista completa de un proyecto
**Componentes:**
- **Header:**
  - Título del proyecto
  - Estado (badge grande)
  - Menú de acciones (editar, eliminar, cerrar, reabrir)
- **Sección Principal:**
  - Carrusel de imágenes de referencia
  - Detalles del proyecto (tipo, cantidad, presupuesto, deadline)
  - Descripción completa
  - Información de materiales
- **Tabs:**
  - **Tab "Cotizaciones" (X):**
    - Lista de cotizaciones recibidas
    - Cada cotización muestra:
      - Info del taller (avatar, nombre, rating)
      - Precio ofertado
      - Tiempo de entrega
      - Notas del taller
      - Botones: "Ver Perfil Taller" | "Aceptar" | "Rechazar" | "Negociar"
    - Comparador visual de cotizaciones
  - **Tab "Conversaciones":**
    - Lista de chats con talleres interesados
  - **Tab "Actividad":**
    - Timeline de acciones (creado, cotización recibida, etc.)
- **Sidebar:**
  - Card del emprendedor (si es vista de taller)
  - Contador de días restantes
  - Acciones rápidas

#### 3.6 Explorar Talleres (`/workshops`)
**Descripción**: Marketplace de talleres para emprendedores
**Componentes:**
- **Sidebar de Filtros:**
  - Búsqueda por nombre
  - Especialidades (checkboxes)
  - Ubicación/Barrio
  - Rango de precios (slider)
  - Calificación mínima (estrellas)
  - Capacidad disponible
  - Solo verificados (toggle)
  - Botón "Limpiar Filtros"
- **Grid de Talleres:**
  - Cards con:
    - Foto del taller
    - Nombre
    - Rating (estrellas + número)
    - Badge "Verificado"
    - Especialidades (max 3 chips)
    - Rango de precios
    - Botón "Ver Perfil"
    - Botón "Enviar Mensaje"
- Ordenar por: Relevancia, Rating, Precio, Más recientes
- Paginación o infinite scroll
- Vista vacía si no hay resultados

#### 3.7 Explorar Proyectos (`/available-projects`)
**Descripción**: Feed de proyectos para talleres
**Componentes:**
- **Filtros Superiores:**
  - Búsqueda
  - Tipo de prenda
  - Rango de presupuesto
  - Fecha límite (próximos 7 días, 15 días, 30 días)
  - Ordenar por: Más reciente, Mejor pagados, Urgentes
- **Lista de Proyectos:**
  - Cards expandibles:
    - Imagen principal
    - Título y tipo de prenda
    - Cantidad
    - Presupuesto
    - Deadline (con indicador de urgencia)
    - Descripción resumida (expandible)
    - Info del emprendedor (avatar, nombre, rating)
    - Botón "Ver Detalles" | "Enviar Cotización"
    - Badge si ya cotizaste
- Paginación
- Contador "X proyectos disponibles"

#### 3.8 Mensajería (`/messages`)
**Descripción**: Sistema de chat
**Componentes:**
- Layout de 3 columnas (responsive a 2 en tablet, 1 en móvil)
- **Columna 1: Lista de Conversaciones**
  - Búsqueda de conversaciones
  - Lista de chats:
    - Avatar del otro usuario
    - Nombre
    - Último mensaje (truncado)
    - Timestamp
    - Badge de mensajes sin leer
    - Badge del proyecto asociado (si aplica)
  - Ordenar por: Recientes, No leídos
  - Filtrar por proyecto
- **Columna 2: Chat Activo**
  - Header con info del destinatario y proyecto
  - Área de mensajes (scroll infinito hacia arriba)
  - Cada mensaje muestra:
    - Avatar
    - Contenido
    - Timestamp
    - Estado (enviado, leído)
    - Archivos adjuntos (preview)
  - Indicador "escribiendo..."
  - Input de mensaje con:
    - Textarea auto-expandible
    - Botón adjuntar archivo
    - Botón enviar
    - Contador de caracteres
- **Columna 3: Detalles** (opcional en desktop)
  - Info del proyecto relacionado
  - Archivos compartidos
  - Acciones (archivar conversación, reportar)
- Estado vacío: "Selecciona una conversación"
- Notificaciones en tiempo real

---

### ⭐ Categoría 4: Reseñas y Calificaciones - 2 vistas

#### 4.1 Dejar Reseña (`/projects/:id/review`)
**Descripción**: Formulario de calificación post-proyecto
**Componentes:**
- Header: "¿Cómo fue tu experiencia con [nombre]?"
- Info del proyecto completado
- **Formulario:**
  - Calificación General (estrellas grandes, 1-5)
  - Calificaciones Específicas (estrellas más pequeñas):
    - Calidad del trabajo
    - Puntualidad
    - Comunicación
    - Relación precio-calidad (solo emprendedor) / Claridad en especificaciones (solo taller)
  - Textarea comentario (mín. 50, máx. 500 caracteres)
  - Contador de caracteres
  - Checkbox "Recomendaría a [nombre]"
  - Upload fotos del resultado (opcional, max 3)
- Botones: "Cancelar" | "Publicar Reseña"
- Advertencia: "Las reseñas son públicas y permanentes"

#### 4.2 Ver Reseñas (`/reviews/:userId`)
**Descripción**: Todas las reseñas de un usuario
**Componentes:**
- Header con resumen:
  - Rating promedio (número grande)
  - Distribución por estrellas (gráfico de barras)
  - Total de reseñas
  - Breakdown de categorías (promedio de cada criterio)
- Filtros:
  - Por estrellas (5, 4, 3, 2, 1)
  - Ordenar: Más recientes, Más útiles, Mejor valoradas, Peor valoradas
- **Lista de Reseñas:**
  - Cada reseña muestra:
    - Avatar y nombre del revisor
    - Fecha
    - Rating (estrellas)
    - Comentario
    - Fotos adjuntas (galería)
    - Proyecto relacionado (link)
    - Respuesta del reviewee (si existe)
    - Botones: "Útil" | "Reportar"
- Paginación
- CTA "Ver mi perfil" si es el usuario logueado

---

### 🔧 Categoría 5: Administración - 4 vistas

#### 5.1 Panel Admin - Dashboard (`/admin`)
**Descripción**: Vista principal de administración
**Componentes:**
- Sidebar con menú admin
- **Métricas Clave (Cards):**
  - Total usuarios (emprendedores/talleres)
  - Proyectos activos
  - Talleres pendientes de verificación
  - Reportes sin resolver
  - Ingresos del mes (si aplica)
- **Gráficas:**
  - Crecimiento de usuarios (línea temporal)
  - Proyectos por estado (dona)
  - Actividad semanal (barras)
- **Tablas Resumen:**
  - Últimos usuarios registrados
  - Últimos proyectos publicados
  - Actividad reciente
- Accesos rápidos a secciones críticas

#### 5.2 Gestión de Usuarios (`/admin/users`)
**Descripción**: CRUD de usuarios
**Componentes:**
- Tabs: "Todos" | "Emprendedores" | "Talleres" | "Admins" | "Suspendidos"
- **Barra de Herramientas:**
  - Búsqueda por nombre/email
  - Filtros: Rol, Estado (activo, pendiente, suspendido), Verificado
  - Exportar CSV
- **Tabla de Usuarios:**
  - Columnas: Avatar, Nombre, Email, Rol, Estado, Verificado, Fecha registro, Acciones
  - Acciones por fila: Ver detalle, Editar, Suspender/Activar, Eliminar
  - Selección múltiple para acciones en batch
  - Ordenar por cualquier columna
  - Paginación
- **Modal de Detalle:**
  - Toda la info del usuario
  - Estadísticas
  - Historial de actividad
  - Botones de acción

#### 5.3 Verificación de Talleres (`/admin/workshop-verification`)
**Descripción**: Aprobar/rechazar talleres
**Componentes:**
- Tabs: "Pendientes" | "Aprobados" | "Rechazados"
- **Lista de Talleres Pendientes:**
  - Cards con:
    - Info completa del taller
    - Documentos subidos
    - Galería de fotos
    - Fecha de solicitud
    - Botones: "Aprobar" | "Rechazar" | "Solicitar más información"
- **Modal de Aprobación:**
  - Confirmación
  - Textarea para nota interna
  - Checkbox "Enviar email de bienvenida"
- **Modal de Rechazo:**
  - Select motivo de rechazo
  - Textarea explicación (se enviará al taller)
  - Checkbox "Permitir reenvío de solicitud"
- Sistema de prioridad (talleres con más antigüedad primero)

#### 5.4 Moderación de Contenido (`/admin/moderation`)
**Descripción**: Revisar reportes y contenido
**Componentes:**
- Tabs: "Reportes" | "Reseñas Flagged" | "Proyectos Sospechosos"
- **Tab Reportes:**
  - Tabla con:
    - Tipo de reporte (usuario, proyecto, reseña)
    - Reportado por
    - Elemento reportado (link)
    - Motivo
    - Estado (pendiente, resuelto, descartado)
    - Fecha
    - Acciones: Ver detalle, Resolver, Descartar
  - Filtros por tipo y estado
- **Modal de Detalle de Reporte:**
  - Info completa
  - Contenido reportado (visible)
  - Historial de reportes del mismo usuario
  - Acciones: Advertir usuario, Suspender, Eliminar contenido, Descartar reporte
  - Textarea para notas administrativas
- Contador de reportes sin resolver

---

### 🔄 Vistas Adicionales/Auxiliares

#### Extra 1: Recuperar Contraseña (`/forgot-password`)
- Input email
- Botón "Enviar instrucciones"
- Mensaje de confirmación

#### Extra 2: Restablecer Contraseña (`/reset-password/:token`)
- Input nueva contraseña
- Input confirmar contraseña
- Indicador de fortaleza
- Botón "Restablecer"

#### Extra 3: 404 Not Found (`/404`)
- Ilustración divertida
- Mensaje "Página no encontrada"
- Botón "Volver al inicio"
- Búsqueda sugerida

#### Extra 4: Términos y Condiciones (`/terms`)
- Contenido legal formateado
- Última actualización
- Botón imprimir/descargar PDF

#### Extra 5: Política de Privacidad (`/privacy`)
- Similar a términos

---

## 📊 Resumen de Vistas por Rol

| Rol | Vistas Accesibles | Total |
|-----|------------------|-------|
| **Anónimo** | Landing, Login, Registro, Verificación Email, Recuperar Contraseña | 5 |
| **Emprendedor** | Dashboard, Proyectos (lista, crear, detalle), Explorar Talleres, Mensajería, Perfil, Reseñas | 13 |
| **Taller** | Dashboard, Proyectos Disponibles, Mis Cotizaciones, Mensajería, Perfil, Reseñas | 11 |
| **Admin** | Todo lo anterior + Panel Admin, Gestión Usuarios, Verificación, Moderación | 27 |

---

## 🎨 Componentes Reutilizables Clave

Para optimizar el desarrollo, estos componentes se usarán en múltiples vistas:

1. **Layout Components:**
   - `<DashboardLayout>` - Sidebar + Header + Content
   - `<PublicLayout>` - Navbar + Footer
   - `<AuthLayout>` - Centrado, sin navbar

2. **UI Components:**
   - `<ProjectCard>` - Card de proyecto
   - `<WorkshopCard>` - Card de taller
   - `<QuotationCard>` - Card de cotización
   - `<ReviewCard>` - Card de reseña
   - `<MessageBubble>` - Burbuja de chat
   - `<UserAvatar>` - Avatar con badge
   - `<RatingStars>` - Estrellas de calificación
   - `<StatusBadge>` - Badge de estado
   - `<FilterSidebar>` - Sidebar de filtros
   - `<EmptyState>` - Estado vacío genérico
   - `<LoadingSpinner>` - Loading states
   - `<ConfirmModal>` - Modal de confirmación
   - `<ImageUploader>` - Subir imágenes
   - `<Stepper>` - Progress indicator

3. **Form Components:**
   - `<FormInput>` - Input con validación
   - `<FormTextarea>` - Textarea con contador
   - `<FormSelect>` - Select customizado
   - `<FormDatePicker>` - Date picker
   - `<FormImageUpload>` - Upload de imágenes

---

## 🎨 Funcionalidades Principales

### 1. Landing Page
- Hero section con propuesta de valor
- Sección "Cómo funciona" (3 pasos simples)
- Testimonios (seed data inicial)
- CTA para registro
- Footer con enlaces útiles

### 2. Autenticación y Onboarding

**Flujo de Registro:**
```
1. Usuario elige rol (Emprendedor/Taller)
2. Formulario de registro básico
3. Verificación de email
4. Completar perfil
5. Tutorial interactivo (skippable)
6. Dashboard
```

### 3. Dashboard Emprendedor

**Secciones:**
- Resumen: proyectos activos, cotizaciones recibidas
- Mis Proyectos: crear, editar, ver estado
- Talleres: buscar y filtrar talleres
- Mensajes: bandeja de entrada
- Perfil: editar información

### 4. Dashboard Taller

**Secciones:**
- Resumen: proyectos disponibles, cotizaciones enviadas
- Proyectos Disponibles: explorar proyectos publicados
- Mis Cotizaciones: seguimiento de propuestas
- Mensajes
- Mi Taller: editar perfil, galería, especialidades

### 5. Flujo de Creación de Proyecto

```
Paso 1: Información básica
├── Título del proyecto
├── Tipo de prenda
└── Cantidad

Paso 2: Detalles
├── Descripción detallada
├── Presupuesto estimado
├── Fecha límite
└── ¿Quién provee materiales?

Paso 3: Referencias visuales
├── Subir imágenes (hasta 5)
└── Notas adicionales

Paso 4: Revisión y publicación
```

### 6. Sistema de Cotizaciones

**Flujo:**
```
1. Taller ve proyecto publicado
2. Taller envía cotización con precio y tiempo
3. Emprendedor recibe notificación
4. Emprendedor revisa cotización
5. Emprendedor acepta/rechaza/negocia
6. Si acepta → Proyecto pasa a "En Progreso"
7. Chat abierto para coordinación
```

### 7. Sistema de Mensajería

**Características:**
- Chat en tiempo real (Socket.io)
- Indicador de "escribiendo..."
- Notificaciones de mensajes no leídos
- Compartir archivos (imágenes, PDFs)
- Buscar en conversaciones
- Archivar conversaciones

### 8. Sistema de Reseñas

**Proceso:**
```
1. Proyecto marcado como "Completado"
2. Sistema envía invitación a calificar (ambas partes)
3. Usuario completa formulario de reseña:
   - Calificación por estrellas (1-5)
   - Criterios específicos
   - Comentario escrito
4. Reseña publicada en perfil
5. Actualización automática de rating promedio
```

### 9. Panel de Administración

**Funcionalidades:**
- Dashboard con métricas clave (usuarios, proyectos, transacciones)
- Gestión de usuarios (aprobar talleres, suspender cuentas)
- Moderación de reseñas
- Reportes y estadísticas
- Configuración del sistema

---

## 📅 Plan de Desarrollo

### Sprint 0: Setup (1 semana)
- [ ] Configurar repositorios (frontend, backend)
- [ ] Setup de desarrollo local (Docker, env variables)
- [ ] Definir convenciones de código
- [ ] Setup CI/CD básico
- [ ] Diseño de wireframes (Figma)
- [ ] Definir paleta de colores y branding

### Sprint 1: Autenticación y Usuarios (2 semanas)
- [ ] Sistema de registro y login
- [ ] Verificación de email
- [ ] Perfiles de usuario (CRUD)
- [ ] Middleware de autenticación
- [ ] Tests unitarios

### Sprint 2: Gestión de Proyectos (2 semanas)
- [ ] CRUD de proyectos
- [ ] Búsqueda y filtrado de talleres
- [ ] Catálogo de talleres
- [ ] Upload de imágenes
- [ ] Validaciones

### Sprint 3: Sistema de Cotizaciones (2 semanas)
- [ ] CRUD de cotizaciones
- [ ] Flujo de aceptación/rechazo
- [ ] Estados de proyectos
- [ ] Notificaciones email
- [ ] Dashboard de seguimiento

### Sprint 4: Mensajería (2 semanas)
- [ ] Setup Socket.io
- [ ] Chat en tiempo real
- [ ] Upload de archivos en chat
- [ ] Notificaciones push
- [ ] Historial de conversaciones

### Sprint 5: Reseñas y Calificaciones (1.5 semanas)
- [ ] Sistema de reseñas
- [ ] Cálculo de ratings
- [ ] Visualización de reseñas
- [ ] Prevención de fraude

### Sprint 6: Panel Admin (1.5 semanas)
- [ ] Dashboard administrativo
- [ ] Gestión de usuarios
- [ ] Moderación
- [ ] Reportes

### Sprint 7: Testing y Optimización (2 semanas)
- [ ] Tests E2E (Playwright/Cypress)
- [ ] Optimización de rendimiento
- [ ] SEO básico
- [ ] Accesibilidad
- [ ] Bug fixing

### Sprint 8: Despliegue y Documentación (1 semana)
- [ ] Deploy a producción
- [ ] Documentación de API
- [ ] Guías de usuario
- [ ] Monitoreo y logging
- [ ] Plan de rollback

**Total estimado: 14-15 semanas (~3.5 meses)**

---

## 💰 Estimación de Recursos

### Equipo Recomendado

**Opción Mínima (Startup):**
- 1 Full Stack Developer (React + Node.js)
- 1 UI/UX Designer (part-time)
- 1 Product Owner / QA

**Opción Ideal:**
- 1 Frontend Developer (React)
- 1 Backend Developer (Node.js)
- 1 UI/UX Designer
- 1 QA Tester
- 1 Product Manager

### Costos de Infraestructura (Mensual)

**Fase MVP:**
- Hosting Backend (Railway/Render): $15-25/mes
- Hosting Frontend (Vercel): $0 (plan gratuito)
- Base de datos (Supabase/Railway): $0-15/mes
- Storage imágenes (Cloudinary): $0 (plan gratuito - 25GB)
- Dominio: $12/año
- Email transaccional (SendGrid): $0 (100 emails/día gratis)
- Monitoring (Sentry): $0 (plan gratuito)
- **Total: ~$30-40/mes**

**Fase Producción (escala pequeña):**
- Hosting Backend: $50-100/mes
- Base de datos: $25-50/mes
- CDN/Storage: $20-30/mes
- Email: $15-20/mes
- Monitoring/Logs: $25/mes
- **Total: ~$135-225/mes**

### Herramientas de Desarrollo

**Gratuitas:**
- GitHub (repos, CI/CD)
- VS Code
- Figma (3 proyectos gratis)
- Postman
- Notion/Trello (gestión)

**De Pago (opcionales):**
- Linear ($8/usuario/mes) - Project management
- Figma Pro ($12/usuario/mes)
- Better Stack ($20/mes) - Monitoring avanzado

---

## 📊 Métricas de Éxito

### Métricas Técnicas
- Tiempo de carga < 2s
- Uptime > 99%
- Zero critical bugs en producción
- Cobertura de tests > 70%

### Métricas de Producto (6 meses)
- 100+ talleres registrados
- 50+ emprendedores activos
- 200+ proyectos publicados
- Tasa de conversión: 30% (proyectos que reciben cotizaciones)
- Rating promedio de talleres: > 4.0/5.0
- Retention rate: > 40%

### Métricas de Negocio
- CAC (Costo de Adquisición de Cliente)
- LTV (Lifetime Value)
- Tasa de crecimiento mensual: 20%
- NPS (Net Promoter Score): > 50

---

## 🔐 Consideraciones de Seguridad

### Autenticación
- Implementar rate limiting en login
- Bloqueo temporal tras 5 intentos fallidos
- Contraseñas: mínimo 8 caracteres, mayúsculas, números
- 2FA (fase 2)

### Protección de Datos
- Encriptación en tránsito (HTTPS)
- Encriptación en reposo para datos sensibles
- No almacenar información de pago (usar pasarelas externas)
- GDPR/LOPD compliance

### Validación
- Validación tanto en frontend como backend
- Sanitización de HTML en inputs
- Protección contra XSS, CSRF, SQL Injection
- Upload de archivos: validar tipo, tamaño, escanear malware

### Auditoría
- Logs de acciones críticas
- Monitoreo de actividad sospechosa
- Backup automático diario
- Plan de respuesta a incidentes

---

## 📱 Roadmap Futuro (Post-MVP)

### Fase 2 (Meses 4-6)
- 🤖 IA para matching automático taller-proyecto
- 💳 Integración de pagos (Mercado Pago, PSE)
- 📍 Geolocalización y mapas
- 🏆 Sistema de gamificación (badges, niveles)
- 📧 Marketing automation

### Fase 3 (Meses 7-12)
- 📱 App móvil nativa (React Native)
- 🤝 Sistema de producción colaborativa
- 📊 Analytics avanzado para talleres
- 🔗 Blockchain para contratos (opcional)
- 🌐 Expansión a otras ciudades

### Fase 4 (Año 2+)
- 🛒 Marketplace de materiales
- 🎓 Plataforma de capacitación
- 🏭 Integración con ERP de talleres
- 🌍 Internacionalización
- 🤝 Red de coworking físicos

---

## 📚 Documentación Requerida

### Técnica
- [ ] README.md completo
- [ ] API Documentation (Swagger)
- [ ] Database Schema
- [ ] Architecture Decision Records (ADR)
- [ ] Setup y deployment guides
- [ ] Troubleshooting guide

### Usuario
- [ ] Guía de inicio rápido (emprendedores)
- [ ] Guía de inicio rápido (talleres)
- [ ] FAQs
- [ ] Videos tutoriales
- [ ] Términos y condiciones
- [ ] Política de privacidad

### Negocio
- [ ] Modelo de negocio (comisiones, planes)
- [ ] Plan de marketing
- [ ] Análisis competitivo
- [ ] Pitch deck para inversores

---

## ✅ Checklist Pre-Launch

### Desarrollo
- [ ] Todos los features del MVP implementados
- [ ] Tests unitarios pasando
- [ ] Tests E2E pasando
- [ ] Performance optimizado
- [ ] Accesibilidad validada
- [ ] SEO básico implementado

### Infraestructura
- [ ] SSL configurado
- [ ] Backup automático funcionando
- [ ] Monitoring activo
- [ ] Logs centralizados
- [ ] CDN configurado
- [ ] Email transaccional probado

### Legal
- [ ] Términos y condiciones
- [ ] Política de privacidad
- [ ] Aviso de cookies
- [ ] Proceso de verificación de talleres definido

### Marketing
- [ ] Landing page optimizada
- [ ] Material promocional (banners, videos)
- [ ] Estrategia de lanzamiento
- [ ] Base de datos inicial de talleres (seed)
- [ ] Programa de early adopters

### Seguridad
- [ ] Penetration testing básico
- [ ] HTTPS enforced
- [ ] Rate limiting configurado
- [ ] Validaciones frontend/backend
- [ ] Plan de respuesta a incidentes

---

## 🎯 Conclusión

Este documento proporciona una base sólida para desarrollar el MVP de **NexaModa**. El enfoque está en:

1. **Simplicidad**: MVP con funcionalidades esenciales
2. **Escalabilidad**: Arquitectura preparada para crecer
3. **Calidad**: Testing y buenas prácticas desde el inicio
4. **Velocidad**: Stack moderno y eficiente
5. **Costo-efectividad**: Infraestructura económica para comenzar

**Próximos pasos:**
1. Validar stack tecnológico con el equipo
2. Crear diseños en Figma
3. Setup del proyecto
4. Comenzar Sprint 1

---

**Documento creado para:** Proyecto NexaModa  
**Versión:** 1.0  
**Fecha:** Octubre 2025  
**Autores:** Fernanda Uribe, Nicole Gomez, Angélica Jaimes
