@echo off
echo ========================================
echo  FinnFood Cantina - Inicializacao Backend
echo ========================================

echo.
echo 1. Iniciando SQL Server...
cd sqlserver-config
docker-compose up -d
if %errorlevel% neq 0 (
    echo Erro ao iniciar SQL Server!
    pause
    exit /b 1
)

echo.
echo 2. Aguardando SQL Server inicializar...
timeout /t 10 /nobreak > nul

echo.
echo 3. Executando script de criacao do banco...
docker exec cantina-sqlserver /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P YourPassword123 -i /docker-entrypoint-initdb.d/create_database.sql
if %errorlevel% neq 0 (
    echo Aviso: Script pode ja ter sido executado anteriormente
)

echo.
echo 4. Iniciando aplicacao Spring Boot...
cd ..\backend-springboot
mvn spring-boot:run

pause