import { Routes, Route } from "react-router-dom";
import App from "./App";
import Contaescola from "./elias/Contaescola";
import Entraraluno from "./elias/Entraraluno";
import Telainicial from "./artur/Telainicial"; // Importe o componente Telainicial
import Telainicio from "./artur/Telainicio"; // Importe o componente Telainicial
import Carrinho from "./murilo/Carrinho";
import PaginaEditarPerfil from "./isaac/PaginaEditarPerfil"; // Importe o componente PaginaEditarPerfil
import Dinheiro3 from "./bryan/Dinheiro3"; // Importe o componente Dinheiro3
import PagamentoCartao from "./nathalia/PagamentoCartao"; // Importe o componente PagamentoCartao
import Funcionarios from "./artur/Funcionarios";
import Historico from "./artur/Historico";
import Menu from "./isaac/Menu";


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
      <Route path="/dinheiro3" element={<Dinheiro3 />} /> 
      <Route path="/pagamentocartao" element={<PagamentoCartao />} /> 
      <Route path="/funcionarios" element={<Funcionarios />} />
      <Route path="/historico" element={<Historico />} />
      <Route path="/menu" element={<Menu />} />
       
      
    </Routes>
  )
}

export default AppRoutes;

