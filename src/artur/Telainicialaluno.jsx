import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './pagina1.css'; // Certifique-se de que este arquivo CSS exista

const HomePage = () => {
    return (
        <div className="home-page">
            {/* Imagens */}
            <img src="caixa lampada.jpg" className="caixaimagem" alt="Caixa Lampada" />
            <img src="escola.png" className="imagem" alt="Escola" />
            <img src="maça.jpg" className="maca" alt="Maça" />
            <img src="pessoas.jpg" className="equipe" alt="Equipe" />

            {/* Textos */}
            <div className="caixa1">
                <p className="texto1">Para que um armazenista
                    <br />gerencie o estoque da
                    <br />escola de forma satisfatória,
                    <br />ele deve ter bons recursos,
                    <br /> como sistemas apropriados,
                    <br />implementados diariamente.
                </p>
                <p className="texto2">Uma escola precisa de
                    <br /> controle de estoque eficaz para evitar problemas e
                    <br /> sobrecargas para todos.
                </p>
            </div>

            <p className="texto3">Este trabalho necessita
                <br />de uma equipe inovadora,
                <br /> cada um exercendo com
                <br /> responsabilidade a tarefa
                <br />dada e sempre com a
                <br />comunicação entre eles,
                <br />para que tomem certas decisões.
            </p>

            {/* Textos circulares */}
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

            {/* Links de navegação */}
            <nav>
                <a href="#" className="botao-link texto-inicio">Início</a>
                <a href="#" className="botao-link texto-serviços">Carrinho</a>
                <a href="#" className="botao-link texto-escolas">Menu</a>
                <a href="#" className="botao-link texto-carrinho">Perfil</a>
                <a href="#" className="finntech">FinnTech.</a>
            </nav>

            {/* Seção e rodapé */}
            <section className="footer-section"></section>
            <footer className="footer"></footer>
        </div>
    );
};

export default HomePage;
