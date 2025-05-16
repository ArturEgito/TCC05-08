import { useState } from "react";
import './Contaescola.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, Link } from 'react-router-dom';
import InputMask from 'react-input-mask';
import axios from 'axios';

function Contaescola() {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [confirmaSenhaVisivel, setConfirmaSenhaVisivel] = useState(false);
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [cep, setCep] = useState('');
  const [nomeInstituicao, setNomeInstituicao] = useState('');
  const [emailInstitucional, setEmailInstitucional] = useState('');
  const [endereco, setEndereco] = useState({
    logradouro: '',
    numero: '',
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

    const novaEscola = {
      nome: nomeInstituicao,
      email: emailInstitucional,
      cep,
      endereco: {
        ...endereco,
        numero: endereco.numero
      },
      dataCadastro: new Date().toISOString()
    };

    const escolasSalvas = JSON.parse(localStorage.getItem('escolas')) || [];
    escolasSalvas.push(novaEscola);
    localStorage.setItem('escolas', JSON.stringify(escolasSalvas));

    navigate('/Telainicio');
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
            <span className="food-icon">🏫</span>
            <h1>FinnEscola</h1>
          </div>
          <p>Gestão de Cantina Escolar</p>
        </div>

        <form onSubmit={validarFormulario} className="food-login-form">
          <div className="food-access-buttons">
            <button
              type="button"
              className="food-access-btn"
              onClick={() => navigate('/App')}
            >
              Acesso Aluno
            </button>
            <button
              type="button"
              className="food-access-btn active"
            >
              Acesso Escola
            </button>
          </div>

          <h2>Cadastro Institucional</h2>

          <div className="food-input-group">
            <input
              type="text"
              placeholder="Nome da Instituição"
              value={nomeInstituicao}
              onChange={(e) => setNomeInstituicao(e.target.value)}
              required
            />
            <span className="input-icon">🏛️</span>
          </div>

          <div className="food-input-group">
            <input
              type="email"
              placeholder="Email Institucional"
              value={emailInstitucional}
              onChange={(e) => setEmailInstitucional(e.target.value)}
              required
            />
            <span className="input-icon">✉️</span>
          </div>

          <div className="food-input-group">
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
                  required
                />
              )}
            </InputMask>
            <span className="input-icon">📍</span>
          </div>

          <div className="food-address-grid">
            <input
              type="text"
              placeholder="Logradouro"
              value={endereco.logradouro}
              required
              readOnly
            />
            <input
              type="text"
              placeholder="Número"
              value={endereco.numero}
              onChange={(e) => setEndereco({...endereco, numero: e.target.value})}
              required
            />
            <input
              type="text"
              placeholder="Bairro"
              value={endereco.bairro}
              required
              readOnly
            />
            <input
              type="text"
              placeholder="Cidade"
              value={endereco.cidade}
              required
              readOnly
            />
            <input
              type="text"
              placeholder="UF"
              value={endereco.uf}
              required
              readOnly
            />
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
            Cadastrar Instituição
            <span className="btn-icon">📘</span>
          </button>

          <div className="food-footer">
            <p>Já possui conta? <Link to="/entraraluno" className="food-link">Entrar</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contaescola;