import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pagamentopix.css'; // Certifique-se de que este arquivo CSS exista
 
const Pagamentopix = () => {
    return (
        <div className="pagamento-cartao">
            {/* Links de navegação */}
            <div className="botao-container">
                <a href="#" className="botao-link">
                    <div className="caixa">
                        <p className="texto-inicio">Início</p>
                    </div>
                </a>
                <a href="#" className="botao-link">
                    <div className="caixa">
                        <p className="texto-menu">Menu</p>
                    </div>
                </a>
                <a href="#" className="botao-link">
                    <div className="caixa">
                        <p className="texto-carrinho">Carrinho</p>
                    </div>
                </a>
                <a href="#" className="botao-link">
                    <div className="caixa">
                        <p className="texto-perfil">Perfil</p>
                    </div>
                </a>
            </div>
 
            {/* Caixa Grande */}
            <div className="caixa-grande">
                <div className="texto-cheetos">Cheetos</div>
                <div className="texto-preco">R$ 9,99</div>
                <div className="nova-caixa">
                    <p className="texto-retireseuproduto">
                        Vá até o balcão de <br /> pagamento mais próximo e <br />
                        mostre o número de <br /> atendimento, e retire o seu <br />
                        produto!
                    </p>
                </div>
                <div className="caixapix">
                    <p className="caixapix">PIX</p>
                </div>
                <div className="numero1">
                    <p className="numero1">NÚMERO: 1</p>
                </div>
            </div>
        </div>
    );
};
 
export default Pagamentopix;