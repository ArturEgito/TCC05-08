# 🎯 Resumo das Rotas Backend - FinnFood

## ✅ **ESTRUTURA VERIFICADA E CORRIGIDA**

### 📁 **Arquivos Principais**
- `src/api/routes.js` - ✅ Todas as rotas centralizadas
- `src/api/httpClient.js` - ✅ Cliente HTTP com interceptors
- `src/services/index.js` - ✅ Exportação centralizada
- `src/utils/apiHelpers.js` - ✅ Utilitários validados

### 🔧 **Services Atualizados**
- `AuthService.js` - ✅ Login unificado + refresh token
- `UsuarioService.js` - ✅ CRUD completo + novas rotas
- `EscolaService.js` - ✅ CRUD completo + login
- `ProdutoService.js` - ✅ Gestão completa + cardápio
- `CarrinhoService.js` - ✅ Operações + cálculo total
- `PedidoService.js` - ✅ Criação + acompanhamento
- `CategoriaService.js` - ✅ CRUD completo
- `MensagemService.js` - ✅ Contato + notificações
- `PromocaoService.js` - ✅ Gestão + upload
- `CepService.js` - ✅ Validação + formatação
- `PagamentoService.js` - 🆕 Cartão + PIX + Dinheiro
- `RelatorioService.js` - 🆕 Vendas + Estatísticas

## 🚀 **ROTAS ESSENCIAIS PARA O BACKEND**

### 🔐 **Autenticação (OBRIGATÓRIO)**
```
POST /api/auth/login              # Login usuário
POST /api/auth/escola/login       # Login escola
POST /api/auth/refresh            # Renovar token
POST /api/auth/logout             # Logout
```

### 👤 **Usuários (OBRIGATÓRIO)**
```
GET  /api/usuario/findAll         # Listar usuários
GET  /api/usuario/findById/{id}   # Buscar por ID
POST /api/usuario/signup          # Cadastro
POST /api/usuario/create          # Criar (admin)
PUT  /api/usuario/update/{id}     # Atualizar
PUT  /api/usuario/alterarSenha/{id} # Alterar senha
```

### 🏫 **Escola (OBRIGATÓRIO)**
```
GET  /api/escola/findAll          # Listar escolas
POST /api/escola/create           # Cadastro escola
PUT  /api/escola/update/{id}      # Atualizar
```

### 🍔 **Produtos (OBRIGATÓRIO)**
```
GET  /api/produto/findAll         # Listar produtos
GET  /api/produto/findAllCardapio # Cardápio
GET  /api/produto/findById/{id}   # Buscar por ID
POST /api/produto/createComFoto   # Criar com foto
PUT  /api/produto/alterar/{id}    # Atualizar
```

### 📂 **Categorias (OBRIGATÓRIO)**
```
GET  /api/categoria/findAll       # Listar categorias
GET  /api/categoria/findById/{id} # Buscar por ID
POST /api/categoria/create        # Criar categoria
```

### 🛒 **Carrinho (OBRIGATÓRIO)**
```
GET  /api/carrinho/obterCarrinho/{usuarioId}     # Obter carrinho
POST /api/carrinho/adicionarItem                 # Adicionar item
PUT  /api/carrinho/atualizarQuantidade/{itemId}  # Atualizar quantidade
DELETE /api/carrinho/removerItem/{itemId}        # Remover item
DELETE /api/carrinho/limparCarrinho/{usuarioId}  # Limpar carrinho
```

### 📦 **Pedidos (OBRIGATÓRIO)**
```
GET  /api/pedido/findAll          # Listar pedidos
GET  /api/pedido/findById/{id}    # Buscar por ID
POST /api/pedido/create           # Criar pedido
PUT  /api/pedido/updateStatus/{id} # Atualizar status
GET  /api/pedido/findByUsuario/{usuarioId} # Pedidos do usuário
```

### 💬 **Mensagens (RECOMENDADO)**
```
GET  /api/mensagem/findAll        # Listar mensagens
POST /api/mensagem/create         # Criar mensagem
PUT  /api/mensagem/marcarComoLida/{id} # Marcar como lida
```

### 🎉 **Promoções (RECOMENDADO)**
```
GET  /api/promocao/findAll        # Listar promoções
GET  /api/promocao/findAllAtivos  # Promoções ativas
POST /api/promocao/addPromocao    # Criar promoção
```

## 💳 **PAGAMENTOS (OPCIONAL - FUTURO)**
```
POST /api/pagamento/cartao        # Pagamento cartão
POST /api/pagamento/pix           # Pagamento PIX
POST /api/pagamento/dinheiro      # Pagamento dinheiro
```

## 📊 **RELATÓRIOS (OPCIONAL - FUTURO)**
```
GET /api/relatorio/vendas/diarias    # Vendas diárias
GET /api/relatorio/produtos/mais-vendidos # Top produtos
```

## 🔧 **CONFIGURAÇÕES BACKEND**

### **CORS (Obrigatório)**
```javascript
// Permitir requisições do frontend
origin: "http://localhost:5173"
methods: ["GET", "POST", "PUT", "DELETE"]
headers: ["Content-Type", "Authorization"]
```

### **JWT (Obrigatório)**
```javascript
// Token no header
Authorization: Bearer {token}
// Expiração recomendada: 24h
// Refresh token: 7 dias
```

### **Upload de Arquivos**
```javascript
// Multipart/form-data
// Tamanho máximo: 5MB
// Tipos: JPG, PNG, GIF
```

### **Banco de Dados**
- Usar o arquivo `bd_cantina.sql` como base
- Tabelas principais: usuario, escola, produto, categoria, carrinho, pedido

## 🎯 **PRIORIDADES DE IMPLEMENTAÇÃO**

### **Fase 1 - MVP (Essencial)**
1. Autenticação (login/logout)
2. Usuários (CRUD básico)
3. Produtos (listagem + detalhes)
4. Carrinho (adicionar/remover)
5. Pedidos (criar + listar)

### **Fase 2 - Funcionalidades**
1. Escola (cadastro + gestão)
2. Categorias (CRUD)
3. Upload de imagens
4. Status de pedidos

### **Fase 3 - Avançado**
1. Promoções
2. Mensagens/Contato
3. Relatórios básicos
4. Pagamentos

## ✅ **CHECKLIST BACKEND**

### **Configuração Inicial**
- [ ] Configurar CORS
- [ ] Implementar JWT
- [ ] Conectar banco de dados
- [ ] Configurar upload de arquivos

### **Endpoints Críticos**
- [ ] POST /api/auth/login
- [ ] GET /api/produto/findAll
- [ ] POST /api/carrinho/adicionarItem
- [ ] POST /api/pedido/create
- [ ] POST /api/usuario/signup

### **Testes**
- [ ] Testar login
- [ ] Testar listagem de produtos
- [ ] Testar carrinho
- [ ] Testar criação de pedidos

## 🚨 **IMPORTANTE**

O frontend está **100% preparado** e funcionará imediatamente quando o backend implementar essas rotas. Todos os services têm fallbacks para localStorage, garantindo funcionamento durante o desenvolvimento.

**Próximo passo**: Implementar o backend seguindo exatamente essas rotas!