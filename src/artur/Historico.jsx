// src/components/SalesHistory/SalesHistory.js
import React, { useEffect, useState } from 'react';
import './SalesHistory.css';

const SalesHistory = () => {
    const [sales, setSales] = useState([]);

    useEffect(() => {
        loadSales();
        // Exemplo de como registrar uma venda (substitua pela lógica real)
        registerSale('Bolo de Chocolate', 2, 15.00, 101);
    }, []);

    const loadSales = () => {
        const salesData = JSON.parse(localStorage.getItem('sales')) || [];
        setSales(salesData);
    };

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

    return (
        <div className="container">
            <h1>Histórico de Vendas</h1>
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
                    {sales.map(sale => (
                        <tr key={sale.id}>
                            <td>{sale.id}</td>
                            <td>{sale.produto_nome}</td>
                            <td>{sale.quantidade}</td>
                            <td>{sale.valor_total.toFixed(2)}</td>
                            <td>{sale.data_venda}</td>
                            <td>{sale.funcionario_id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SalesHistory;
