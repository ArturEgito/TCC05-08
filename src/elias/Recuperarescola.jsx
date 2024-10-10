import './Recuperarescola.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
 
function Recuperarescola() {
;
 
  const navigate = useNavigate(); // Hook para navegação
 
 
 
 
 
  const validarFormulario = (e) => {
    e.preventDefault();
     {
      alert('Enviamos um email para você.');
      return false;
    }
  };
 
 
  return (
    <div className="container content">
      <div className="left-content">
        <div className="FinnTech">
        </div>
        <h1>Você está<br /> começando a sua jornada!</h1>
        <h5>Sente-se e aproveite este momento de tranquilidade</h5>
        <button id="btn-voltar" className="btn btn-primary">Voltar</button>
      </div>
      <div className="right-content">
        <form onSubmit={validarFormulario}>
         
         
          {/* Formulário de criação de conta permanece igual */}
          <div className="crie-conta">
            <p>Recuperar senha. - Escola</p>
          </div>
          <div className="container">
            <div className="mb-3">
              <label htmlFor="email">Email:</label><br />
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
         
              <div className="input-group">
               
               
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
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
 
export default Recuperarescola;
 