# 🔧 Solução para Problema de Conexão com Banco

## ❌ Problema Identificado
A aplicação Spring Boot está falhando ao conectar com SQL Server usando usuário 'sa' e senha '@ITB123456'.

## ✅ Soluções Implementadas

### 1. Configuração H2 (Desenvolvimento Local)
Modifiquei o `application.yml` para usar H2 Database em memória:

```yaml
spring:
  datasource:
    url: jdbc:h2:mem:cantina_db
    username: sa
    password: 
    driver-class-name: org.h2.Driver
  
  h2:
    console:
      enabled: true
      path: /h2-console
```

### 2. Scripts de Execução
- `run-local.bat` - Executa com perfil local
- `setup-and-run.bat` - Instala Maven e executa

### 3. Como Executar

#### Opção 1: Com Maven Instalado
```bash
cd backend-springboot
mvn spring-boot:run
```

#### Opção 2: Com IDE (Recomendado)
1. Abra o projeto no IntelliJ IDEA ou Eclipse
2. Execute a classe `CantinaApplication.java`
3. Acesse: http://localhost:8080/api

#### Opção 3: Console H2
- URL: http://localhost:8080/api/h2-console
- JDBC URL: jdbc:h2:mem:cantina_db
- Username: sa
- Password: (vazio)

### 4. Para Voltar ao SQL Server
Quando o Docker estiver funcionando:

1. Inicie o Docker Desktop
2. Execute: `docker-compose up -d` na pasta `sqlserver-config`
3. Restaure a configuração original no `application.yml`

### 5. Dependências Adicionadas
- H2 Database para desenvolvimento local
- Mantidas todas as dependências originais

## 🚀 Status
✅ Configuração H2 pronta
✅ Scripts de execução criados
⏳ Aguardando execução via IDE ou Maven