# Dockerfile para NexaModa
# Imagen base ligera de Nginx para servir archivos estáticos
FROM nginx:alpine

# Información del mantenedor
LABEL maintainer="NexaModa Team"
LABEL description="Prototipo visual de NexaModa - Plataforma de conexión entre emprendedores y talleres"

# Copiar todos los archivos del proyecto al directorio de Nginx
COPY . /usr/share/nginx/html

# Copiar configuración personalizada de Nginx (opcional)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Exponer el puerto 80
EXPOSE 80

# Nginx se ejecuta en primer plano por defecto en la imagen oficial
CMD ["nginx", "-g", "daemon off;"]
