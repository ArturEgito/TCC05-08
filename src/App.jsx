import { useState } from'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from'react-router-dom';
import { Link } from'react-router-dom';

function App() {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [confirmaSenhaVisivel, setConfirmaSenhaVisivel] = useState(false);
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const navigate = useNavigate();

  const mostrarSenha = () => {
    setSenhaVisivel(!senhaVisivel);
  };

  const mostrarConfirmaSenha = () => {
    setConfirmaSenhaVisivel(!confirmaSenhaVisivel);
  };

  const validarFormulario = async (e) => {
    e.preventDefault();
    if (senha!== confirmaSenha) {
      alert('As senhas não correspondem. Por favor, digite novamente.');
      return false;
    }

    try {
      const resposta = await fetch('http://localhost:3001/cadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: document.getElementById('nome').value,
          email: document.getElementById('email').value,
          telefone: document.getElementById('telefone').value,
          senha: senha, 
        }),
      });

      const dados = await resposta.json();
      if (dados.message) {
        alert(dados.message);
        // Redirecionamento para a tela de início
        navigate('/telainicial');
      }
    } catch (error) {
      console.error('Erro ao enviar dados:', error);
    }
  };

  return (
    <div className="container content">
      <div className="left-content">
        <div className="FinnTech">
        </div>
        <h1>Você está começando a sua jornada!</h1>
        <h5>Sente-se e aproveite este momento de tranquilidade</h5>
      </div>
      <div className="right-content">
        <form onSubmit={validarFormulario}>
          <div>
            <button
              type="button"
              className="btn btn-primary btn-aluno"
              onClick={() => navigate('/tab')}
            >
              Aluno
            </button>
            <button
              type="button"
              className="btn btn-primary btn-escola"
              onClick={() => navigate('/contaescola')}
            >
              Escola
            </button>
          </div>
          <div className="crie-conta">
            <p>Crie uma conta no FinnTech.</p>
          </div>
          <div className="container">
            <div className="mb-3">
              <label htmlFor="nome">Nome completo:</label>
              <input
                type="text"
                id="nome"
                placeholder="Digite seu nome aqui."
                className="form-control"
                pattern="[A-Za-zÀ-ú\s]+"
                title="Por favor, digite apenas letras"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="email@dominio.com"
                className="form-control"
                required
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="telefone">Telefone:</label>
              <input
                type="text"
                id="telefone"
                placeholder="(11) 99999-9999"
                className="form-control"
                pattern="[0-9]{11}"
                title="Por favor, digite exatamente 11 números"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="senha">Senha:</label>
              <div className="input-group">
                <input
                  type={senhaVisivel? "text" : "password"}
                  id="senha"
                  placeholder="Digite sua senha."
                  className="form-control"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
                <FontAwesomeIcon
                  icon={senhaVisivel? faEyeSlash : faEye}
                  className="senha-icon"
                  onClick={mostrarSenha}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="confirme-sua-senha">Confirme sua senha:</label>
              <div className="input-group">
                <input
                  type={confirmaSenhaVisivel? "text" : "password"}
                  id="confirme-sua-senha"
                  placeholder="Confirme sua senha."
                  className="form-control"
                  value={confirmaSenha}
                  onChange={(e) => setConfirmaSenha(e.target.value)}
                  required
                />
                <FontAwesomeIcon
                  icon={confirmaSenhaVisivel? faEyeSlash : faEye}
                  className="confirma-senha-icon"
                  onClick={mostrarConfirmaSenha}
                />
              </div>
            </div>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="termos-e-condicoes"
                required
              />
              <label
                className="form-check-label"
                htmlFor="termos-e-condicoes"
              >
                Eu concordo com os termos e condições
              </label>
            </div>
            <button type="submit" id="btn-cadastrar">
              Cadastrar
            </button>
          </div>
          <div style={{ marginLeft: '15px' }}>
            <p>
              Já possui conta? 
              <Link to="/entraraluno">Entre aqui</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;