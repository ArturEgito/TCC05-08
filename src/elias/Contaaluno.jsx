import React from 'react';
import ReactDOM from 'react-dom';
import Contaaluno from './Contaaluno';
import React from 'react';
import './Cadastro.css'; // Importando o CSS

const Contaaluno = () => (
  <div>
    <Cadastro />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));


const Cadastro = () => {
  const mostrarSenha = (id) => {
    const input = document.getElementById(id);
    const icon = document.querySelector(`.${id}-icon`);
    if (input.type === "password") {
      input.type = "text";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    } else {
      input.type = "password";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    }
  };

  const validarFormulario = (event) => {
    event.preventDefault();
    const senha = document.getElementById("senha").value;
    const confirmaSenha = document.getElementById("confirme-sua-senha").value;

    if (senha !== confirmaSenha) {
      alert("As senhas não correspondem. Por favor, digite novamente.");
      return false;
    }

    // Aqui você pode adicionar a lógica para enviar os dados do formulário.
    alert("Cadastro realizado com sucesso!");
    return true;
  };

  return (
    <div className="content">
      <div className="left-content">
        <div className="FinnTech">
          <h3>FinnTech.</h3>
        </div>
        <h1>Você está<br />começando a sua jornada!</h1>
        <h5>Sente-se e aproveite este<br />momento de tranquilidade</h5>
      </div>
      <div className="right-content">
        <form onSubmit={validarFormulario}>
          <div>
            <button type="button" className="btn btn-primary btn-aluno">Aluno</button>
            <button type="button" className="btn btn-primary btn-escola" onClick={() => window.location.href='contaescola.html'}>Escola</button>
          </div>
          <div className="crie-conta">
            <p>Crie uma conta no FinnTech.</p>
          </div>
          <div className="container">
            <div className="mb-3">
              <label htmlFor="nome">Nome completo:</label><br />
              <input type="text" id="nome" placeholder="Digite seu nome aqui." className="form-control" pattern="[A-Za-zÀ-ú\s]+" title="Por favor, digite apenas letras" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email:</label><br />
              <input type="email" id="email" placeholder="email@dominio.com" className="form-control" required pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" />
            </div>
            <div className="mb-3">
              <label htmlFor="telefone">Telefone:</label><br />
              <input type="text" id="telefone" placeholder="(11) 99999-9999" className="form-control" pattern="[0-9]{11}" title="Por favor, digite exatamente 11 números" />
            </div>
            <div className="mb-3">
              <label htmlFor="senha">Senha:</label><br />
              <div className="input-group">
                <input type="password" id="senha" placeholder="Digite sua senha." className="form-control" required />
                <i className="senha-icon fas fa-eye" onClick={() => mostrarSenha("senha")}></i>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="confirme-sua-senha">Confirme sua senha:</label><br />
              <div className="input-group">
                <input type="password" id="confirme-sua-senha" placeholder="Confirme sua senha." className="form-control" required />
                <i className="confirma-senha-icon fas fa-eye" onClick={() => mostrarSenha("confirme-sua-senha")}></i>
              </div>
            </div>
            <div className="form-check">
              <input type="checkbox" className="form-check-input" id="termos-e-condicoes" required />
              <label className="form-check-label" htmlFor="termos-e-condicoes">Eu concordo com os termos e condições</label>
            </div>
            <button type="submit" id="btn-cadastrar" className="btn btn-primary">Cadastrar</button>
          </div>
          <div></div>
          <div style={{ marginLeft: '15px' }}>
            <p>Já possui conta? <a href="file:///Z:/work/elias/entraraluno.html">Entre aqui</a></p>
          </div>
        </form>
        <div id="saida-de-dados" className="m-1 p-2 text-center"></div>
      </div>
    </div>
  );
};

export default Cadastro;
