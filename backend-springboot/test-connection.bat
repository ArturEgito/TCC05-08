@echo off
echo Testando conexao com SQL Server...
echo.

sqlcmd -S localhost -U sa -P "@ITB123456" -Q "SELECT @@VERSION"

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ Conexao com SQL Server OK!
    echo Agora execute a aplicacao no VS Code:
    echo 1. Abra o projeto no VS Code
    echo 2. Instale as extensoes recomendadas
    echo 3. Pressione F5 ou use Spring Boot Dashboard
) else (
    echo.
    echo ❌ Falha na conexao. Verifique:
    echo - SQL Server esta rodando?
    echo - Usuario 'sa' habilitado?
    echo - Senha '@ITB123456' correta?
)

pause