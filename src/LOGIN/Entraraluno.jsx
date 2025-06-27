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
    <div className="food-app-container">
      <div className="food-background">
        <div className="food-bubbles"></div>
        <div className="food-stripes"></div>
      </div>
      
      <div className="food-main-card">
        <div className="food-brand-header">
          <div className="food-logo">
            <span className="food-icon">🍔</span>
            <h1>FinnFood</h1>
          </div>
          <p>Sua Cantina Delivery</p>
        </div>

        <form onSubmit={validarFormulario} className="food-login-form">
          <h2>Login</h2>
          
          <div className="food-input-group">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className="input-icon">✉️</span>
          </div>

          <div className="food-input-group">
            <input
              type={senhaVisivel ? "text" : "password"}
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
            <span className="input-icon">
              <FontAwesomeIcon
                icon={senhaVisivel ? faEyeSlash : faEye}
                onClick={mostrarSenha}
              />
            </span>
          </div>

          <div className="food-options">
            <label className="food-check">
              <input type="checkbox" required />
              <span className="checkmark"></span>
              Li e aceito os termos de uso
            </label>
            <a href="/esqueceu" className="food-link">Esqueceu a senha?</a>
          </div>

          <button type="submit" className="food-btn-primary">
            Entrar
            <span className="btn-icon">🚀</span>
          </button>

          <button className="food-btn-ghost" onClick={voltarParaApp}>
            Voltar para o início
          </button>
        </form>

        <div className="food-footer">
          <p>Não tem conta? <a href="#signup">Cadastre-se</a></p>
          <div className="food-social">
            <span>📱</span>
            <span>📧</span>
            <span>🔒</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Entraraluno;