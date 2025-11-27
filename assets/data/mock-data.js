// Datos de ejemplo para el prototipo de NexaModa

const mockData = {
    // Talleres de ejemplo
    talleres: [
        {
            id: 1,
            nombre: "Confecciones María",
            propietario: "María García",
            email: "maria@confeccionesmaria.com",
            telefono: "301 234 5678",
            ubicacion: "Atalaya, Cúcuta",
            coordenadas: { lat: 7.9014, lng: -72.5088 },
            especialidades: ["Ropa casual", "Camisas", "Pantalones"],
            capacidadMensual: 500,
            pedidoMinimo: 20,
            tiempoEntregaPromedio: "15-20 días",
            calificacion: 4.8,
            numeroResenas: 24,
            certificaciones: ["Taller Oro", "Entrega Puntual"],
            descripcion: "Taller familiar con 15 años de experiencia en confección de prendas casuales. Especialistas en acabados de calidad.",
            portafolio: ["imagen1.jpg", "imagen2.jpg", "imagen3.jpg"],
            proyectosCompletados: 156,
            disponible: true,
            precio: "$15,000 - $25,000 por prenda",
            resenas: [
                {
                    cliente: "Laura Martínez",
                    calificacion: 5,
                    comentario: "Excelente trabajo, muy profesionales y puntuales.",
                    fecha: "2024-11-15"
                },
                {
                    cliente: "Carlos Ruiz",
                    calificacion: 4.5,
                    comentario: "Buena calidad, recomendados.",
                    fecha: "2024-11-10"
                }
            ]
        },
        {
            id: 2,
            nombre: "Modas y Diseños JL",
            propietario: "Juan López",
            email: "juan@modasydisenojl.com",
            telefono: "312 345 6789",
            ubicacion: "Centro, Cúcuta",
            coordenadas: { lat: 7.8897, lng: -72.4965 },
            especialidades: ["Vestidos", "Ropa formal", "Bordados"],
            capacidadMensual: 300,
            pedidoMinimo: 15,
            tiempoEntregaPromedio: "20-25 días",
            calificacion: 4.9,
            numeroResenas: 31,
            certificaciones: ["Taller Oro", "Diseñador Favorito"],
            descripcion: "Especialistas en vestidos de alta calidad y bordados personalizados. Atención personalizada.",
            portafolio: ["imagen4.jpg", "imagen5.jpg", "imagen6.jpg"],
            proyectosCompletados: 98,
            disponible: true,
            precio: "$25,000 - $45,000 por prenda",
            resenas: [
                {
                    cliente: "Ana Suárez",
                    calificacion: 5,
                    comentario: "Hermosos vestidos, superaron mis expectativas.",
                    fecha: "2024-11-18"
                }
            ]
        },
        {
            id: 3,
            nombre: "Textiles del Norte",
            propietario: "Roberto Díaz",
            email: "info@textilesdelnorte.com",
            telefono: "320 456 7890",
            ubicacion: "La Libertad, Cúcuta",
            coordenadas: { lat: 7.9123, lng: -72.5012 },
            especialidades: ["Ropa deportiva", "Uniformes", "Camisetas"],
            capacidadMensual: 800,
            pedidoMinimo: 50,
            tiempoEntregaPromedio: "10-15 días",
            calificacion: 4.6,
            numeroResenas: 19,
            certificaciones: ["Entrega Puntual"],
            descripcion: "Taller con capacidad para grandes volúmenes. Especialistas en ropa deportiva y uniformes empresariales.",
            portafolio: ["imagen7.jpg", "imagen8.jpg", "imagen9.jpg"],
            proyectosCompletados: 203,
            disponible: true,
            precio: "$12,000 - $18,000 por prenda",
            resenas: []
        },
        {
            id: 4,
            nombre: "Creaciones Sofía",
            propietario: "Sofía Mendoza",
            email: "sofia@creacionessofia.com",
            telefono: "315 567 8901",
            ubicacion: "Atalaya, Cúcuta",
            coordenadas: { lat: 7.8989, lng: -72.5123 },
            especialidades: ["Ropa infantil", "Ropa de bebé", "Accesorios"],
            capacidadMensual: 400,
            pedidoMinimo: 25,
            tiempoEntregaPromedio: "15-18 días",
            calificacion: 5.0,
            numeroResenas: 15,
            certificaciones: ["Taller Oro", "Diseñador Favorito", "Entrega Puntual"],
            descripcion: "Especialistas en ropa infantil con materiales de primera calidad. Diseños únicos y personalizados.",
            portafolio: ["imagen10.jpg", "imagen11.jpg", "imagen12.jpg"],
            proyectosCompletados: 87,
            disponible: true,
            precio: "$10,000 - $20,000 por prenda",
            resenas: [
                {
                    cliente: "Diana Torres",
                    calificacion: 5,
                    comentario: "Perfectos para mi línea de ropa infantil. ¡Increíble calidad!",
                    fecha: "2024-11-20"
                }
            ]
        },
        {
            id: 5,
            nombre: "Estilo Urbano",
            propietario: "Miguel Ángel Parra",
            email: "contacto@estilourbano.com",
            telefono: "318 678 9012",
            ubicacion: "San Luis, Cúcuta",
            coordenadas: { lat: 7.9056, lng: -72.5234 },
            especialidades: ["Streetwear", "Chaquetas", "Jeans"],
            capacidadMensual: 350,
            pedidoMinimo: 30,
            tiempoEntregaPromedio: "18-22 días",
            calificacion: 4.7,
            numeroResenas: 22,
            certificaciones: ["Diseñador Favorito"],
            descripcion: "Taller joven especializado en moda urbana y streetwear. Trabajamos con diseños innovadores.",
            portafolio: ["imagen13.jpg", "imagen14.jpg", "imagen15.jpg"],
            proyectosCompletados: 64,
            disponible: false,
            precio: "$20,000 - $35,000 por prenda",
            resenas: []
        },
        {
            id: 6,
            nombre: "Confecciones El Éxito",
            propietario: "Carmen Rodríguez",
            email: "elexito@confecciones.com",
            telefono: "310 789 0123",
            ubicacion: "Atalaya, Cúcuta",
            coordenadas: { lat: 7.8976, lng: -72.5076 },
            especialidades: ["Blusas", "Faldas", "Vestidos casuales"],
            capacidadMensual: 450,
            pedidoMinimo: 20,
            tiempoEntregaPromedio: "12-16 días",
            calificacion: 4.8,
            numeroResenas: 28,
            certificaciones: ["Taller Oro", "Entrega Puntual"],
            descripcion: "Más de 20 años confeccionando prendas femeninas. Calidad garantizada y precios competitivos.",
            portafolio: ["imagen16.jpg", "imagen17.jpg", "imagen18.jpg"],
            proyectosCompletados: 189,
            disponible: true,
            precio: "$15,000 - $28,000 por prenda",
            resenas: []
        }
    ],

    // Emprendedores de ejemplo
    emprendedores: [
        {
            id: 1,
            nombre: "Laura Martínez",
            nombreMarca: "Luna Fashion",
            email: "laura@lunafashion.com",
            telefono: "301 234 5678",
            tipoNegocio: "Marca de ropa femenina",
            descripcion: "Diseños modernos y elegantes para la mujer contemporánea",
            proyectosActivos: 2,
            proyectosCompletados: 8,
            miembroDesde: "2024-03-15"
        },
        {
            id: 2,
            nombre: "Carlos Ruiz",
            nombreMarca: "Urban Kids",
            email: "carlos@urbankids.com",
            telefono: "312 345 6789",
            tipoNegocio: "Ropa infantil urbana",
            descripcion: "Ropa cómoda y divertida para niños activos",
            proyectosActivos: 1,
            proyectosCompletados: 5,
            miembroDesde: "2024-06-20"
        },
        {
            id: 3,
            nombre: "Ana Suárez",
            nombreMarca: "Elegance Boutique",
            email: "ana@eleganceboutique.com",
            telefono: "320 456 7890",
            tipoNegocio: "Vestidos de fiesta",
            descripcion: "Vestidos únicos para ocasiones especiales",
            proyectosActivos: 3,
            proyectosCompletados: 12,
            miembroDesde: "2024-01-10"
        }
    ],

    // Proyectos de ejemplo
    proyectos: [
        {
            id: 1,
            emprendedorId: 1,
            emprendedorNombre: "Laura Martínez",
            tallerId: 1,
            tallerNombre: "Confecciones María",
            titulo: "Colección Primavera 2025 - Blusas",
            descripcion: "30 blusas en diferentes colores y tallas. Diseño moderno con manga francesa.",
            cantidad: 30,
            tipoPrenda: "Blusas",
            presupuesto: "$450,000 - $600,000",
            fechaSolicitud: "2024-11-20",
            fechaEntregaEstimada: "2024-12-10",
            estado: "En producción",
            progreso: 45,
            detalles: {
                tallas: ["XS", "S", "M", "L", "XL"],
                colores: ["Blanco", "Negro", "Azul marino", "Beige"],
                materialesRequeridos: "Tela popelina stretch",
                especificaciones: "Manga francesa, cuello camisero, botones forrados"
            },
            mensajes: [
                {
                    autor: "Laura Martínez",
                    mensaje: "¿Podemos revisar las muestras la próxima semana?",
                    fecha: "2024-11-22 10:30"
                },
                {
                    autor: "María García",
                    mensaje: "Perfecto, las tendré listas para el martes.",
                    fecha: "2024-11-22 11:15"
                }
            ]
        },
        {
            id: 2,
            emprendedorId: 2,
            emprendedorNombre: "Carlos Ruiz",
            tallerId: 4,
            tallerNombre: "Creaciones Sofía",
            titulo: "Línea Infantil - Conjunto deportivo",
            descripcion: "50 conjuntos deportivos para niños de 2 a 8 años.",
            cantidad: 50,
            tipoPrenda: "Conjuntos deportivos",
            presupuesto: "$500,000 - $750,000",
            fechaSolicitud: "2024-11-18",
            fechaEntregaEstimada: "2024-12-05",
            estado: "En producción",
            progreso: 70,
            detalles: {
                tallas: ["2", "4", "6", "8"],
                colores: ["Azul", "Rojo", "Verde", "Gris"],
                materialesRequeridos: "Tela deportiva anti-transpirante",
                especificaciones: "Pantalón con resorte, sudadera con capota"
            },
            mensajes: []
        },
        {
            id: 3,
            emprendedorId: 3,
            emprendedorNombre: "Ana Suárez",
            tallerId: 2,
            tallerNombre: "Modas y Diseños JL",
            titulo: "Vestidos de Gala - Temporada Diciembre",
            descripcion: "15 vestidos de gala largos con bordados personalizados.",
            cantidad: 15,
            tipoPrenda: "Vestidos de gala",
            presupuesto: "$1,200,000 - $1,500,000",
            fechaSolicitud: "2024-11-15",
            fechaEntregaEstimada: "2024-12-20",
            estado: "Revisión de diseño",
            progreso: 25,
            detalles: {
                tallas: ["S", "M", "L"],
                colores: ["Rojo vino", "Azul rey", "Negro", "Dorado", "Plateado"],
                materialesRequeridos: "Tela satinada, tul, pedrería",
                especificaciones: "Bordados en pecho, largo hasta el piso, cierre invisible"
            },
            mensajes: []
        },
        {
            id: 4,
            emprendedorId: 1,
            emprendedorNombre: "Laura Martínez",
            tallerId: null,
            tallerNombre: null,
            titulo: "Pantalones de lino - Nueva colección",
            descripcion: "40 pantalones de lino en corte palazzo y recto.",
            cantidad: 40,
            tipoPrenda: "Pantalones",
            presupuesto: "$600,000 - $800,000",
            fechaSolicitud: "2024-11-23",
            fechaEntregaEstimada: null,
            estado: "Buscando taller",
            progreso: 0,
            detalles: {
                tallas: ["S", "M", "L", "XL"],
                colores: ["Blanco", "Beige", "Terracota", "Negro"],
                materialesRequeridos: "Lino 100%",
                especificaciones: "Dos modelos: palazzo y recto, pretina alta, bolsillos laterales"
            },
            mensajes: []
        }
    ],

    // Notificaciones
    notificaciones: {
        emprendedor: [
            {
                id: 1,
                tipo: "proyecto",
                titulo: "Actualización de proyecto",
                mensaje: "Confecciones María actualizó el progreso de tu proyecto a 45%",
                fecha: "2024-11-23 14:30",
                leida: false
            },
            {
                id: 2,
                tipo: "mensaje",
                titulo: "Nuevo mensaje",
                mensaje: "María García te envió un mensaje sobre 'Colección Primavera 2025'",
                fecha: "2024-11-22 11:15",
                leida: false
            },
            {
                id: 3,
                tipo: "propuesta",
                titulo: "Nueva propuesta recibida",
                mensaje: "Textiles del Norte envió una propuesta para tu proyecto 'Pantalones de lino'",
                fecha: "2024-11-23 09:00",
                leida: true
            }
        ],
        taller: [
            {
                id: 1,
                tipo: "solicitud",
                titulo: "Nueva solicitud de proyecto",
                mensaje: "Laura Martínez solicita cotización para 30 blusas",
                fecha: "2024-11-23 16:45",
                leida: false
            },
            {
                id: 2,
                tipo: "mensaje",
                titulo: "Nuevo mensaje de cliente",
                mensaje: "Laura Martínez pregunta sobre disponibilidad para diciembre",
                fecha: "2024-11-22 10:30",
                leida: false
            },
            {
                id: 3,
                tipo: "resena",
                titulo: "Nueva reseña recibida",
                mensaje: "Carlos Ruiz dejó una reseña de 5 estrellas",
                fecha: "2024-11-20 18:20",
                leida: true
            }
        ]
    }
};

