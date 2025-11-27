// NexaModa - Funcionalidades principales del prototipo

// Utilidades generales
const NexaModa = {
    // Verificar autenticación
    checkAuth: function() {
        const userRole = localStorage.getItem('userRole');
        const userEmail = localStorage.getItem('userEmail');
        
        if (!userRole || !userEmail) {
            return false;
        }
        return { role: userRole, email: userEmail };
    },

    // Redirigir según rol
    redirectToDashboard: function() {
        const auth = this.checkAuth();
        if (!auth) {
            window.location.href = 'login.html';
            return;
        }
        
        if (auth.role === 'emprendedor') {
            window.location.href = 'dashboard-emprendedor.html';
        } else if (auth.role === 'taller') {
            window.location.href = 'dashboard-taller.html';
        }
    },

    // Cerrar sesión
    logout: function() {
        localStorage.clear();
        window.location.href = 'index.html';
    },

    // Obtener información del usuario actual
    getCurrentUser: function() {
        return {
            role: localStorage.getItem('userRole'),
            email: localStorage.getItem('userEmail'),
            name: localStorage.getItem('userName') || localStorage.getItem('userTaller'),
            marca: localStorage.getItem('userMarca')
        };
    },

    // Formatear moneda colombiana
    formatCurrency: function(amount) {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        }).format(amount);
    },

    // Formatear fecha
    formatDate: function(dateString) {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('es-ES', options);
    },

    // Calcular tiempo transcurrido
    timeAgo: function(dateString) {
        const now = new Date();
        const past = new Date(dateString);
        const diffInSeconds = Math.floor((now - past) / 1000);

        if (diffInSeconds < 60) return 'Hace unos segundos';
        if (diffInSeconds < 3600) return `Hace ${Math.floor(diffInSeconds / 60)} minutos`;
        if (diffInSeconds < 86400) return `Hace ${Math.floor(diffInSeconds / 3600)} horas`;
        if (diffInSeconds < 604800) return `Hace ${Math.floor(diffInSeconds / 86400)} días`;
        if (diffInSeconds < 2592000) return `Hace ${Math.floor(diffInSeconds / 604800)} semanas`;
        return `Hace ${Math.floor(diffInSeconds / 2592000)} meses`;
    },

    // Validar email
    validateEmail: function(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    },

    // Validar teléfono colombiano
    validatePhone: function(phone) {
        const re = /^[3][0-9]{9}$/;
        return re.test(phone.replace(/\s/g, ''));
    },

    // Mostrar notificación toast
    showNotification: function(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-20 right-4 z-50 max-w-sm p-4 rounded-lg shadow-lg transition-all transform ${
            type === 'success' ? 'bg-green-500' :
            type === 'error' ? 'bg-red-500' :
            type === 'warning' ? 'bg-amber-500' :
            'bg-blue-500'
        } text-white`;
        notification.innerHTML = `
            <div class="flex items-center space-x-3">
                <i class="fas ${
                    type === 'success' ? 'fa-check-circle' :
                    type === 'error' ? 'fa-times-circle' :
                    type === 'warning' ? 'fa-exclamation-triangle' :
                    'fa-info-circle'
                } text-xl"></i>
                <p class="font-semibold">${message}</p>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.style.opacity = '0';
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    },

    // Confirmar acción
    confirm: function(message, onConfirm) {
        if (confirm(message)) {
            onConfirm();
        }
    }
};

