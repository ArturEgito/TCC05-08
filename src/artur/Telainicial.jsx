// src/components/Home/Home.js
import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="container">
            <img src="caixa lampada.jpg" alt="Caixa Lâmpada" className="caixaimagem" />
            <img src="escola.png" alt="Escola" className="imagem" />
            <img src="maça.jpg" alt="Maçã" className="maca" />
            <img src="pessoas.jpg" alt="Equipe" className="equipe" />

            <div className="caixa1">
                <p className="texto1">
                    Para que um armazenista
                    <br />gerencie o estoque da
                    <br />escola de forma satisfatória,
                    <br />ele deve ter bons recursos,
                    <br /> como sistemas apropriados,
                    <br />implementados diariamente.
                </p>

                <p className="texto2">
                    Uma escola precisa de
                    <br /> controle de estoque eficaz para evitar problemas e
                    <br /> sobrecargas para todos.
                </p>
            </div>

            <p className="texto3">
                Este trabalho necessita
                <br />de uma equipe inovadora,
                <br /> cada um exercendo com
                <br /> responsabilidade a tarefa
                <br />dada e sempre com a
                <br />comunicação entre eles,
                <br />para que tomem certas decisões.
            </p>

            <div className="texto">
                <p className="ITB">ITB</p>
            </div>
            <div className="texto">
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

            <section></section>
            <footer></footer>

            {/* Links de textos */}
            <a href="#" className="botao-link texto-inicio">Início</a>
            <a href="#" className="botao-link texto-serviços">Histórico</a>
            <a href="#" className="botao-link texto-escolas">Perfil</a>
            <a href="#" className="botao-link texto-carrinho">Pedidos</a>
            <a href="#" className="finntech">FinnTech.</a>
        </div>
    );
};

export default Home;
