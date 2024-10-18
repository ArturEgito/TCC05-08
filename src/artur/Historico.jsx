import React from'react';
import './Historico.css';

const HistoricoVendas = () => { 
    const dadosHistorico = [ 
        {
            idVenda: 1, 
            dataVenda: '2024-03-01', 
            nomeProduto: 'cheetos', 
            quantidadeVendida: 1, 
            valorTotalVenda: 3.00, 
            nomeFuncionario: 'Isaque Castrin', 
            formaPagamento: 'Dinheiro' // Adicionado forma de pagamento
        },
        {
            idVenda: 2, 
            dataVenda: '2024-03-05', 
            nomeProduto: 'dolly', 
            quantidadeVendida: 1, 
            valorTotalVenda: 2.50, 
            nomeFuncionario: 'Fabiana Dias', 
            formaPagamento: 'Cartão de Crédito' // Adicionado forma de pagamento
        },
        {
            idVenda: 3, 
            dataVenda: '2024-03-10', 
            nomeProduto: 'cheetos', 
            quantidadeVendida: 2, 
            valorTotalVenda: 6.00, 
            nomeFuncionario: 'Murilo Egito', 
            formaPagamento: 'Pix' // Adicionado forma de pagamento
        }
    ];

    return (
        <div className="caixa-historico"> 
            <div className="conteudo-historico"> 
                <h2>Histórico de Vendas</h2>
                <table className="tabela-historico"> 
                    <thead>
                        <tr>
                            <th>ID da Venda</th> 
                            <th>Data da Venda</th> 
                            <th>Nome do Produto</th> 
                            <th>Quantidade Vendida</th> 
                            <th>Valor Total da Venda (R$)</th> 
                            <th>Nome do cliente</th> 
                            <th>Forma de Pagamento</th> {/* Adicionado título da coluna */}
                        </tr>
                    </thead>
                    <tbody>
                        {dadosHistorico.map((dados, index) => (
                            <tr key={index}>
                                <td>{dados.idVenda}</td>
                                <td>{dados.dataVenda}</td>
                                <td>{dados.nomeProduto}</td>
                                <td>{dados.quantidadeVendida}</td>
                                <td>R$ {dados.valorTotalVenda.toFixed(2)}</td>
                                <td>{dados.nomeFuncionario}</td>
                                <td>{dados.formaPagamento}</td> {/* Adicionado conteúdo da coluna */}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HistoricoVendas;