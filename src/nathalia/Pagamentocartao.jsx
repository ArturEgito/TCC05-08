import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pagamentocartao.css'; // Certifique-se de que este arquivo CSS exista

const PagamentoCartao = () => {
    return (
        <div className="pagamento-cartao">
            {/* Imagens */}
            <img src="escola - Copia (3).png" className="escola" alt="Escola" />
            <img src="cheetos.png-removebg-preview.png" className="cheetos" alt="Cheetos" />
            <img src="cartao2.png" className="cartao2" alt="Cartão" />

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
                <p className="texto-paginacinza">Garanta que suas <br /> atividades sejam <br /> executadas de forma <br /> ininterrupta</p>
            </div>
            <div className="caixa">
                <p className="texto-paginaazul">mantendo um <br /> controle preciso do <br /> estoque e da <br /> produção.</p>
            </div>

            {/* Texto ITB e BELVAL */}
            <div className="texto">
                <p className="ITB">ITB</p>
                <p className="BELVAL">BELVAL</p>
            </div>

            {/* Círculos */}
            <div className="circulo1"></div>
            <div className="circulo2"></div>
            <div className="circulo3"></div>
            <div className="circulo4"></div>
            <div className="circulo5"></div>
            <div className="circulo6"></div>
            <div className="circulo7"></div>
            <div className="circulo8"></div>
            <div className="circulo9"></div>

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
                    <p className="texto-retireseuproduto">Vá até o balcão de <br /> pagamento mais próximo e <br /> mostre o número de <br /> atendimento, e retire o seu <br /> produto!</p>
                </div>
                <div className="caixapix">
                    <p className="caixapix">PIX</p>
                </div>
                <div className="numero1">
                    <p className="numero1">NUMERO:1</p>
                </div>
                <button className="botao">Formas de Pagamento</button>
            </div>

            {/* Seção e rodapé */}
            <section></section>
            <footer></footer>
        </div>
    );
};

export default PagamentoCartao;
