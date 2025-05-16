import { useState, useEffect } from 'react';
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
  const [escolas, setEscolas] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const escolasSalvas = JSON.parse(localStorage.getItem('escolas')) || [];
    const escolasFormatadas = escolasSalvas.map(escola => ({
      nome: escola.nome,
      cidade: escola.endereco.cidade,
      uf: escola.endereco.uf
    }));
    setEscolas([
      { nome: 'Escola Municipal de Ensino Fundamental', cidade: 'São Paulo', uf: 'SP' },
      ...escolasFormatadas
    ]);
  }, []);

  const mostrarSenha = () => setSenhaVisivel(!senhaVisivel);
  const mostrarConfirmaSenha = () => setConfirmaSenhaVisivel(!confirmaSenhaVisivel);

  const handleSchoolChange = (event) => {
    setSelectedSchool(event.target.value);
  };

  const validarFormulario = (e) => {
    e.preventDefault();
  
    if (senha !== confirmaSenha) {
      alert('As senhas não correspondem. Por favor, digite novamente.');
      return;
    }
  
    if (!selectedSchool) {
      alert('Por favor, selecione uma escola.');
      return;
    }

    const novoAluno = {
      nome,
      email,
      escola: selectedSchool,
      dataCadastro: new Date().toISOString()
    };

    const alunosSalvos = JSON.parse(localStorage.getItem('alunos')) || [];
    localStorage.setItem('alunos', JSON.stringify([...alunosSalvos, novoAluno]));
  
    navigate('/telainicial');
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
          <h2>Criar Nova Conta</h2>

          <div className="food-input-group">
            <input
              type="text"
              placeholder="Nome Completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
              pattern="[A-Za-zÀ-ú\s]+"
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
            <select 
              className="food-select"
              value={selectedSchool} 
              onChange={handleSchoolChange}
              required
            >
              <option value="">Selecione sua escola</option>
              {escolas.map((escola, index) => (
                <option key={index} value={escola.nome}>
                  {escola.nome} - {escola.cidade}/{escola.uf}
                </option>
              ))}
            </select>
            <span className="input-icon">🏫</span>
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
              Concordo com os Termos de Serviço
            </label>
          </div>

          <button type="submit" className="food-btn-primary">
            Criar Conta
            <span className="btn-icon">🚀</span>
          </button>

          <div className="food-footer">
            <p>Já tem conta? <Link to="/entraraluno" className="food-link">Entrar</Link></p>
            <div className="food-social">
              <button 
                type="button"
                className="food-access-btn"
                onClick={() => navigate('/tab')}
              >
                Acesso Aluno
              </button>
              <button
                type="button"
                className="food-access-btn"
                onClick={() => navigate('/contaescola')}
              >
                Acesso Escola
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;