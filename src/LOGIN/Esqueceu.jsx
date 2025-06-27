import { useState } from 'react';
import './Esqueceu.css'; // reutiliza o mesmo estilo
import { useNavigate } from 'react-router-dom';

function EsqueceuSenha() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const enviarRecuperacao = (e) => {
    e.preventDefault();
    if (!email) {
      alert('Por favor, insira seu email.');
      return;
    }

    // Aqui entraria a lógica de envio de recuperação por email
    alert(`Instruções enviadas para ${email}`);
    navigate('/'); // ou vá para uma tela de confirmação
  };

  const voltar = () => navigate('/entraraluno');

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

        <form onSubmit={enviarRecuperacao} className="food-login-form">
          <h2>Recuperar Senha</h2>

          <div className="food-input-group">
            <input
              type="email"
              placeholder="Digite seu email cadastrado"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <span className="input-icon">✉️</span>
          </div>

          <button type="submit" className="food-btn-primary">
            Enviar Instruções
            <span className="btn-icon">📩</span>
          </button>

          <button type="button" className="food-btn-ghost" onClick={voltar}>
            Voltar ao login
          </button>
        </form>

        <div className="food-footer">
          <p>Não tem conta? <a href="#signup">Cadastre-se</a></p>
        </div>
      </div>
    </div>
  );
}

export default EsqueceuSenha;
