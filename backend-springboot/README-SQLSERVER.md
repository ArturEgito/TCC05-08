# 🗄️ FinnFood Backend - SQL Server

## ⚙️ Configuração SQL Server

### 📋 Pré-requisitos:
1. **SQL Server** rodando na porta `1433`
2. **Usuário**: `sa`
3. **Senha**: `@ITB123456`
4. **Database**: `master`

### 🚀 Execução:
1. Abra **Spring Tools Suite**
2. Importe o projeto `backend-springboot`
3. Execute `CantinaApplication.java`

### 🔗 Links de Teste:
```
http://localhost:8080/api/produto/findAll
http://localhost:8080/api/categoria/findAll
http://localhost:8080/api/usuario/findAll
```

### 🧪 Login Teste (POST):
```
URL: http://localhost:8080/api/auth/login
Body: {
  "email": "teste@email.com",
  "senha": "123456"
}
```

### 📊 Configuração Atual:
- ✅ SQL Server Database
- ✅ CORS habilitado
- ✅ Porta 8080
- ✅ Context path: `/api`
- ✅ DDL: `update` (cria tabelas automaticamente)