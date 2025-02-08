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
    navigate('/Telainicio');
  };

  return (
    <div className="contaescola-container">
      <div className="left-content-escola">
        <h1>Você está começando a sua jornada!</h1>
        <h5>Sente-se e aproveite este momento de tranquilidade</h5>
      </div>

      <div className="right-content-escola">
        <form onSubmit={validarFormulario}>
          <div className="botoes-selecao-escola">
            <button
              type="button"
              className="btn-aluno-conta"
              onClick={() => navigate('/App')}
            >
              Aluno
            </button>
            <button
              type="button"
              className="btn-escola-conta"
              onClick={() => navigate('/contaescola')}
            >
              Escola
            </button>
          </div>

          <div className="formulario-cadastro-escola">
            <h2>Crie uma conta no FinnTech</h2>

            <div className="grupo-form-escola">
              <label>Nome da instituição:</label>
              <input
                type="text"
                placeholder="Digite o nome da instituição"
                className="form-control"
                required
              />
            </div>

            <div className="grupo-form-escola">
              <label>Email:</label>
              <input
                type="email"
                placeholder="email@dominio.com"
                className="form-control"
                required
              />
            </div>

            <div className="grupo-form-escola">
              <label>CEP:</label>
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
                    placeholder="XXXXX-XXX"
                    className="form-control"
                    required
                  />
                )}
              </InputMask>
            </div>

            <div className="grupo-endereco-escola">
              <div className="grupo-form-escola">
                <label>Logradouro:</label>
                <input
                  type="text"
                  value={endereco.logradouro}
                  onChange={(e) => setEndereco({...endereco, logradouro: e.target.value})}
                  className="form-control"
                  required
                />
              </div>

              <div className="grupo-form-escola">
                <label>Número:</label>
                <input
                  type="text"
                  value={endereco.numero}
                  onChange={(e) => setEndereco({...endereco, numero: e.target.value})}
                  className="form-control"
                  required
                />
              </div>

              <div className="grupo-form-escola">
                <label>Bairro:</label>
                <input
                  type="text"
                  value={endereco.bairro}
                  onChange={(e) => setEndereco({...endereco, bairro: e.target.value})}
                  className="form-control"
                  required
                />
              </div>

              <div className="grupo-form-escola">
                <label>Cidade:</label>
                <input
                  type="text"
                  value={endereco.cidade}
                  onChange={(e) => setEndereco({...endereco, cidade: e.target.value})}
                  className="form-control"
                  required
                />
              </div>

              <div className="grupo-form-escola">
                <label>UF:</label>
                <input
                  type="text"
                  value={endereco.uf}
                  onChange={(e) => setEndereco({...endereco, uf: e.target.value})}
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="grupo-senha-escola">
              <div className="grupo-form-escola">
                <label>Senha:</label>
                <div className="input-group">
                  <input
                    type={senhaVisivel ? "text" : "password"}
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    className="form-control"
                    required
                  />
                  <FontAwesomeIcon
                    icon={senhaVisivel ? faEyeSlash : faEye}
                    className="senha-icon"
                    onClick={mostrarSenha}
                  />
                </div>
              </div>

              <div className="grupo-form-escola">
                <label>Confirme sua senha:</label>
                <div className="input-group">
                  <input
                    type={confirmaSenhaVisivel ? "text" : "password"}
                    value={confirmaSenha}
                    onChange={(e) => setConfirmaSenha(e.target.value)}
                    className="form-control"
                    required
                  />
                  <FontAwesomeIcon
                    icon={confirmaSenhaVisivel ? faEyeSlash : faEye}
                    className="confirma-senha-icon"
                    onClick={mostrarConfirmaSenha}
                  />
                </div>
              </div>
            </div>

            <div className="termos-condicoes-escola">
              <input
                type="checkbox"
                id="termos-e-condicoes"
                required
              />
              <label htmlFor="termos-e-condicoes">
                Eu concordo com os termos e condições
              </label>
            </div>

            <button type="submit" className="btn-cadastrar-escola">
              Cadastrar
            </button>

            <div className="login-link-escola">
              <p>
                Já possui conta? 
                <Link to="/entraraluno"> Entre aqui</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contaescola;