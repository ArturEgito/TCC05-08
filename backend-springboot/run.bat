@echo off
echo Verificando Java...
java -version
if %errorlevel% neq 0 (
    echo Java nao encontrado! Instale Java 17+
    pause
    exit /b 1
)

echo.
echo Compilando projeto...
javac -cp "target\classes;%USERPROFILE%\.m2\repository\*" src\main\java\com\finnfood\cantina\*.java

echo.
echo Para executar, instale Maven primeiro:
echo https://maven.apache.org/download.cgi
echo.
echo Depois execute: mvn spring-boot:run
pause