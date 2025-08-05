# 🚀 Solução Rápida - SQL Server Local

## Problema
Docker não está rodando, impedindo o uso do container SQL Server.

## Solução: SQL Server Express Local

### 1. Baixar SQL Server Express
- Acesse: https://www.microsoft.com/pt-br/sql-server/sql-server-downloads
- Baixe "SQL Server 2022 Express"
- Instale com configurações padrão

### 2. Configurar Usuário SA
Após instalação, execute no SQL Server Management Studio:
```sql
ALTER LOGIN sa ENABLE;
ALTER LOGIN sa WITH PASSWORD = '@ITB123456';
```

### 3. Configuração Alternativa (LocalDB)
Modifique `application.yml`:
```yaml
spring:
  datasource:
    url: jdbc:sqlserver://localhost\\SQLEXPRESS:1433;databaseName=master;encrypt=false;trustServerCertificate=true
    username: sa
    password: "@ITB123456"
```

### 4. Solução Temporária - Sem Banco
Para testar sem banco, comente as dependências JPA no código:

```java
// @EnableJpaRepositories
// @EntityScan
public class CantinaApplication {
    public static void main(String[] args) {
        SpringApplication.run(CantinaApplication.class, args);
    }
}
```

## Status Atual
❌ Docker não disponível
❌ SQL Server container não iniciado
⏳ Aguardando instalação SQL Server Express local