import React, { useState } from 'react';
import './App.css'; // Assume your styles are in App.css

const App = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);

    const mostrarSenhaHandler = () => {
        setMostrarSenha(!mostrarSenha);
    };

    const validarFormulario = (e) => {
        e.preventDefault();
        // Add your form validation logic here
        alert('Form submitted'); // Replace with actual submission logic
    };

    return (
        <div className="container">
            <div className="content">
                <div className="left-content">
                    <h3 className="FinnTech">FinnTech.</h3>
                    <h1>Bem vindo <br /> de volta!</h1>
                </div>
                <div className="right-content">
                    <form onSubmit={validarFormulario}>
                        <div className="crie-conta">
                            <p>Entrar - Escola</p>
                        </div>
                        <div className="informacao">
                            <p>Coloque seu email cadastrado e sua senha para acessar sua conta.</p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Email:</label><br />
                            <input
                                type="email"
                                id="email"
                                placeholder="email@dominio.com"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="senha">Senha:</label><br />
                            <div className="input-group">
                                <input
                                    type={mostrarSenha ? 'text' : 'password'}
                                    id="senha"
                                    placeholder="Digite sua senha."
                                    className="form-control"
                                    value={senha}
                                    onChange={(e) => setSenha(e.target.value)}
                                    required
                                />
                                <i className={`senha-icon fas ${mostrarSenha ? 'fa-eye-slash' : 'fa-eye'}`} onClick={mostrarSenhaHandler}></i>
                            </div>
                        </div>
                        <button type="submit" id="btn-cadastrar">Entrar</button>
                        <div style={{ marginLeft: '2px' }}>
                            <p><a href="recuperarsenha.html">Esqueceu sua senha?</a></p>
                        </div>
                        <div style={{ marginLeft: '2px' }}>
                            <p>Novo por aqui? <a href="file:///Z:/work/elias/recuperarescola.html">Cadastre-se</a></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default App;
