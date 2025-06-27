import { Routes, Route } from "react-router-dom";
import App from "./App";
import Contaescola from "./criarconta/Contaescola";
import Entraraluno from "./login/Entraraluno";
import Telainicial from "./inicio/Telainicial"; // Importe o componente Telainicial
import Telainicio from "./inicio/telainicio"; // Importe o componente Telainicial
import Carrinho from "./alunofeed/Carrinho";
import PaginaEditarPerfil from "./alunofeed/PaginaEditarPerfil"; // Importe o componente PaginaEditarPerfil
import PagamentoCartao from "./alunofeed/Pagamentocartao"; // Importe o componente PagamentoCartao
import Funcionarios from "./escolafeed/Funcionarios";
import Historico from "./escolafeed/Historico";
import Menu from "./alunofeed/Menu";
import Pedidos from "./inicio/Pedidos";
import Esqueceu from "./login/Esqueceu";

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
      <Route path="/esqueceu" element={<Esqueceu />} />

    </Routes>
  )
}

export default AppRoutes;

