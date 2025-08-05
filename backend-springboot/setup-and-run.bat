@echo off
echo Configurando ambiente e executando FinnFood Cantina Backend...
echo.

REM Verificar se Maven está instalado
where mvn >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo Maven nao encontrado. Baixando e configurando...
    
    REM Criar diretório para Maven
    if not exist "C:\maven" mkdir "C:\maven"
    
    REM Baixar Maven (usando PowerShell)
    powershell -Command "Invoke-WebRequest -Uri 'https://archive.apache.org/dist/maven/maven-3/3.9.5/binaries/apache-maven-3.9.5-bin.zip' -OutFile 'C:\maven\maven.zip'"
    
    REM Extrair Maven
    powershell -Command "Expand-Archive -Path 'C:\maven\maven.zip' -DestinationPath 'C:\maven' -Force"
    
    REM Adicionar ao PATH temporariamente
    set "PATH=C:\maven\apache-maven-3.9.5\bin;%PATH%"
    set "MAVEN_HOME=C:\maven\apache-maven-3.9.5"
)

echo.
echo Compilando e executando aplicacao...
echo Configuracao: H2 Database (em memoria)
echo URL: http://localhost:8080/api
echo Console H2: http://localhost:8080/api/h2-console
echo.

REM Compilar e executar
mvn clean compile spring-boot:run

pause