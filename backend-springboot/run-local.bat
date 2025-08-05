@echo off
echo Iniciando FinnFood Cantina Backend (Local H2)...
echo.
echo Configuracao:
echo - Perfil: local
echo - Banco: H2 (em memoria)
echo - Porta: 8080
echo - Console H2: http://localhost:8080/api/h2-console
echo.
mvn spring-boot:run -Dspring-boot.run.profiles=local
pause