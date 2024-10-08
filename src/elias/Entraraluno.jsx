import React from 'react';
import Login from './components/Login';

function App() {
    return (
        <div>
            <Login />
        </div>
    );
}

// export default App;

import React from 'react';
import './Login.css';

function Login() {
    const mostrarSenha = () => {
        const senhaInput = document.getElementById("senha");
        const senhaIcon = document.querySelector(".senha-icon");
        if (senhaInput.type === "password") {
            senhaInput.type = "text";
            senhaIcon.classList.remove("fa-eye");
            senhaIcon.classList.add("fa-eye-slash");
        } else {
            senhaInput.type = "password";
            senhaIcon.classList.remove("fa-eye-slash");
            senhaIcon.classList.add("fa-eye");
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Lógica para o login pode ser implementada aqui
        window.location.href = 'file:///Z:/work/artur/telainicialaluno.html'; // Redirecionamento após login
    };

    return (
        <div className="content">
            <div className="left-content">
                <div className="FinnTech"><h3>FinnTech.</h3></div>
                <h1>Bem vindo <br /> de volta!</h1>
            </div>
            <div className="right-content">
                <form onSubmit={handleSubmit}>
                    <div className="crie-conta">
                        <p>Entrar - Aluno</p>
                    </div>
                    <div className="informacao">
                        <p>Coloque seu email cadastrado e sua senha para acessar sua conta.</p>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">Email:</label><br />
                        <input type="email" id="email" placeholder="email@dominio.com" className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="senha">Senha:</label><br />
                        <div className="input-group">
                            <input type="password" id="senha" placeholder="Digite sua senha." className="form-control" required />
                            <i className="senha-icon fas fa-eye" onClick={mostrarSenha}></i>
                        </div>
                    </div>
                    <button type="submit" id="btn-cadastrar">Entrar</button>
                    <div style={{ marginLeft: '2px' }}>
                        <p><a href="recuperarsenha.html">Esqueceu sua senha?</a></p>
                    </div>
                    <div style={{ marginLeft: '2px' }}>
                        <p>Novo por aqui? <a href="contaaluno.html">Cadastre-se</a></p>
                    </div>
                </form>
                <div id="saida-de-dados" className="m-1 p-2 text-center"></div>
            </div>
        </div>
    );
}

export default Login;
