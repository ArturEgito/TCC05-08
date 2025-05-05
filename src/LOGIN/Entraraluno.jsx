import { useState } from 'react';
import './Entraraluno.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Entraraluno() {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const mostrarSenha = () => setSenhaVisivel(!senhaVisivel);

  const validarFormulario = (e) => {
    e.preventDefault();
    if (!email || !senha) {
      alert('Por favor, preencha ambos os campos!');
      return;
    }
    navigate('/telainicial');
  };

  const voltarParaApp = () => navigate('/');

  return (
    <div className="bk-auth-container">
      <div className="bk-flame-background"></div>
      
      <div className="bk-glass-container">
        <div className="bk-left-content">
          <div className="bk-flame-logo">
            <div className="flame"></div>
            <div className="flame"></div>
            <div className="flame"></div>
            <h1>FinnTech</h1>
          </div>
          <h2>Sua Cantina Online</h2>
          <button className="bk-btn-voltar" onClick={voltarParaApp}>
            Voltar
          </button>
        </div>

        <div className="bk-right-content">
          <form onSubmit={validarFormulario} className="bk-login-form">
            <div className="bk-form-header">
              <h3>Fazer login na sua Conta</h3>
              <div className="flame-divider"></div>
            </div>

            <div className="bk-input-group">
              <input
                type="email"
                placeholder="emaildigue@FLAME.COM"
                className="bk-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <div className="input-flame"></div>
            </div>

            <div className="bk-input-group">
              <input
                type={senhaVisivel ? "text" : "password"}
                placeholder="CARDIGUE"
                className="bk-input"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
              <FontAwesomeIcon
                icon={senhaVisivel ? faEyeSlash : faEye}
                className="bk-eye-icon"
                onClick={mostrarSenha}
              />
              <div className="input-flame"></div>
            </div>

            <div className="bk-terms">
              <label className="bk-checkbox">
                <input type="checkbox" required />
                <span className="bk-checkmark"></span>
                Aceitar os <a href="#terms"> Termos</a>
              </label>
            </div>

            <button type="submit" className="bk-login-btn">
              IGNITE LOGIN
              <div className="btn-flames">
                <div className="mini-flame"></div>
                <div className="mini-flame"></div>
                <div className="mini-flame"></div>
              </div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Entraraluno;