// Funciones de búsqueda y filtrado
const Search = {
    // Buscar talleres
    searchTalleres: function(query, filters = {}) {
        if (!mockData || !mockData.talleres) {
            console.error('Mock data not loaded');
            return [];
        }

        let results = mockData.talleres;

        // Búsqueda por texto
        if (query && query.trim() !== '') {
            const searchTerm = query.toLowerCase();
            results = results.filter(taller => 
                taller.nombre.toLowerCase().includes(searchTerm) ||
                taller.ubicacion.toLowerCase().includes(searchTerm) ||
                taller.especialidades.some(esp => esp.toLowerCase().includes(searchTerm)) ||
                taller.descripcion.toLowerCase().includes(searchTerm)
            );
        }

        // Filtrar por especialidad
        if (filters.especialidad) {
            results = results.filter(taller =>
                taller.especialidades.some(esp => 
                    esp.toLowerCase().includes(filters.especialidad.toLowerCase())
                )
            );
        }

        // Filtrar por ubicación
        if (filters.ubicacion) {
            results = results.filter(taller =>
                taller.ubicacion.toLowerCase().includes(filters.ubicacion.toLowerCase())
            );
        }

        // Filtrar por pedido mínimo
        if (filters.pedidoMinimo) {
            results = results.filter(taller =>
                taller.pedidoMinimo <= parseInt(filters.pedidoMinimo)
            );
        }

        // Filtrar por disponibilidad
        if (filters.disponible === 'disponible') {
            results = results.filter(taller => taller.disponible === true);
        }

        // Filtrar por calificación mínima
        if (filters.calificacionMinima) {
            results = results.filter(taller =>
                taller.calificacion >= parseFloat(filters.calificacionMinima)
            );
        }

        return results;
    },

    // Renderizar resultados de talleres
    renderTalleres: function(talleres, containerId) {
        const container = document.getElementById(containerId);
        if (!container) return;

        if (talleres.length === 0) {
            container.innerHTML = `
                <div class="col-span-full text-center py-12">
                    <i class="fas fa-search text-6xl text-gray-300 mb-4"></i>
                    <p class="text-xl text-gray-600">No se encontraron talleres con esos criterios</p>
                    <button onclick="location.reload()" class="mt-4 text-primary-600 font-semibold hover:underline">
                        Limpiar filtros
                    </button>
                </div>
            `;
            return;
        }

        container.innerHTML = talleres.map(taller => this.createTallerCard(taller)).join('');
    },

    // Crear tarjeta de taller
    createTallerCard: function(taller) {
        const stars = this.renderStars(taller.calificacion);
        const disponible = taller.disponible;
        
        return `
            <div class="bg-white rounded-xl shadow-sm card-hover overflow-hidden ${!disponible ? 'opacity-60' : ''}">
                <div class="p-6">
                    <div class="flex items-start justify-between mb-4">
                        <div class="flex-1">
                            <h3 class="text-xl font-bold text-gray-900 mb-1">${taller.nombre}</h3>
                            <p class="text-sm text-gray-600 mb-2">
                                <i class="fas fa-map-marker-alt text-primary-600 mr-1"></i> ${taller.ubicacion}
                            </p>
                        </div>
                        <button class="text-gray-400 hover:text-red-500" onclick="toggleFavorite(${taller.id})">
                            <i class="far fa-heart text-2xl"></i>
                        </button>
                    </div>

                    <div class="flex items-center mb-4">
                        ${stars}
                        <span class="text-sm font-semibold text-gray-900">${taller.calificacion}</span>
                        <span class="text-sm text-gray-600 ml-1">(${taller.numeroResenas} reseñas)</span>
                    </div>

                    <div class="flex flex-wrap gap-2 mb-4">
                        ${taller.especialidades.slice(0, 3).map(esp => 
                            `<span class="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">${esp}</span>`
                        ).join('')}
                    </div>

                    <div class="space-y-2 mb-4 text-sm text-gray-600">
                        <p><i class="fas fa-box text-primary-600 mr-2"></i> Pedido mínimo: <strong>${taller.pedidoMinimo} unidades</strong></p>
                        <p><i class="fas fa-clock text-primary-600 mr-2"></i> Entrega: <strong>${taller.tiempoEntregaPromedio}</strong></p>
                        <p><i class="fas fa-dollar-sign text-primary-600 mr-2"></i> <strong>${taller.precio}</strong></p>
                    </div>

                    <div class="flex items-center space-x-2 mb-4">
                        ${taller.certificaciones.map(cert => {
                            const badge = cert === 'Taller Oro' ? '🏆' : cert === 'Entrega Puntual' ? '⏰' : '⭐';
                            return `<span class="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded font-semibold">${badge} ${cert}</span>`;
                        }).join('')}
                        ${disponible ? 
                            '<span class="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-semibold">✓ Disponible</span>' :
                            '<span class="text-xs bg-red-100 text-red-700 px-2 py-1 rounded font-semibold">⏸ No disponible</span>'
                        }
                    </div>

                    <p class="text-sm text-gray-600 mb-4">${taller.descripcion.substring(0, 100)}...</p>

                    <div class="flex space-x-2">
                        <a href="perfil-taller.html?id=${taller.id}" class="flex-1 ${disponible ? 'bg-primary-600 hover:bg-primary-700' : 'bg-gray-400 cursor-not-allowed'} text-white py-2 rounded-lg text-center font-semibold transition">
                            Ver Perfil
                        </a>
                        <button class="px-4 py-2 border-2 ${disponible ? 'border-primary-600 text-primary-600 hover:bg-primary-50' : 'border-gray-300 text-gray-400 cursor-not-allowed'} rounded-lg font-semibold transition" ${!disponible ? 'disabled' : ''}>
                            <i class="fas fa-envelope"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
    },

    // Renderizar estrellas de calificación
    renderStars: function(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;
        let stars = '<div class="flex items-center text-amber-500 mr-2">';
        
        for (let i = 0; i < fullStars; i++) {
            stars += '<i class="fas fa-star"></i>';
        }
        
        if (hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        }
        
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<i class="far fa-star"></i>';
        }
        
        stars += '</div>';
        return stars;
    }
};

// Funciones de favoritos
function toggleFavorite(tallerId) {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const index = favorites.indexOf(tallerId);
    
    if (index === -1) {
        favorites.push(tallerId);
        NexaModa.showNotification('Taller agregado a favoritos', 'success');
    } else {
        favorites.splice(index, 1);
        NexaModa.showNotification('Taller removido de favoritos', 'info');
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    // Verificar si estamos en una página protegida
    const protectedPages = ['dashboard-emprendedor.html', 'dashboard-taller.html', 'buscar-talleres.html', 'perfil-emprendedor.html', 'perfil-taller.html'];
    const currentPage = window.location.pathname.split('/').pop();
    
    if (protectedPages.includes(currentPage)) {
        if (!NexaModa.checkAuth()) {
            window.location.href = 'login.html';
        }
    }
});

// Exportar para uso global
window.NexaModa = NexaModa;
window.Search = Search;
