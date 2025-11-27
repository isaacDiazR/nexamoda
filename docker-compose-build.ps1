# Script de PowerShell para usar Docker Compose con NexaModa

Write-Host "🚀 NexaModa - Docker Compose Script" -ForegroundColor Cyan
Write-Host "====================================" -ForegroundColor Cyan
Write-Host ""

# Verificar si Docker Compose está instalado
Write-Host "📋 Verificando Docker Compose..." -ForegroundColor Yellow
try {
    $composeVersion = docker compose version
    Write-Host "✅ Docker Compose encontrado: $composeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Error: Docker Compose no está instalado" -ForegroundColor Red
    exit 1
}

Write-Host ""

# Detener servicios existentes
Write-Host "🛑 Deteniendo servicios anteriores (si existen)..." -ForegroundColor Yellow
docker compose down 2>$null

Write-Host ""

# Construir e iniciar servicios
Write-Host "🔨 Construyendo e iniciando servicios..." -ForegroundColor Yellow
docker compose up -d --build

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Servicios iniciados exitosamente" -ForegroundColor Green
    Write-Host ""
    Write-Host "🎉 ¡NexaModa está corriendo!" -ForegroundColor Green
    Write-Host "   Accede a la aplicación en: http://localhost:3000" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "📝 Comandos útiles:" -ForegroundColor Yellow
    Write-Host "   Ver logs:           docker compose logs -f" -ForegroundColor White
    Write-Host "   Detener servicios:  docker compose stop" -ForegroundColor White
    Write-Host "   Reiniciar:          docker compose restart" -ForegroundColor White
    Write-Host "   Eliminar todo:      docker compose down" -ForegroundColor White
    Write-Host "   Ver estado:         docker compose ps" -ForegroundColor White
} else {
    Write-Host "❌ Error al iniciar los servicios" -ForegroundColor Red
    exit 1
}
