@echo off
echo 🚀 Iniciando FinnFood Backend...
echo.

cd /d "%~dp0"

echo 📦 Compilando projeto...
javac -cp "target/classes;%USERPROFILE%\.m2\repository\*" -d target/classes src/main/java/com/finnfood/cantina/*.java src/main/java/com/finnfood/cantina/*/*.java

if %ERRORLEVEL% NEQ 0 (
    echo ❌ Erro na compilação
    pause
    exit /b 1
)

echo ✅ Compilação concluída
echo 🏃 Executando aplicação...
echo.

java -cp "target/classes;%USERPROFILE%\.m2\repository\*" com.finnfood.cantina.CantinaApplication

pause