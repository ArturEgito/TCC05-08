import { useState } from'react';
import './Paginaeditarperfil.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from'react-router-dom';
import { Link } from'react-router-dom';

function Paginaeditarperfil() {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [confirmaSenhaVisivel, setConfirmaSenhaVisivel] = useState(false);
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [nome, setNome] = useState(''); // Estado para o nome
  const [email, setEmail] = useState(''); // Estado para o email
  const [telefone, setTelefone] = useState(''); // Estado para o telefone
  const navigate = useNavigate();

  const mostrarSenha = () => {
    setSenhaVisivel(!senhaVisivel);
  };

  const mostrarConfirmaSenha = () => {
    setConfirmaSenhaVisivel(!confirmaSenhaVisivel);
  };

  const validarFormulario = (e) => {
    e.preventDefault();
    if (senha!== confirmaSenha) {
      alert('As senhas não correspondem. Por favor, digite novamente.');
      return false;
    }
    if (!nome ||!email ||!telefone) { // Verifica se os campos obrigatórios estão preenchidos
      alert('Por favor, preencha todos os campos obrigatórios.');
      return false;
    }
    excluirConta(); // Chama a função para excluir a conta
  };

  const excluirConta = () => {
    alert('Sua conta será excluída. Você será redirecionado para a tela inicial.');
    navigate('/'); // Redireciona para a tela App
  };

  return (
    
    <div className="container content">
      <div className="left-content">
        <div className="FinnTech">
        <button 
  className="voltar-botao" 
  onClick={() => window.history.back()}
>
  ← Voltar
</button>
        </div>
        <h1>Você está usando os serviços finntech!</h1>
        <h5>Sente-se e aproveite este momento de tranquilidade</h5>
      </div>
      <div className="right-content">
        <form onSubmit={validarFormulario}>
    
          <div className="crie-conta">
            <p>Configure sua conta.</p>
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
                value={nome} // Atualiza o valor do estado
                onChange={(e) => setNome(e.target.value)} // Atualiza o estado
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
                value={email} // Atualiza o valor do estado
                onChange={(e) => setEmail(e.target.value)} // Atualiza o estado
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
                value={telefone} // Atualiza o valor do estado
                onChange={(e) => setTelefone(e.target.value)} // Atualiza o estado
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
            <button type="submit" id="btn-cadastrar">
              Excluir conta
            </button>
          </div>
        </form>
      </div>
    </div>
  );
  
}

export default Paginaeditarperfil;