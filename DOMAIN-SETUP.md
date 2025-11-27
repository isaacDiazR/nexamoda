# Guía de Configuración de Dominio para NexaModa

## 🌐 Pasos para configurar tu dominio de Namecheap

### 1. Configurar DNS en Namecheap

1. Ve a [Namecheap Dashboard](https://ap.www.namecheap.com/)
2. Click en **Manage** junto a tu dominio
3. Ve a **Advanced DNS**
4. Agrega estos registros:

```
Type: A Record
Host: @
Value: [IP_DE_TU_SERVIDOR]
TTL: Automatic

Type: A Record
Host: www
Value: [IP_DE_TU_SERVIDOR]
TTL: Automatic
```

5. Guarda los cambios
6. Espera 5-30 minutos para propagación DNS

### 2. Verificar propagación DNS

```bash
# Desde tu computadora local
nslookup tudominio.com
ping tudominio.com
```

### 3. En tu servidor - Configurar Nginx + SSL

```bash
# Conectarse al servidor
ssh usuario@tu-servidor

# Ir al directorio del proyecto
cd ~/nexamoda

# Ejecutar script de configuración
chmod +x setup-domain.sh
./setup-domain.sh
```

El script te pedirá:
- Tu dominio (ej: nexamoda.com)
- Tu email (para Let's Encrypt)

### 4. Activar HTTPS

Una vez obtenido el certificado SSL:

```bash
# Editar nginx-proxy.conf
nano nginx-proxy.conf

# Descomentar la sección HTTPS:
# - Quitar los # del bloque: server { listen 443 ssl... }
# - Comentar el proxy temporal en el bloque puerto 80

# Reiniciar Nginx
docker compose -f docker-compose.prod.yml restart nginx-proxy
```

### 5. Actualizar el workflow de GitHub Actions

Cambiar en `.github/workflows/deploy.yml`:

```yaml
# Línea del docker compose up, cambiar por:
docker compose -f docker-compose.prod.yml up -d --build
```

### 6. Verificar

```bash
# Ver logs
docker compose -f docker-compose.prod.yml logs -f

# Ver contenedores
docker ps

# Verificar SSL
curl -I https://tudominio.com
```

## 🔐 Puertos necesarios

Asegúrate de que estos puertos estén abiertos en tu firewall:

```bash
# Verificar firewall (UFW)
sudo ufw status

# Abrir puertos si es necesario
sudo ufw allow 8090/tcp
sudo ufw allow 8443/tcp
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
```

## 🔄 Renovación automática de SSL

El certificado se renovará automáticamente cada 12 horas gracias al contenedor `certbot`.

## 🆘 Solución de problemas

### DNS no resuelve
- Verifica en Namecheap que los registros A estén correctos
- Espera más tiempo (puede tardar hasta 48h en algunos casos)
- Usa `dig tudominio.com` para verificar

### Error al obtener certificado SSL
- Verifica que el puerto 80 esté abierto
- Asegúrate de que el DNS esté propagado
- Revisa los logs: `docker compose -f docker-compose.prod.yml logs certbot`

### El sitio no carga
- Verifica que los contenedores estén corriendo: `docker ps`
- Revisa logs: `docker compose -f docker-compose.prod.yml logs`
- Verifica configuración de Nginx: `docker compose -f docker-compose.prod.yml exec nginx-proxy nginx -t`

## 📝 URLs finales

- **HTTP:** http://tudominio.com:8090
- **HTTPS:** https://tudominio.com:8443

O si configuras reverse proxy en el puerto 80/443 del servidor:
- **HTTP:** http://tudominio.com (redirige a HTTPS)
- **HTTPS:** https://tudominio.com
