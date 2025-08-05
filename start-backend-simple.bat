@echo off
echo 🚀 FinnFood Backend - Inicio Simples
echo.

cd backend-springboot

echo 📋 Verificando estrutura...
if not exist "src\main\java\com\finnfood\cantina\CantinaApplication.java" (
    echo ❌ Arquivo principal não encontrado
    pause
    exit /b 1
)

echo ✅ Estrutura OK
echo.
echo 🏃 Para executar:
echo 1. Abra Spring Tools Suite ou IntelliJ
echo 2. Importe o projeto backend-springboot
echo 3. Execute CantinaApplication.java
echo.
echo 🔗 URLs importantes:
echo - API: http://localhost:8080/api
echo - H2 Console: http://localhost:8080/api/h2-console
echo - Teste: http://localhost:8080/api/produto/findAll
echo.
echo 🧪 Login teste:
echo - Email: joao@teste.com
echo - Senha: 123456
echo.
pause