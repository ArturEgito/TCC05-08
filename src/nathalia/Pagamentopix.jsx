import React from 'react';
import './pagamentodinheiro.css'; // Importa o CSS

const PagamentoDinheiro = () => {
    return (
        <div className="pagamento-dinheiro">
            {/* Imagens */}
            <img src="escola - Copia (3).png" alt="Escola" className="escola" />
            <img src="cheetos.png-removebg-preview.png" alt="Cheetos" className="cheetos" />
            <img src="dinheiro.png" alt="Dinheiro" className="dinheiro" />

            {/* Textos */}
            <div className="caixa">
                <p className="texto-FinnTech">FinnTech.</p>
            </div>
            <div className="caixa">
                <p className="texto-sobre-nos">Sobre-nós</p>
            </div>
            <div className="caixa">
                <p className="texto-escolas">Escolas</p>
            </div>
            <div className="caixa">
                <p className="texto-carrinho">Carrinho</p>
            </div>
            <div className="caixa">
                <p className="texto-paginacinza">
                    Garanta que suas <br /> atividades sejam <br /> executadas de forma <br /> ininterrupta
                </p>
            </div>
            <div className="caixa">
                <p className="texto-paginaazul">
                    mantendo um <br /> controle preciso do <br /> estoque e da <br /> produção.
                </p>
            </div>

            <div className="texto">
                <p className="ITB">ITB</p>
            </div>
            <div className="texto">
                <p className="BELVAL">BELVAL</p>
            </div>

            {/* Círculos */}
            {[...Array(9)].map((_, index) => (
                <div key={index} className={`circulo${index + 1}`}></div>
            ))}

            {/* Links de navegação */}
            <a href="#" className="botao-link">
                <div className="caixa">
                    <p className="texto-inicio">Início</p>
                </div>
            </a>
            <a href="#" className="botao-link">
                <div className="caixa">
                    <p className="texto-serviços">Sobre-nós</p>
                </div>
            </a>
            <a href="#" className="botao-link">
                <div className="caixa">
                    <p className="texto-escolas">Escolas</p>
                </div>
            </a>
            <a href="#" className="botao-link">
                <div className="caixa">
                    <p className="texto-carrinho">Carrinho</p>
                </div>
            </a>

            {/* Caixa Grande */}
            <div className="caixa-grande">
                <div className="texto-cheetos">Cheetos</div>
                <div className="texto-preco">R$ 9,99</div>
                <div className="caixa-pequena"></div>
                <div className="nova-caixa pixdoestabelecimento">
                    <p className="texto-retireseuproduto">
                        Vá até o balcão de <br /> pagamento mais próximo e <br />
                        mostre o número de <br /> atendimento, e retire o seu <br /> produto!
                    </p>
                </div>

                <div className="caixadinheiro">
                    <p className="caixadinheiro">DINHEIRO</p>
                </div>
                <div className="numero1">
                    <p className="numero1">NUMERO: 1</p>
                </div>

                {/* Botão "Formas de Pagamento" */}
                <button className="botao">Formas de Pagamento</button>
            </div>
        </div>
    );
};

export default PagamentoDinheiro;
