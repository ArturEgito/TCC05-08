import { useState } from "react";
import './Contaescola.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';
import UsuarioService from '../services/services/UsuarioService';

function CadastroAluno() {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [confirmaSenhaVisivel, setConfirmaSenhaVisivel] = useState(false);
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const mostrarSenha = () => setSenhaVisivel(!senhaVisivel);
  const mostrarConfirmaSenha = () => setConfirmaSenhaVisivel(!confirmaSenhaVisivel);

  const validarFormulario = async (e) => {
    e.preventDefault();
    if (senha !== confirmaSenha) {
      alert('As senhas não correspondem. Por favor, digite novamente.');
      return;
    }

    try {
      await UsuarioService.signup(nome, email, senha);
      alert('Usuário cadastrado com sucesso!');
      navigate('/entraraluno');
    } catch (error) {
      alert('Erro ao cadastrar usuário: ' + (error.response?.data?.message || error.message));
    }
  };

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
          <div className="food-access-buttons">
            <button
              type="button"
              className="food-access-btn active"
            >
              Cadastro Aluno
            </button>
            <button
              type="button"
              className="food-access-btn"
              onClick={() => navigate('/contaescola')}
            >
              Cadastro Escola
            </button>
          </div>

          <h2>Criar Conta</h2>

          <div className="food-input-group">
            <input
              type="text"
              placeholder="Nome Completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
            <span className="input-icon">👤</span>
          </div>

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

          <div className="food-input-group">
            <input
              type={confirmaSenhaVisivel ? "text" : "password"}
              placeholder="Confirme sua Senha"
              value={confirmaSenha}
              onChange={(e) => setConfirmaSenha(e.target.value)}
              required
            />
            <span className="input-icon">
              <FontAwesomeIcon
                icon={confirmaSenhaVisivel ? faEyeSlash : faEye}
                onClick={mostrarConfirmaSenha}
              />
            </span>
          </div>

          <div className="food-options">
            <label className="food-check">
              <input type="checkbox" required />
              <span className="checkmark"></span>
              Aceito os Termos de Serviço
            </label>
          </div>

          <button type="submit" className="food-btn-primary">
            Criar Conta
            <span className="btn-icon">🚀</span>
          </button>

          <div className="food-footer">
            <p>Já possui conta? <Link to="/entraraluno" className="food-link">Entrar</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CadastroAluno;