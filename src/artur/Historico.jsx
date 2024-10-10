import React, { useEffect, useState } from 'react';
import './Historico.css';
 
const Historico = () => {
    const [sales, setSales] = useState([]);
 
    useEffect(() => {
        loadSales();
    }, []);
 
    const loadSales = () => {
        const salesData = JSON.parse(localStorage.getItem('sales')) || [];
        setSales(salesData);
    };
 
    // Função para registrar uma venda (caso você queira testar essa funcionalidade)
    const registerSale = (produtoNome, quantidade, valorUnitario, funcionarioId) => {
        const id = Date.now();
        const valorTotal = quantidade * valorUnitario;
        const now = new Date();
        const dataVenda = now.toISOString().split('T')[0];
 
        const newSale = {
            id,
            produto_nome: produtoNome,
            quantidade,
            valor_total: valorTotal,
            data_venda: dataVenda,
            funcionario_id: funcionarioId,
        };
 
        // Adicionar a venda ao LocalStorage
        const currentSales = JSON.parse(localStorage.getItem('sales')) || [];
        currentSales.push(newSale);
        localStorage.setItem('sales', JSON.stringify(currentSales));
        loadSales(); // Atualizar tabela
    };
 
    // Função para limpar todas as vendas
    const clearSales = () => {
        localStorage.removeItem('sales');
        setSales([]); // Atualiza o estado para refletir que não há vendas
    };
 
    // Função para voltar à página anterior
    const handleGoBack = () => {
        window.history.back();
    };
 
    return (
        <div className="container">
            {/* Botão de voltar no topo */}
            <button className="submit-button" onClick={handleGoBack}>Voltar</button>
            <button className="submit-button" onClick={clearSales} style={{ marginLeft: '10px' }}>Apagar Todas as Vendas</button>
           
            <table id="tabela-vendas">
                <thead>
                    <tr>
                        <th>ID da Venda</th>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Valor Total (R$)</th>
                        <th>Data da Venda</th>
                        <th>ID do Funcionário</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.length === 0 ? (
                        <tr>
                            <td colSpan="6" style={{ textAlign: 'center' }}>Nenhuma venda registrada.</td>
                        </tr>
                    ) : (
                        sales.map(sale => (
                            <tr key={sale.id}>
                                <td>{sale.id}</td>
                                <td>{sale.produto_nome}</td>
                                <td>{sale.quantidade}</td>
                                <td>{sale.valor_total.toFixed(2)}</td>
                                <td>{sale.data_venda}</td>
                                <td>{sale.funcionario_id}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};
 
export default Historico;