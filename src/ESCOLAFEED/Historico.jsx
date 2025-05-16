import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Historico.css';

const HistoricoVendas = () => {
    const navigate = useNavigate();
    const [atualizar, setAtualizar] = React.useState(false);
    
    const pedidos = JSON.parse(localStorage.getItem('pedidos')) || [];

    const handleVoltar = () => {
        navigate(-1); // Volta para a página anterior
    };

    const handleExcluirVendas = () => {
        if (window.confirm('Tem certeza que deseja excluir TODOS os registros de vendas? Esta ação é irreversível!')) {
            localStorage.removeItem('pedidos');
            setAtualizar(!atualizar); // Força atualização do componente
        }
    };

    const dadosHistorico = pedidos.flatMap(pedido => 
        pedido.produtos.map(produto => ({
            idVenda: pedido.numero,
            dataVenda: pedido.dataPedido,
            nomeProduto: produto.nome,
            quantidadeVendida: produto.quantidade,
            valorTotalVenda: produto.preco * produto.quantidade,
            nomeCliente: pedido.nomeCliente,
            formaPagamento: pedido.formaPagamento
        }))
    );

    return (
        <div className="caixa-historico">
            <div className="conteudo-historico">
                <h2>Histórico de Vendas</h2>
                
                <div className="botoes-acao">
                    <button 
                        className="botao-voltar"
                        onClick={handleVoltar}
                    >
                        Voltar
                    </button>
                    
                    <button 
                        className="botao-excluir-tudo"
                        onClick={handleExcluirVendas}
                    >
                        Excluir Todas as Vendas
                    </button>
                </div>

                <table className="tabela-historico">
                    {/* ... (o restante da tabela permanece igual) ... */}
                </table>
            </div>
        </div>
    );
};

export default HistoricoVendas;