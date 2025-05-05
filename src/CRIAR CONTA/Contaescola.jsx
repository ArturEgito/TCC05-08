import { useState } from "react";
import './Contaescola.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import InputMask from 'react-input-mask';
import axios from 'axios';

function Contaescola() {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [confirmaSenhaVisivel, setConfirmaSenhaVisivel] = useState(false);
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState({
    logradouro: '',
    bairro: '',
    cidade: '',
    uf: ''
  });
  const navigate = useNavigate();

  const mostrarSenha = () => setSenhaVisivel(!senhaVisivel);
  const mostrarConfirmaSenha = () => setConfirmaSenhaVisivel(!confirmaSenhaVisivel);

  const buscarCep = async (cep) => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (response.data.erro) {
        alert('CEP não encontrado');
        return;
      }
      setEndereco({
        ...endereco,
        logradouro: response.data.logradouro,
        bairro: response.data.bairro,
        cidade: response.data.localidade,
        uf: response.data.uf
      });
    } catch (error) {
      alert('Erro ao buscar CEP');
    }
  };

  const validarFormulario = (e) => {
    e.preventDefault();
    if (senha !== confirmaSenha) {
      alert('As senhas não correspondem. Por favor, digite novamente.');
      return;
    }
    navigate('/Telainicio');
  };

  return (
    <div className="auth-container escola">
      <div className="particles">
        {/* Partículas animadas */}
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.1}s`
            }}
          />
        ))}
      </div>
      
      <div className="glassmorphic-card escola">
        <div className="left-content">
          <div className="hero-section">
            <h1 className="neon-text">FinnTech para Escolas</h1>
            <p className="glow-text">Transformando a cantina escolar</p>
            <div className="animated-illustration escola">
              <div className="school-building">
                {/* SVG animado de uma escola */}
                <svg viewBox="0 0 200 200" className="school-icon">
                  <rect x="50" y="100" width="100" height="60" fill="#6a11cb" />
                  <rect x="70" y="80" width="60" height="20" fill="#2575fc" />
                  <path d="M90 160 L110 160 L100 140" fill="#FFD700" />
                  <circle cx="100" cy="70" r="10" fill="#FF6B6B">
                    <animate 
                      attributeName="r" 
                      values="10;8;10" 
                      dur="1.5s" 
                      repeatCount="indefinite" 
                    />
                  </circle>
                  {/* Livros animados */}
                  <rect x="55" y="110" width="15" height="10" fill="#fff" className="book-animation" />
                  <rect x="75" y="110" width="15" height="10" fill="#fff" className="book-animation" />
                  <rect x="95" y="110" width="15" height="10" fill="#fff" className="book-animation" />
                </svg>
              </div>
              <div className="floating-graph">
                <svg viewBox="0 0 50 50" className="graph-icon">
                  <path 
                    d="M5 35 L15 25 L25 30 L35 15 L45 20" 
                    stroke="#2575fc" 
                    fill="none" 
                    strokeWidth="2"
                  />
                  <circle cx="5" cy="35" r="2" fill="#2575fc" />
                  <circle cx="15" cy="25" r="2" fill="#2575fc" />
                  <circle cx="25" cy="30" r="2" fill="#2575fc" />
                  <circle cx="35" cy="15" r="2" fill="#2575fc" />
                  <circle cx="45" cy="20" r="2" fill="#2575fc" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="right-content">
          <form onSubmit={validarFormulario} className="registration-form escola">
            <div className="botoes-selecao">
              <button
                type="button"
                className="btn-access aluno"
                onClick={() => navigate('/App')}
              >
                Aluno
              </button>
              <button
                type="button"
                className="btn-access escola active"
              >
                Escola
              </button>
            </div>

            <h2 className="form-title">Cadastro Institucional</h2>

            <div className="form-group">
              <input
                type="text"
                placeholder="Nome da Instituição"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                placeholder="Email Institucional"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <InputMask
                mask="99999-999"
                value={cep}
                onBlur={(e) => buscarCep(e.target.value.replace(/-/g, ''))}
                onChange={(e) => setCep(e.target.value)}
              >
                {(inputProps) => (
                  <input
                    {...inputProps}
                    type="text"
                    placeholder="CEP"
                    className="form-input"
                    required
                  />
                )}
              </InputMask>
            </div>

            <div className="address-grid">
              <input
                type="text"
                placeholder="Logradouro"
                value={endereco.logradouro}
                className="form-input"
                required
              />
              <input
                type="text"
                placeholder="Número"
                value={endereco.numero}
                className="form-input"
                required
              />
              <input
                type="text"
                placeholder="Bairro"
                value={endereco.bairro}
                className="form-input"
                required
              />
              <input
                type="text"
                placeholder="Cidade"
                value={endereco.cidade}
                className="form-input"
                required
              />
              <input
                type="text"
                placeholder="UF"
                value={endereco.uf}
                className="form-input"
                required
              />
            </div>

            <div className="password-group">
              <div className="input-with-icon">
                <input
                  type={senhaVisivel ? "text" : "password"}
                  placeholder="Crie sua Senha"
                  className="form-input"
                  required
                />
                <FontAwesomeIcon
                  icon={senhaVisivel ? faEyeSlash : faEye}
                  className="toggle-password"
                  onClick={mostrarSenha}
                />
              </div>
              <div className="input-with-icon">
                <input
                  type={confirmaSenhaVisivel ? "text" : "password"}
                  placeholder="Confirme sua Senha"
                  className="form-input"
                  required
                />
                <FontAwesomeIcon
                  icon={confirmaSenhaVisivel ? faEyeSlash : faEye}
                  className="toggle-password"
                  onClick={mostrarConfirmaSenha}
                />
              </div>
            </div>

            <div className="terms-group">
              <label className="checkbox-container">
                <input type="checkbox" required />
                <span className="checkmark"></span>
                Aceito os <a href="#terms">Termos de Serviço</a>
              </label>
            </div>

            <button type="submit" className="submit-btn pulse">
              Cadastrar Instituição
            </button>

            <div className="auth-links">
              <p>Já possui conta? <Link to="/entraraluno" className="auth-link">Entrar</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contaescola;