# Script de PowerShell para construir y ejecutar NexaModa con Docker

Write-Host "🚀 NexaModa - Docker Build Script" -ForegroundColor Cyan
Write-Host "=================================" -ForegroundColor Cyan
Write-Host ""

# Verificar si Docker está instalado
Write-Host "📋 Verificando Docker..." -ForegroundColor Yellow
try {
    $dockerVersion = docker --version
    Write-Host "✅ Docker encontrado: $dockerVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Error: Docker no está instalado o no está en el PATH" -ForegroundColor Red
    Write-Host "   Por favor, instala Docker Desktop desde https://www.docker.com/products/docker-desktop" -ForegroundColor Yellow
    exit 1
}

Write-Host ""

# Verificar si Docker está corriendo
Write-Host "📋 Verificando si Docker está corriendo..." -ForegroundColor Yellow
try {
    docker info | Out-Null
    Write-Host "✅ Docker está corriendo correctamente" -ForegroundColor Green
} catch {
    Write-Host "❌ Error: Docker no está corriendo" -ForegroundColor Red
    Write-Host "   Por favor, inicia Docker Desktop" -ForegroundColor Yellow
    exit 1
}

Write-Host ""

# Construir la imagen
Write-Host "🔨 Construyendo imagen Docker de NexaModa..." -ForegroundColor Yellow
docker build -t nexamoda:latest .

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Imagen construida exitosamente" -ForegroundColor Green
} else {
    Write-Host "❌ Error al construir la imagen" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Detener contenedor existente si está corriendo
Write-Host "🛑 Deteniendo contenedor anterior (si existe)..." -ForegroundColor Yellow
docker stop nexamoda-app 2>$null
docker rm nexamoda-app 2>$null

Write-Host ""

# Ejecutar el contenedor
Write-Host "🚀 Iniciando contenedor de NexaModa..." -ForegroundColor Yellow
docker run -d --name nexamoda-app -p 3000:80 nexamoda:latest

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Contenedor iniciado exitosamente" -ForegroundColor Green
    Write-Host ""
    Write-Host "🎉 ¡NexaModa está corriendo!" -ForegroundColor Green
    Write-Host "   Accede a la aplicación en: http://localhost:3000" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "📝 Comandos útiles:" -ForegroundColor Yellow
    Write-Host "   Ver logs:     docker logs nexamoda-app" -ForegroundColor White
    Write-Host "   Detener:      docker stop nexamoda-app" -ForegroundColor White
    Write-Host "   Reiniciar:    docker restart nexamoda-app" -ForegroundColor White
    Write-Host "   Eliminar:     docker rm -f nexamoda-app" -ForegroundColor White
} else {
    Write-Host "❌ Error al iniciar el contenedor" -ForegroundColor Red
    exit 1
}
