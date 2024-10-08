import React from 'react';
import './pagina3.css'; // Importando o CSS

const Page3 = () => {
    return (
        <div>
            {/* Imagens */}
            <img src="escola - Copia.png" className="escola" alt="Escola" />
            <img src="ganho.png.png" className="saco-de-dinheiro" alt="Saco de Dinheiro" />
            <img src="ganho.png.png" className="saco-de-dinheiro2" alt="Saco de Dinheiro 2" />
            <img src="sinal de mais.jpg" className="sinal" alt="Sinal de Mais" />
            <img src="sinal de igual.jpg" className="sinal2" alt="Sinal de Igual" />
            <img src="cheetos.png-removebg-preview.png" className="cheetos" alt="Cheetos" />
            <img src="cocacola.png" className="coca" alt="Coca Cola" />

            {/* Textos */}
            <div className="caixa">
                <p className="texto-FinnTech">FinnTech.</p>
            </div>
            <div className="caixa">
                <p className="texto-sobre-nos">Histórico</p>
            </div>
            <div className="caixa">
                <p className="texto-escolas">Perfil</p>
            </div>
            <div className="caixa">
                <p className="texto-carrinho">Pedidos</p>
            </div>
            <div className="texto">
                <p className="ITB">ITB</p>
            </div>
            <div className="texto">
                <p className="BELVAL">BELVAL</p>
            </div>

            {/* Circulos */}
            <div className="circulo1"></div>
            <div className="circulo2"></div>
            <div className="circulo3"></div>
            <div className="circulo4"></div>
            <div className="circulo5"></div>
            <div className="circulo6"></div>
            <div className="circulo7"></div>
            <div className="circulo8"></div>
            <div className="circulo9"></div>
            <div className="caixa"></div>
            <div className="txt"></div>
            <div className="caixa-pequena"></div>
            <div className="caixa-pequena2"></div>

            <section></section>
            <footer></footer>

            {/* Links */}
            <a href="file:///Z:/work/artur/telainicial.html" className="botao-link">
                <div className="caixa">
                    <p className="texto-inicio">Início</p>
                </div>
            </a>
            <a href="file:///Z:/work/artur/historico.html" className="botao-link">
                <div className="caixa">
                    <p className="texto-servicos">Histórico</p>
                </div>
            </a>
            <a href="file:///Z:/work/isaac/paginaEditarPerfil%201.html" className="botao-link">
                <div className="caixa">
                    <p className="texto-escolas">Perfil</p>
                </div>
            </a>
            <a href="" className="botao-link">
                <div className="caixa">
                    <p className="texto-contatos">Pedidos</p>
                </div>
            </a>

            {/* Caixa Grande */}
            <div className="caixa-grande">
                <div className="texto-dinheiro">Dinheiro</div>
                <div className="texto-Opedidovendidoparaestealunocusta">O pedido vendido para este aluno custa R$9,99</div>
                <div className="texto-Opedidovendidoparaestealunocusta1">O pedido vendido para este aluno custa R$3,99</div>

                <div className="nova-caixa pixdoestabelecimento">
                    <div className="pix2">Dinheiro</div>
                    <div className="texto-numero">Numero:</div>
                    <div className="texto-numero2">Numero:</div>
                    <div className="texto-numero3">01</div>
                    <div className="texto-numero4">02</div>
                    <div className="texto-seu-gasto-desse-mes-é">Seu ganho desse mês é:</div>
                    <div className="texto-valor">R$ 13,99</div>

                    <button className="botao-novo-pedido">Pedido</button>
                </div>

                <button className="botao-historico" onClick={() => window.location.href='file:/Z:/work/artur/historico.html'}>Histórico</button>
                <button className="botao-vendas" onClick={() => window.location.href=''}>Vendas</button>
                <button className="botao-orcamento" onClick={() => window.location.href='file:/Z:/work/artur/funcionarios.html'}>Funcionário</button>
            </div>
        </div>
    );
};

export default Page3;
