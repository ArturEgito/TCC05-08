import React from 'react';
import './ForgotPassword.css';

const ForgotPassword = () => {
  const validarFormulario = (event) => {
    event.preventDefault(); // Impede o envio padrão do formulário
    // Aqui você pode adicionar a lógica de validação se necessário
    window.location.href = "entrar.html"; // Substitua pelo caminho da segunda tela
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
              <p>Esqueci a minha Senha - Aluno</p>
            </div>
            <div className="informacao">
              <p>Informe o e-mail da sua conta para enviarmos um e-mail para redefinir a sua senha.</p>
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email:</label><br />
              <input type="email" id="email" placeholder="email@dominio.com" className="form-control" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" />
            </div>
            <button type="submit" id="btn-enviar">Enviar</button>
            <div style={{ marginLeft: '-2px' }}>
              <p>Já possui conta? <a href="contaaluno.html">Entre aqui</a></p>
            </div>
          </form>
          <div id="saida-de-dados" className="m-1 p-2 text-center"></div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
