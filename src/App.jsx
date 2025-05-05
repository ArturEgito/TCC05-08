import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [confirmaSenhaVisivel, setConfirmaSenhaVisivel] = useState(false);
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [selectedSchool, setSelectedSchool] = useState('');
  const navigate = useNavigate();

  const escolas = [
    'Escola Municipal de Ensino Fundamental',
  ];

  const mostrarSenha = () => setSenhaVisivel(!senhaVisivel);
  const mostrarConfirmaSenha = () => setConfirmaSenhaVisivel(!confirmaSenhaVisivel);

  const handleSchoolChange = (event) => {
    setSelectedSchool(event.target.value);
  };

  const validarFormulario = async (e) => {
    e.preventDefault();
  
    if (senha !== confirmaSenha) {
      alert('As senhas não correspondem. Por favor, digite novamente.');
      return;
    }
  
    if (!selectedSchool) {
      alert('Por favor, selecione uma escola.');
      return;
    }
  
    // Redirecionamento direto para teste
    navigate('/telainicial');
  };
  

  return (
    <div className="auth-container">
      <div className="glassmorphic-card">
        <div className="left-content">
          <div className="hero-section">
            <h1 className="neon-text">Bem-vindo ao FinnTech</h1>
            <p className="glow-text">Sua Cantina online</p>
            <div className="animated-illustration">
            <div className="animated-illustration">
  <div className="finance-student">
    <svg viewBox="0 0 200 200" className="student">
      {/* Cabeça */}
      <circle cx="100" cy="80" r="20" fill="#FFDFC4" />
      {/* Corpo */}
      <path d="M100 100 Q 100 150 80 180 L 120 180 Q 100 150 100 100" fill="#6a11cb" />
      {/* Braços */}
      <path d="M60 110 Q 40 130 60 150 L 60 130" fill="#6a11cb" />
      <path d="M140 110 Q 160 130 140 150 L 140 130" fill="#6a11cb" />
      {/* Livro */}
      <rect x="85" y="120" width="30" height="20" fill="#fff" />
      <path d="M85 120 L 115 120 L 115 140 L 85 140" fill="none" stroke="#333" strokeWidth="2" />
      {/* Gráfico */}
      <g className="chart" transform="translate(140 60)">
        <path d="M0 0 L10 15 L20 5 L30 20" stroke="#2575fc" fill="none" strokeWidth="2" />
        <circle cx="0" cy="0" r="2" fill="#2575fc" />
        <circle cx="10" cy="15" r="2" fill="#2575fc" />
        <circle cx="20" cy="5" r="2" fill="#2575fc" />
        <circle cx="30" cy="20" r="2" fill="#2575fc" />
      </g>
      {/* Moedas animadas */}
      <g className="coins">
        <circle cx="40" cy="60" r="5" fill="#FFD700">
          <animate attributeName="cy" values="60;55;60" dur="1.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="160" cy="70" r="5" fill="#C0C0C0">
          <animate attributeName="cy" values="70;65;70" dur="1.8s" repeatCount="indefinite" />
        </circle>
      </g>
    </svg>
  </div>
  <div className="shimmer"></div>
</div>
            </div>
          </div>
        </div>

        <div className="right-content">
          <form onSubmit={validarFormulario} className="registration-form">
            <h2 className="form-title">Criar Nova Conta</h2>

            <div className="form-group">
              <label>Nome Completo</label>
              <input
                type="text"
                className="form-input"
                placeholder="Ex: Maria Silva"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
                pattern="[A-Za-zÀ-ú\s]+"
              />
            </div>

            <div className="form-group">
              <label>Endereço de Email</label>
              <input
                type="email"
                className="form-input"
                placeholder="Ex: maria@escola.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
              />
            </div>

            <div className="form-group">
              <label>Instituição de Ensino</label>
              <div className="school-grid">
                {escolas.map((escola, index) => (
                  <label className={`school-card ${selectedSchool === escola ? 'selected' : ''}`} key={index}>
                    <input
                      type="radio"
                      name="escola"
                      value={escola}
                      onChange={handleSchoolChange}
                      checked={selectedSchool === escola}
                      required
                    />
                    <div className="school-content">
                      <span className="school-name">{escola}</span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            <div className="form-group password-group">
              <label>Crie sua Senha</label>
              <div className="input-with-icon">
                <input
                  type={senhaVisivel ? "text" : "password"}
                  className="form-input"
                  placeholder="Mínimo 8 caracteres"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
                <FontAwesomeIcon
                  icon={senhaVisivel ? faEyeSlash : faEye}
                  className="toggle-password"
                  onClick={mostrarSenha}
                />
              </div>
              <div className="password-strength">
                <div className="strength-bar" style={{ width: `${(senha.length * 10)}%` }}></div>
              </div>
            </div>

            <div className="form-group">
              <label>Confirme sua Senha</label>
              <div className="input-with-icon">
                <input
                  type={confirmaSenhaVisivel ? "text" : "password"}
                  className="form-input"
                  placeholder="Digite novamente sua senha"
                  value={confirmaSenha}
                  onChange={(e) => setConfirmaSenha(e.target.value)}
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
                Concordo com os <a href="#terms">Termos de Serviço</a>
              </label>
            </div>

            <button type="submit" className="submit-btn">
              Criar Conta
            </button>

            <div className="auth-links">
              <p>Já tem uma conta? <Link to="/entraraluno" className="auth-link">Entrar</Link></p>
              <div className="quick-access">
                <button
                  type="button"
                  className="access-btn aluno"
                  onClick={() => navigate('/tab')}
                >
                  Acesso Aluno
                </button>
                <button
                  type="button"
                  className="access-btn escola"
                  onClick={() => navigate('/contaescola')}
                >
                  Acesso Escola
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;