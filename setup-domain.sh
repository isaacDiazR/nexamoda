#!/bin/bash

# Script para configurar dominio y SSL en NexaModa
# Ejecutar en el servidor

echo "🌐 Configuración de dominio para NexaModa"
echo "=========================================="
echo ""

# Solicitar dominio
read -p "📝 Ingresa tu dominio (ej: tudominio.com): " DOMAIN
read -p "📧 Ingresa tu email para Let's Encrypt: " EMAIL

if [ -z "$DOMAIN" ] || [ -z "$EMAIL" ]; then
    echo "❌ Error: Dominio y email son requeridos"
    exit 1
fi

echo ""
echo "🔧 Configurando dominio: $DOMAIN"
echo "📧 Email: $EMAIL"
echo ""

# Reemplazar dominio en nginx-proxy.conf
sed -i "s/tudominio.com/$DOMAIN/g" nginx-proxy.conf

echo "✅ Configuración actualizada"
echo ""

# Detener servicios actuales
echo "🛑 Deteniendo servicios..."
docker compose down

# Levantar con nueva configuración
echo "🚀 Iniciando servicios..."
docker compose -f docker-compose.prod.yml up -d

echo "⏳ Esperando que los servicios inicien..."
sleep 10

# Obtener certificado SSL
echo "🔒 Obteniendo certificado SSL..."
docker compose -f docker-compose.prod.yml run --rm certbot certonly --webroot --webroot-path /var/www/certbot \
    --email $EMAIL \
    --agree-tos \
    --no-eff-email \
    -d $DOMAIN \
    -d www.$DOMAIN

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Certificado SSL obtenido exitosamente!"
    echo ""
    echo "📝 Ahora debes:"
    echo "1. Editar nginx-proxy.conf"
    echo "2. Descomentar la sección HTTPS (server { listen 443... })"
    echo "3. Comentar el proxy temporal"
    echo "4. Ejecutar: docker compose -f docker-compose.prod.yml restart nginx-proxy"
    echo ""
    echo "🌐 Tu sitio estará disponible en:"
    echo "   http://$DOMAIN"
    echo "   https://$DOMAIN (después del paso 4)"
else
    echo ""
    echo "❌ Error al obtener certificado SSL"
    echo "Verifica que:"
    echo "- El DNS esté configurado correctamente"
    echo "- El puerto 80 esté accesible desde internet"
    echo "- El dominio apunte a la IP correcta"
fi
