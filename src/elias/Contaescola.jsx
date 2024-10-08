import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './contaescola.css'; // Importar seu arquivo CSS

const Formulario = () => {
    const navigate = useNavigate(); // Hook para navegação
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [cnpj, setCnpj] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [termosAceitos, setTermosAceitos] = useState(false);
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [mostrarConfirmaSenha, setMostrarConfirmaSenha] = useState(false);

    const toggleMostrarSenha = () => {
        setMostrarSenha(!mostrarSenha);
    };

    const toggleMostrarConfirmaSenha = () => {
        setMostrarConfirmaSenha(!mostrarConfirmaSenha);
    };

    const validarFormulario = (e) => {
        e.preventDefault();
        if (senha !== confirmaSenha) {
            alert('As senhas não correspondem. Por favor, digite novamente.');
            return false;
        }
        // Adicione a lógica de envio aqui
        alert('Cadastro realizado com sucesso!');
        // Redirecionar após o cadastro
        navigate('/telainicial'); // Altere aqui para o caminho correto
        return true;
    };

    return (
        <div className="content">
            <div className="left-content">
                <h3>FinnTech.</h3>
                <h1>Você está começando a sua jornada!</h1>
                <h5>Sente-se e aproveite este momento de tranquilidade</h5>
            </div>
            <div className="right-content">
                <form onSubmit={validarFormulario}>
                    <div>
                        <button type="button" className="btn btn-primary btn-aluno" onClick={() => navigate('./app')}>Aluno</button>
                        <button type="button" className="btn btn-primary btn-escola" onClick={() => navigate('./contaescola')}>Escola</button>
                    </div>
                    <div className="crie-conta">
                        <p>Crie uma conta no FinnTech.</p>
                    </div>
                    <div className="container">
                        <div className="mb-3">
                            <label htmlFor="nome">Nome da escola:</label>
                            <input type="text" id="nome" placeholder="Digite seu nome aqui." 
                                   className="form-control" 
                                   value={nome} 
                                   onChange={(e) => setNome(e.target.value)} 
                                   required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" placeholder="email@dominio.com" 
                                   className="form-control" 
                                   value={email} 
                                   onChange={(e) => setEmail(e.target.value)} 
                                   required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cnpj">CNPJ:</label>
                            <input type="text" id="cnpj" placeholder="xx.xxx.xxx/0001-xx" 
                                   className="form-control" 
                                   value={cnpj} 
                                   onChange={(e) => setCnpj(e.target.value)} 
                                   required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="senha">Senha:</label>
                            <div className="input-group">
                                <input type={mostrarSenha ? 'text' : 'password'} 
                                       id="senha" 
                                       placeholder="Digite sua senha." 
                                       className="form-control" 
                                       value={senha} 
                                       onChange={(e) => setSenha(e.target.value)} 
                                       required />
                                <i className="senha-icon fas fa-eye" onClick={toggleMostrarSenha}></i>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="confirme-sua-senha">Confirme sua senha:</label>
                            <div className="input-group">
                                <input type={mostrarConfirmaSenha ? 'text' : 'password'} 
                                       id="confirme-sua-senha" 
                                       placeholder="Confirme sua senha." 
                                       className="form-control" 
                                       value={confirmaSenha} 
                                       onChange={(e) => setConfirmaSenha(e.target.value)} 
                                       required />
                                <i className="confirma-senha-icon fas fa-eye" onClick={toggleMostrarConfirmaSenha}></i>
                            </div>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" 
                                   id="termos-e-condicoes" 
                                   checked={termosAceitos} 
                                   onChange={(e) => setTermosAceitos(e.target.checked)} 
                                   required />
                            <label className="form-check-label" htmlFor="termos-e-condicoes">
                                Eu concordo com os termos e condições
                            </label>
                        </div>
                        <button type="submit" id="btn-cadastrar" className="btn btn-primary">Cadastrar</button>
                    </div>
                    <div style={{ marginLeft: '15px' }}>
                        <p>Já possui conta? <a href="#">Entre aqui</a></p>
                    </div>
                </form>
                <div id="saida-de-dados" className="m-1 p-2 text-center"></div>
            </div>
        </div>
    );
};

const Contaescola = () => {
    return (
        <div>
            <Formulario />
        </div>
    );
};

export default Contaescola;
