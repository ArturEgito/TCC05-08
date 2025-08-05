@echo off
echo Testando conexao do backend...
echo.
echo Configuracao atual:
echo - Porta: 8080
echo - Context Path: /api
echo - Banco: H2 em memoria
echo - CORS: Habilitado para localhost:5173
echo.
echo Para testar:
echo 1. Execute: java -jar target/cantina-backend-1.0.0.jar
echo 2. Acesse: http://localhost:8080/api/h2-console
echo 3. Teste endpoints: http://localhost:8080/api/produto/findAll
echo.
pause