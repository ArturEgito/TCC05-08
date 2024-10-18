import React, { useState } from 'react';
import './Dinheiro3.css'; // Importando o CSS
 
const Dinheiro3 = () => {
    const [purchases, setPurchases] = useState([]);
    const [product, setProduct] = useState('');
    const [quantity, setQuantity] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('');
 
    const handleAddPurchase = (e) => {
        e.preventDefault();
        if (product && quantity && paymentMethod) {
            setPurchases([...purchases, { product, quantity, paymentMethod }]);
            setProduct('');
            setQuantity('');
            setPaymentMethod('');
        }
    };
 
    const handleBack = () => {
        // Lógica para o botão de voltar
        // Exemplo: redirecionar para outra página ou realizar uma ação
        alert('Voltando para a página anterior');
    };
 
    return (
        <div className="purchase-table-container">
            <button onClick={handleBack} className="back-button">Voltar</button>
            <h2>Registro de Compras</h2>
            <form onSubmit={handleAddPurchase} className="purchase-form">
                <input
                    type="text"
                    placeholder="Produto"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    required
                />
                <input
                    type="number"
                    placeholder="Quantidade"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                />
                <select
                    value={paymentMethod}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    required
                >
                    <option value="">Método de Pagamento</option>
                    <option value="Dinheiro">Dinheiro</option>
                    <option value="Cartão de Crédito">Cartão de Crédito</option>
                    <option value="Cartão de Débito">Cartão de Débito</option>
                    <option value="Pix">Pix</option>
                </select>
                <button type="submit">Adicionar Compra</button>
            </form>
 
            <table className="purchase-table">
                <thead>
                    <tr>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Método de Pagamento</th>
                    </tr>
                </thead>
                <tbody>
                    {purchases.map((purchase, index) => (
                        <tr key={index}>
                            <td>{purchase.product}</td>
                            <td>{purchase.quantity}</td>
                            <td>{purchase.paymentMethod}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
 
export default Dinheiro3;