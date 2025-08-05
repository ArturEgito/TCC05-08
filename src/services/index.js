// Exportação centralizada de todos os services
export { default as AuthService } from './services/AuthService';
export { default as UsuarioService } from './services/UsuarioService';
export { default as EscolaService } from './services/EscolaService';
export { default as ProdutoService } from './services/ProdutoService';
export { default as CategoriaService } from './services/CategoriaService';
export { default as CarrinhoService } from './services/CarrinhoService';
export { default as PedidoService } from './services/PedidoService';
export { default as PromocaoService } from './services/PromocaoService';
export { default as MensagemService } from './services/MensagemService';
export { default as PagamentoService } from './services/PagamentoService';
export { default as RelatorioService } from './services/RelatorioService';
export { default as CepService } from './services/CepService';

// Exportação das configurações de API
export { default as API_ROUTES } from '../api/routes';
export { httpClient, uploadClient, externalClient } from '../api/httpClient';