// Función para obtener taller por ID
function getTallerById(id) {
    return mockData.talleres.find(t => t.id === id);
}

// Función para obtener emprendedor por ID
function getEmprendedorById(id) {
    return mockData.emprendedores.find(e => e.id === id);
}

// Función para obtener proyectos de un emprendedor
function getProyectosByEmprendedor(emprendedorId) {
    return mockData.proyectos.filter(p => p.emprendedorId === emprendedorId);
}

// Función para obtener proyectos de un taller
function getProyectosByTaller(tallerId) {
    return mockData.proyectos.filter(p => p.tallerId === tallerId);
}

// Función para filtrar talleres
function filtrarTalleres(filtros) {
    let resultado = mockData.talleres;
    
    if (filtros.especialidad) {
        resultado = resultado.filter(t => 
            t.especialidades.some(e => e.toLowerCase().includes(filtros.especialidad.toLowerCase()))
        );
    }
    
    if (filtros.ubicacion) {
        resultado = resultado.filter(t => 
            t.ubicacion.toLowerCase().includes(filtros.ubicacion.toLowerCase())
        );
    }
    
    if (filtros.pedidoMinimo) {
        resultado = resultado.filter(t => t.pedidoMinimo <= filtros.pedidoMinimo);
    }
    
    if (filtros.disponible !== undefined) {
        resultado = resultado.filter(t => t.disponible === filtros.disponible);
    }
    
    if (filtros.calificacionMinima) {
        resultado = resultado.filter(t => t.calificacion >= filtros.calificacionMinima);
    }
    
    return resultado;
}
