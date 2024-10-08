import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <img src="escola - Copia (2).png" alt="Escola" className="escola" />
            <img src="cheetos.png-removebg-preview.png" alt="Cheetos" className="cheetos" />
            <img src="dollyinho-removebg-preview.png" alt="Dolly" className="cheetos2" />

            <div className="caixa">
                <p className="texto-FinnTech">FinnTech.</p>
            </div>

            <div className="circulo1"></div>
            <div className="circulo2"></div>
            <div className="circulo3"></div>
            <div className="circulo4"></div>
            <div className="circulo5"></div>
            <div className="circulo6"></div>
            <div className="circulo7"></div>
            <div className="circulo8"></div>
            <div className="circulo9"></div>

            <section></section>
            <footer></footer>

            <a href="file:/Z:/work/artur/telainicial.html" className="botao-link">
                <div className="caixa">
                    <p className="texto-inicio">Início</p>
                </div>
            </a>

            <div className="caixa-grande">
                <div className="texto-cheetos">CHEETOS</div>
                <div className="texto-preco">R$ 9,99</div>
                <h1>125 gramas</h1>
                <button className="botao" onClick={() => window.location.href='file:///Z:/work/murilo/carrinho.html'}>Compre já</button>
            </div>

            <div className="caixa-grande2">
                <div className="texto-cheetos2">DOLLY</div>
                <div className="texto-preco2">R$ 3,00</div>
                <h2>350 ml</h2>
                <button className="botao2" onClick={() => window.location.href='file:///Z:/work/murilo/carrinho.html'}>Compre já</button>
            </div>
        </div>
    );
}

export default App;
