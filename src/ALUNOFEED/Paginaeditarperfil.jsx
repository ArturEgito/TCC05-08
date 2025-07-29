import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faCamera } from '@fortawesome/free-solid-svg-icons';
import './Paginaeditarperfil.css';
import { useNavigate } from 'react-router-dom';

function Paginaeditarperfil() {
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [confirmaSenhaVisivel, setConfirmaSenhaVisivel] = useState(false);
  const [userData, setUserData] = useState({
    nome: 'João Silva',
    email: 'joao@exemplo.com',
    telefone: '11999998888',
    foto: 'https://via.placeholder.com/150'
  });
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const navigate = useNavigate();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserData({ ...userData, foto: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (senha !== confirmaSenha) {
      alert('As senhas não coincidem!');
      return;
    }
    alert('Perfil atualizado com sucesso!');
    navigate('/telainicial');
  };

  const handleDeleteAccount = () => {
    if (window.confirm('Tem certeza que deseja excluir sua conta? Esta ação não pode ser desfeita.')) {
      // Adicione aqui a lógica de exclusão da conta
      console.log('Conta excluída com sucesso');
      navigate('/');
    }
  };

  const formatarTelefone = (value) => {
    const numbers = value.replace(/\D/g, '');
    let formatted = numbers;
    if (numbers.length > 2) {
      formatted = `(${numbers.substring(0,2)}) ${numbers.substring(2,7)}`;
      if (numbers.length > 7) {
        formatted += `-${numbers.substring(7,11)}`;
      }
    }
    return formatted;
  };

  return (
    <div className="profile-edit-container">
      <div className="profile-content">
        <div className="profile-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          Voltar
        </button>
        <h1>Editar Perfil</h1>
        <div className="profile-photo-section">
          <div className="photo-container">
            <img src={userData.foto} alt="Perfil" className="profile-photo" />
            <label className="camera-icon">
              <FontAwesomeIcon icon={faCamera} />
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
              />
            </label>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="profile-form">
        <div className="form-grid">
          <div className="form-group">
            <label>Nome Completo</label>
            <input
              type="text"
              value={userData.nome}
              onChange={(e) => setUserData({ ...userData, nome: e.target.value })}
              required
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={userData.email}
              disabled
            />

          </div>

          <div className="form-group">
            <label>Nova Senha</label>
            <div className="password-input">
              <input
                type={senhaVisivel ? 'text' : 'password'}
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                placeholder="••••••••"
              />
              <FontAwesomeIcon
                icon={senhaVisivel ? faEyeSlash : faEye}
                onClick={() => setSenhaVisivel(!senhaVisivel)}
              />
            </div>
          </div>

          <div className="form-group">
            <label>Confirmar Senha</label>
            <div className="password-input">
              <input
                type={confirmaSenhaVisivel ? 'text' : 'password'}
                value={confirmaSenha}
                onChange={(e) => setConfirmaSenha(e.target.value)}
                placeholder="••••••••"
              />
              <FontAwesomeIcon
                icon={confirmaSenhaVisivel ? faEyeSlash : faEye}
                onClick={() => setConfirmaSenhaVisivel(!confirmaSenhaVisivel)}
              />
            </div>
          </div>
        </div>

        <div className="form-actions">
          <div className="left-actions">
            <button type="button" className="delete-btn" onClick={handleDeleteAccount}>
              Excluir Conta
            </button>
          </div>
          <div className="right-actions">
            <button type="button" className="cancel-btn" onClick={() => navigate('/perfil')}>
              Cancelar
            </button>
            <button type="submit" className="save-btn">
              Salvar Alterações
            </button>
          </div>
        </div>
      </form>
      </div>
    </div>
  );
}

export default Paginaeditarperfil;