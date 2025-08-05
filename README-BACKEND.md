# 🚀 Backend FinnFood - Guia de Execução

## ✅ Correções Realizadas

### 🔧 Problemas Corrigidos:
- ❌ **Removida dependência Spring Security** - Eliminando complexidade desnecessária
- ❌ **Removidas dependências JWT** - Autenticação simplificada
- ✅ **Configurado H2 Database** - Banco em memória para desenvolvimento
- ✅ **Adicionado CORS** - Comunicação frontend/backend habilitada
- ✅ **Criados dados iniciais** - Usuários e produtos de teste
- ✅ **Simplificada autenticação** - Login direto sem criptografia

### 🎯 Configuração Atual:
- **Porta**: 8080
- **Context Path**: `/api`
- **Banco**: H2 em memória
- **CORS**: Habilitado para `localhost:5173`

## 🏃‍♂️ Como Executar

### 1. Via IDE (Spring Tools Suite/IntelliJ):
```
1. Abra o projeto backend-springboot
2. Execute a classe CantinaApplication.java
3. Aguarde inicialização completa
```

### 2. Via Command Line:
```bash
cd backend-springboot
./mvnw spring-boot:run
```

## 🧪 Testando a Conexão

### 1. Console H2:
- URL: http://localhost:8080/api/h2-console
- JDBC URL: `jdbc:h2:mem:testdb`
- Username: `sa`
- Password: (vazio)

### 2. Endpoints de Teste:
```
GET http://localhost:8080/api/produto/findAll
GET http://localhost:8080/api/categoria/findAll
POST http://localhost:8080/api/auth/login
```

### 3. Dados de Teste:
```json
// Login Usuário
{
  "email": "joao@teste.com",
  "senha": "123456"
}

// Login Escola
{
  "email": "escola@teste.com", 
  "senha": "123456"
}
```

## 📊 Estrutura dos Endpoints

### 🔐 Autenticação
- `POST /api/auth/login` - Login usuário
- `POST /api/auth/escola/login` - Login escola

### 👤 Usuários
- `GET /api/usuario/findAll` - Listar usuários
- `POST /api/usuario/create` - Criar usuário

### 🍔 Produtos
- `GET /api/produto/findAll` - Todos produtos
- `GET /api/produto/findAllCardapio` - Produtos do cardápio
- `GET /api/produto/findByCategoria/{id}` - Por categoria

### 🏷️ Categorias
- `GET /api/categoria/findAll` - Listar categorias
- `POST /api/categoria/create` - Criar categoria

### 🛒 Carrinho
- `GET /api/carrinho/obterCarrinho/{usuarioId}` - Obter carrinho
- `POST /api/carrinho/adicionarItem` - Adicionar item

### 📋 Pedidos
- `GET /api/pedido/findAll` - Listar pedidos
- `POST /api/pedido/create` - Criar pedido

## 🔄 Próximos Passos

1. ✅ Backend funcionando
2. 🔄 Testar conexão frontend
3. 🔄 Validar fluxo completo
4. 🔄 Ajustar se necessário

## 🐛 Troubleshooting

### Erro de Porta:
```bash
# Verificar se porta 8080 está livre
netstat -ano | findstr :8080
```

### Erro de CORS:
- Verificar se frontend roda em `localhost:5173`
- Configuração CORS em `CorsConfig.java`

### Banco H2:
- Dados são perdidos ao reiniciar (comportamento esperado)
- Para persistir, alterar `application.yml`