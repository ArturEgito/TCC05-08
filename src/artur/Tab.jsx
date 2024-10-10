import React, { useEffect, useState } from 'react';
import './Tab.css';
 
const Tab = () => {
    const [products, setProducts] = useState([]);
    const [priceTable, setPriceTable] = useState({});
    const [formData, setFormData] = useState({
        produto_nome: '',
        quantidade: '',
        valor_unitario: '',
        tipo_produto: 'Doce',
        funcionario_id: '',
        observacoes: '',
        imagem: null,
    });
    const [priceFormData, setPriceFormData] = useState({
        nome_preco: '',
        preco_unitario: '',
    });
 
    useEffect(() => {
        loadProducts();
        loadPriceTable();
    }, []);
 
    const loadProducts = () => {
        const storedProducts = JSON.parse(localStorage.getItem('products')) || [];
        setProducts(storedProducts);
    };
 
    const loadPriceTable = () => {
        const storedPrices = JSON.parse(localStorage.getItem('priceTable')) || {};
        setPriceTable(storedPrices);
    };
 
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
 
    const handlePriceInputChange = (e) => {
        const { name, value } = e.target;
        setPriceFormData({ ...priceFormData, [name]: value });
    };
 
    const handleImageChange = (e) => {
        setFormData({ ...formData, imagem: e.target.files[0] });
    };
 
    const handleProductSubmit = (e) => {
        e.preventDefault();
        const newProduct = {
            id: products.length + 1,
            ...formData,
            quantidade: parseInt(formData.quantidade),
            valor_unitario: parseFloat(formData.valor_unitario),
            data_adicao: new Date(),
            imagem: URL.createObjectURL(formData.imagem),
        };
 
        const updatedProducts = [...products, newProduct];
        localStorage.setItem('products', JSON.stringify(updatedProducts));
        setProducts(updatedProducts);
        setFormData({
            produto_nome: '',
            quantidade: '',
            valor_unitario: '',
            tipo_produto: 'Doce',
            funcionario_id: '',
            observacoes: '',
            imagem: null,
        });
    };
 
    const handlePriceSubmit = (e) => {
        e.preventDefault();
        const updatedPriceTable = {
            ...priceTable,
            [priceFormData.nome_preco]: parseFloat(priceFormData.preco_unitario),
        };
        localStorage.setItem('priceTable', JSON.stringify(updatedPriceTable));
        setPriceTable(updatedPriceTable);
        setPriceFormData({ nome_preco: '', preco_unitario: '' });
    };
 
    return (
        <div className="container">
            <button className="back-button" onClick={() => window.location.href = 'dinheiro.html'}>Voltar</button>
           
            <h1>Adicionar Produto</h1>
            <form onSubmit={handleProductSubmit}>
                <div className="form-group">
                    <label htmlFor="produto_nome">Nome do Produto:</label>
                    <input type="text" id="produto_nome" name="produto_nome" value={formData.produto_nome} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="quantidade">Quantidade:</label>
                    <input type="number" id="quantidade" name="quantidade" value={formData.quantidade} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="valor_unitario">Valor Unitário (R$):</label>
                    <input type="number" id="valor_unitario" name="valor_unitario" value={formData.valor_unitario} onChange={handleInputChange} step="0.01" required />
                </div>
                <div className="form-group">
                    <label htmlFor="tipo_produto">Tipo do Produto:</label>
                    <select id="tipo_produto" name="tipo_produto" value={formData.tipo_produto} onChange={handleInputChange} required>
                        <option value="Doce">Doce</option>
                        <option value="Bebida">Bebida</option>
                        <option value="Outro">Outro</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="funcionario_id">ID do Funcionário:</label>
                    <input type="number" id="funcionario_id" name="funcionario_id" value={formData.funcionario_id} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="observacoes">Observações:</label>
                    <textarea id="observacoes" name="observacoes" value={formData.observacoes} onChange={handleInputChange}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="imagem">Imagem do Produto:</label>
                    <input type="file" id="imagem" name="imagem" accept="image/*" onChange={handleImageChange} />
                </div>
                <input type="submit" value="Adicionar Produto" />
            </form>
 
            <h1>Lista de Produtos</h1>
            <table id="tabela-produtos">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome do Produto</th>
                        <th>Quantidade</th>
                        <th>Valor Unitário (R$)</th>
                        <th>Tipo de Produto</th>
                        <th>Data de Adição</th>
                        <th>Hora de Adição</th>
                        <th>Funcionário</th>
                        <th>Observações</th>
                        <th>Imagem</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.produto_nome}</td>
                            <td>{product.quantidade}</td>
                            <td>{product.valor_unitario.toFixed(2)}</td>
                            <td>{product.tipo_produto}</td>
                            <td>{new Date(product.data_adicao).toLocaleDateString()}</td>
                            <td>{new Date(product.data_adicao).toLocaleTimeString()}</td>
                            <td>{product.funcionario_id}</td>
                            <td>{product.observacoes}</td>
                            <td><img src={product.imagem} alt={product.produto_nome} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
 
            <h3>Adicionar Produtos à Tabela de Preços Unitários</h3>
            <form onSubmit={handlePriceSubmit}>
                <div className="form-group">
                    <label htmlFor="nome_preco">Nome do Produto:</label>
                    <input type="text" id="nome_preco" name="nome_preco" value={priceFormData.nome_preco} onChange={handlePriceInputChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="preco_unitario">Preço Unitário (R$):</label>
                    <input type="number" id="preco_unitario" name="preco_unitario" value={priceFormData.preco_unitario} onChange={handlePriceInputChange} step="0.01" required />
                </div>
                <input type="submit" value="Adicionar Preço" />
            </form>
 
            <table id="tabela-precos-mini">
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Preço Unitário (R$)</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(priceTable).map(([produto, preco]) => (
                        <tr key={produto}>
                            <td>{produto}</td>
                            <td>{preco.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
 
export default Tab;