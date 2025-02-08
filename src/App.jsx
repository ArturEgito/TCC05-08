import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function App() {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [confirmaSenhaVisivel, setConfirmaSenhaVisivel] = useState(false);
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [selectedSchool, setSelectedSchool] = useState('');

  const escolas = [
    'Escola Municipal de Ensino Fundamental',
    'Colégio Estadual de Educação Profissional',
    'Instituto Federal de Educação Tecnológica',
    'Escola Particular de Excelência',
    'Centro Educacional Comunitário'
  ];

  const mostrarSenha = () => {
    setSenhaVisivel(!senhaVisivel);
  };

  const mostrarConfirmaSenha = () => {
    setConfirmaSenhaVisivel(!confirmaSenhaVisivel);
  };

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

    try {
      const resposta = await fetch('http://localhost:3001/cadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nome: document.getElementById('nome').value,
          email: document.getElementById('email').value,
          escola: selectedSchool,
          senha: senha,
        }),
      });

      const dados = await resposta.json();

      if (!resposta.ok) {
        throw new Error(dados.message || 'Erro no servidor');
      }

      navigate('/telainicial');

    } catch (error) {
      console.error('Erro:', error);
      alert(error.message);
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
              <label>Selecione sua escola:</label>
              {escolas.map((escola, index) => (
                <div className="form-check" key={index}>
                  <input
                    className="form-check-input"
                    type="radio"
                    name="escola"
                    value={escola}
                    id={`escola-${index}`}
                    onChange={handleSchoolChange}
                    checked={selectedSchool === escola}
                    required
                  />
                  <label className="form-check-label" htmlFor={`escola-${index}`}>
                    {escola}
                  </label>
                </div>
              ))}
            </div>
            <div className="mb-3">
              <label htmlFor="senha">Senha:</label>
              <div className="input-group">
                <input
                  type={senhaVisivel ? "text" : "password"}
                  id="senha"
                  placeholder="Digite sua senha."
                  className="form-control"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
                <FontAwesomeIcon
                  icon={senhaVisivel ? faEyeSlash : faEye}
                  className="senha-icon"
                  onClick={mostrarSenha}
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="confirme-sua-senha">Confirme sua senha:</label>
              <div className="input-group">
                <input
                  type={confirmaSenhaVisivel ? "text" : "password"}
                  id="confirme-sua-senha"
                  placeholder="Confirme sua senha."
                  className="form-control"
                  value={confirmaSenha}
                  onChange={(e) => setConfirmaSenha(e.target.value)}
                  required
                />
                <FontAwesomeIcon
                  icon={confirmaSenhaVisivel ? faEyeSlash : faEye}
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
          
          {/* Botões Escola e Aluno movidos para cá */}
          <div className="botoes-acesso-rapido">
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
        </form>
      </div>
    </div>
  );
}

export default App;