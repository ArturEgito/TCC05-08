import React from 'react';
import './Paginaeditarperfil.css';
 
const Paginaeditarperfil = () => {
    const validarFormulario = (event) => {
        event.preventDefault();
        const senha = document.getElementById("senha").value;
        const confirmaSenha = document.getElementById("confirma-senha").value;
 
        if (senha !== confirmaSenha) {
            alert("As senhas não correspondem. Por favor, digite novamente.");
            return false;
        }
        // Aqui você pode adicionar a lógica para enviar o formulário.
    };
 
    return (
        <div className="content">
            <h1>Edite seu perfil!</h1>
            <div className="form-container">
               
                <h2>FinnTech</h2>
                <form onSubmit={validarFormulario} className="d-flex">
                    <div className="form-group">
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome" placeholder="Digite o nome da instituição aqui." className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">E-mail:</label>
                        <input type="email" id="email" placeholder="email@dominio.com" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirma-email">Confirme seu E-mail:</label>
                        <input type="email" id="confirma-email" placeholder="Confirme seu e-mail" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telefone">Telefone:</label>
                        <input type="tel" id="telefone" placeholder="(**)*****.****" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirma-telefone">Confirme seu Telefone:</label>
                        <input type="tel" id="confirma-telefone" placeholder="Confirme seu telefone" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="senha">Senha:</label>
                        <input type="password" id="senha" placeholder="*****" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirma-senha">Confirme sua senha:</label>
                        <input type="password" id="confirma-senha" placeholder="Confirme sua senha" className="form-control" required />
                    </div>
                    <button type="submit" id="btn-editar">Editar</button>
                </form>
                <button id="btn-voltar" onClick={() => window.location.href = '/telainicial'}>Voltar</button>
            </div>
        </div>
    );
};
 
export default Paginaeditarperfil;