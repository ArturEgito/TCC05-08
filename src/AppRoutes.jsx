import { Routes, Route } from "react-router-dom";
import App from "./App";
import Contaescola from "./CRIAR CONTA/Contaescola";
import Entraraluno from "./LOGIN/Entraraluno";
import Telainicial from "./INICIO/Telainicial"; // Importe o componente Telainicial
import Telainicio from "./INICIO/telainicio"; // Importe o componente Telainicial
import Carrinho from "./ALUNOFEED/Carrinho";
import PaginaEditarPerfil from "./ALUNOFEED/PaginaEditarPerfil"; // Importe o componente PaginaEditarPerfil
import PagamentoCartao from "./ALUNOFEED/Pagamentocartao"; // Importe o componente PagamentoCartao
import Funcionarios from "./ESCOLAFEED/Funcionarios";
import Historico from "./ESCOLAFEED/Historico";
import Menu from "./ALUNOFEED/Menu";
import Pedidos from "./INICIO/pedidos";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/tab" element={<div>Esta é a página do Aluno (rota /tab)</div>} /> 
      <Route path="/contaescola" element={<Contaescola />} />
      <Route path="/entraraluno" element={<Entraraluno />} />
      <Route path="/telainicial" element={<Telainicial />} /> 
      <Route path="/telainicio" element={<Telainicio />} />
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/paginaeditarperfil" element={<PaginaEditarPerfil />} /> 
      <Route path="/pagamentocartao" element={<PagamentoCartao />} /> 
      <Route path="/funcionarios" element={<Funcionarios />} />
      <Route path="/historico" element={<Historico />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/pedidos" element={<Pedidos />} />
      
    </Routes>
  )
}

export default AppRoutes;

