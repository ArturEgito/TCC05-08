# 🔗 Guia de Integração Backend - FinnFood

## 📁 Estrutura Criada

```
src/
├── api/
│   ├── routes.js          # Todas as rotas centralizadas
│   ├── httpClient.js      # Cliente HTTP com interceptors
│   └── endpoints.md       # Documentação completa das APIs
├── services/
│   ├── index.js          # Exportação centralizada
│   └── services/
│       ├── AuthService.js        # ✅ Atualizado
│       ├── CarrinhoService.js    # ✅ Atualizado
│       ├── CategoriaService.js   # ✅ Atualizado
│       ├── CepService.js         # ✅ Atualizado
│       ├── EscolaService.js      # ✅ Existente
│       ├── MensagemService.js    # ✅ Existente
│       ├── PedidoService.js      # ✅ Atualizado
│       ├── ProdutoService.js     # ✅ Atualizado
│       ├── PromocaoService.js    # ✅ Existente
│       ├── UsuarioService.js     # ✅ Existente
│       ├── PagamentoService.js   # 🆕 Novo
│       └── RelatorioService.js   # 🆕 Novo
└── utils/
    └── apiHelpers.js     # Utilitários para APIs
```

## 🚀 Como Usar

### 1. Importação Simplificada
```javascript
// Importar services específicos
import { ProdutoService, CarrinhoService } from '../services';

// Ou importar tudo
import * as Services from '../services';
```

### 2. Exemplo de Uso nos Componentes
```javascript
import { ProdutoService, handleApiError } from '../services';

const Menu = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const carregarProdutos = async () => {
      try {
        const response = await ProdutoService.findAll();
        setProdutos(response.data);
      } catch (error) {
        alert(handleApiError(error));
      }
    };
    carregarProdutos();
  }, []);
};
```

## 🔧 Funcionalidades Implementadas

### ✅ Autenticação Completa
- Login de usuário e escola
- Refresh token automático
- Logout com limpeza de sessão
- Recuperação de senha
- Interceptors automáticos

### ✅ Gestão de Produtos
- CRUD completo
- Upload de imagens
- Filtros por categoria/nome
- Gestão de cardápio

### ✅ Carrinho de Compras
- Adicionar/remover itens
- Atualizar quantidades
- Calcular totais
- Observações por item

### ✅ Sistema de Pedidos
- Criar pedidos
- Acompanhar status
- Histórico completo
- Filtros avançados

### 🆕 Sistema de Pagamentos
- Cartão de crédito
- PIX
- Dinheiro
- Verificação de status

### 🆕 Relatórios
- Vendas diárias/mensais
- Produtos mais vendidos
- Receita total
- Usuários ativos

## 🔐 Segurança

### Headers Automáticos
```javascript
// Token adicionado automaticamente
Authorization: Bearer {token}
Content-Type: application/json
```

### Tratamento de Erros
```javascript
// Redirecionamento automático em caso de 401
if (error.response?.status === 401) {
  localStorage.removeItem('user');
  window.location.href = '/entraraluno';
}
```

## 📡 Configuração do Backend

### URL Base
```javascript
// Alterar em src/api/routes.js
const API_BASE_URL = 'http://localhost:8080/api';
```

### Timeout
```javascript
// Configurado em src/api/httpClient.js
timeout: 10000, // 10 segundos para requisições normais
timeout: 30000, // 30 segundos para uploads
```

## 🛠️ Utilitários Disponíveis

### Validações
```javascript
import { isValidEmail, isValidCPF, isValidCNPJ } from '../utils/apiHelpers';

if (!isValidEmail(email)) {
  alert('Email inválido');
}
```

### Formatação
```javascript
import { formatCurrency, formatDate } from '../utils/apiHelpers';

const precoFormatado = formatCurrency(25.50); // R$ 25,50
const dataFormatada = formatDate(new Date()); // 29/07/2024
```

### FormData para Uploads
```javascript
import { createFormData } from '../utils/apiHelpers';

const formData = createFormData({
  nome: 'Produto',
  preco: 15.50
}, arquivo);
```

## 🔄 Migração dos Componentes Existentes

### Antes
```javascript
import ProdutoService from '../services/services/ProdutoService';
```

### Depois
```javascript
import { ProdutoService } from '../services';
```

## 📋 Checklist para o Backend

### Endpoints Obrigatórios
- [ ] `POST /api/auth/login` - Login
- [ ] `GET /api/produto/findAll` - Listar produtos
- [ ] `POST /api/carrinho/adicionarItem` - Adicionar ao carrinho
- [ ] `POST /api/pedido/create` - Criar pedido
- [ ] `POST /api/usuario/signup` - Cadastro
- [ ] `POST /api/escola/create` - Cadastro escola

### Endpoints Recomendados
- [ ] `POST /api/auth/refresh` - Refresh token
- [ ] `GET /api/relatorio/vendas/diarias` - Relatórios
- [ ] `POST /api/pagamento/cartao` - Pagamentos
- [ ] `GET /api/categoria/findAll` - Categorias

## 🚨 Pontos de Atenção

1. **CORS**: Configurar no backend para aceitar requisições do frontend
2. **Multipart**: Endpoints de upload devem aceitar `multipart/form-data`
3. **JWT**: Implementar refresh token para sessões longas
4. **Validação**: Validar dados no backend antes de processar
5. **Logs**: Implementar logs para debug das requisições

## 📞 Suporte

Todos os services mantêm compatibilidade com o código existente. Em caso de falha da API, muitos services têm fallback para localStorage, garantindo que o frontend continue funcionando durante o desenvolvimento do backend.

## 🎯 Próximos Passos

1. Implementar as rotas no backend seguindo a documentação em `src/api/endpoints.md`
2. Testar cada endpoint com as chamadas dos services
3. Configurar CORS e autenticação JWT
4. Implementar upload de arquivos
5. Adicionar logs e monitoramento