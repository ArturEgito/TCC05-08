import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pagina2dinheiro.css'; // Certifique-se de que este arquivo CSS exista
 
const Pagina2dinheiro = () => {
    return (
        <div className="pagamento-dinheiro">
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
                <div className="caixadinheiro">
                    <p className="caixacdinheiro">Dinheiro</p>
                </div>
                <div className="numero3">
                    <p className="numero3">NÚMERO: 3</p>
                </div>
            </div>
        </div>
    );
};
 
export default Pagina2dinheiro;