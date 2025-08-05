# Backend FinnFood - Cantina Digital

Backend desenvolvido em Spring Boot para o sistema de cantina digital FinnFood.

## 🚀 Tecnologias

- **Java 17**
- **Spring Boot 3.2.0**
- **Spring Data JPA**
- **Spring Security**
- **JWT Authentication**
- **SQL Server**
- **Maven**

## 📦 Pré-requisitos

- Java 17+
- Maven 3.6+
- SQL Server (via Docker ou instalação local)

## 🛠️ Configuração

### 1. Configurar SQL Server
```bash
cd ../sqlserver-config
docker-compose up -d
```

### 2. Configurar aplicação
Edite o arquivo `src/main/resources/application.yml` se necessário:
```yaml
spring:
  datasource:
    url: jdbc:sqlserver://localhost:1433;databaseName=cantina_db
    username: sa
    password: YourPassword123
```

### 3. Executar aplicação
```bash
mvn spring-boot:run
```

A aplicação estará disponível em: `http://localhost:8080/api`

## 📋 Endpoints Principais

### Autenticação
- `POST /api/auth/login` - Login de usuário
- `POST /api/auth/escola/login` - Login de escola

### Usuários
- `GET /api/usuario/findAll` - Listar usuários
- `POST /api/usuario/create` - Criar usuário
- `PUT /api/usuario/update/{id}` - Atualizar usuário

### Produtos
- `GET /api/produto/findAll` - Listar produtos
- `GET /api/produto/findAllCardapio` - Produtos do cardápio
- `POST /api/produto/createSemFoto` - Criar produto

### Carrinho
- `GET /api/carrinho/obterCarrinho/{usuarioId}` - Obter carrinho
- `POST /api/carrinho/adicionarItem` - Adicionar item
- `DELETE /api/carrinho/removerItem/{itemId}` - Remover item

### Pedidos
- `GET /api/pedido/findAll` - Listar pedidos
- `POST /api/pedido/create` - Criar pedido
- `PUT /api/pedido/updateStatus/{id}` - Atualizar status

### Categorias
- `GET /api/categoria/findAll` - Listar categorias
- `POST /api/categoria/create` - Criar categoria

## 🔧 Desenvolvimento

### Executar em modo desenvolvimento
```bash
mvn spring-boot:run -Dspring-boot.run.profiles=dev
```

### Executar testes
```bash
mvn test
```

### Gerar JAR
```bash
mvn clean package
```

## 📁 Estrutura do Projeto

```
src/main/java/com/finnfood/cantina/
├── controller/          # Controllers REST
├── model/              # Entidades JPA
├── repository/         # Repositórios
├── dto/               # Data Transfer Objects
├── config/            # Configurações
├── security/          # Configurações de segurança
└── CantinaApplication.java
```

## 🔐 Segurança

- Autenticação via JWT
- Senhas criptografadas com BCrypt
- CORS configurado para frontend
- Endpoints públicos para consultas básicas

## 📊 Banco de Dados

O sistema utiliza SQL Server com as seguintes tabelas:
- usuarios
- escolas
- categorias
- produtos
- carrinho_itens
- pedidos
- pedido_itens

## 🐛 Troubleshooting

### Erro de conexão com banco
1. Verificar se SQL Server está rodando: `docker ps`
2. Verificar configurações em `application.yml`
3. Testar conexão: `telnet localhost 1433`

### Erro de porta em uso
```bash
# Verificar processo usando porta 8080
netstat -ano | findstr :8080
# Matar processo se necessário
taskkill /PID <PID> /F
```