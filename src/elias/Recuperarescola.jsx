import React from 'react';
import './ForgotPasswordSchool.css';

const ForgotPasswordSchool = () => {
  const validarFormulario = (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário
    // Aqui você pode adicionar a lógica de validação se necessário
    window.location.href = "entrar.html"; // Redireciona para a tela de login
  };

  return (
    <div className="container">
      <div className="content">
        <div className="left-content">
          <div className="FinnTech">
            <h3>FinnTech.</h3>
          </div>
          <h1>Bem vindo</h1>
          <h1>de volta!</h1>
        </div>
        <div className="right-content">
          <form onSubmit={validarFormulario}>
            <div className="minha-senha">
              <p>Esqueci a minha Senha - Escola</p>
            </div>
            <div className="informacao">
              <p>Informe o e-mail da sua conta para enviarmos um e-mail para redefinir a sua senha.</p>
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email:</label><br />
              <input 
                type="email" 
                id="email" 
                placeholder="email@dominio.com" 
                className="form-control" 
                required 
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" 
              />
            </div>
            <button type="submit" id="btn-enviar">Enviar</button>
            <div style={{ marginLeft: '-2px' }}>
              <p>Já possui conta? <a href="contaescola.html">Entre aqui</a></p>
            </div>
          </form>
          <div id="saida-de-dados" className="m-1 p-2 text-center"></div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordSchool;
