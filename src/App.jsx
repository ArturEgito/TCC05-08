import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import EscolaButton from './EscolaButton'; // Importando o componente
import { Link, useLocation, Navigate } from 'react-router-dom';


const App = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');
    const [senhaVisivel, setSenhaVisivel] = useState(false);
    const [confirmaSenhaVisivel, setConfirmaSenhaVisivel] = useState(false);

    const [clicou, setClicou] = useState(false);
    const [navegar, setNavegar] = useState(false);

    const mostrarSenha = () => setSenhaVisivel(!senhaVisivel);
    const mostrarConfirmaSenha = () => setConfirmaSenhaVisivel(!confirmaSenhaVisivel);

    useEffect(()=>{
        if(clicou){
            setNavegar(true)
        }
        
        return () =>{
            setNavegar(false)
            setClicou(false)
        }
    }, [clicou])


    const validarFormulario = (e) => {
        e.preventDefault();
        if (senha !== confirmaSenha) {
            alert('As senhas não correspondem. Por favor, digite novamente.');
            return;
        }

        console.log({ nome, email, telefone, senha });
    };

    return (
        <div className="container-fluid">
            <div className="content">
                <div className="left-content">
                    <h3>FinnTech.</h3>
                    <h1>Você está começando a sua jornada!</h1>
                    <h5>Sente-se e aproveite este momento de tranquilidade</h5>
                </div>
                <div className="right-content">
                    <form onSubmit={validarFormulario}>
                        <div>
                            <Button onClick={()=>setClicou(false)}>
                                Aluno
                            </Button>
                            <Button onClick={()=>setClicou(true)}>
                                Escola
                            </Button>
                            {(navegar) ? <Navigate 
                                to="/contaescola" 
                                replace={false}
                            /> : <></>}
                            
                        </div>
                        <p>Crie uma conta no FinnTech.</p>
                        <div>
                            <label>Nome completo:</label>
                            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                        </div>
                        <div>
                            <label>Telefone:</label>
                            <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} required />
                        </div>
                        <div>
                            <label>Senha:</label>
                            <div>
                                <input type={senhaVisivel ? 'text' : 'password'} value={senha} onChange={(e) => setSenha(e.target.value)} required />
                                <span onClick={mostrarSenha}>{senhaVisivel ? <FaEyeSlash /> : <FaEye />}</span>
                            </div>
                        </div>
                        <div>
                            <label>Confirme sua senha:</label>
                            <div>
                                <input type={confirmaSenhaVisivel ? 'text' : 'password'} value={confirmaSenha} onChange={(e) => setConfirmaSenha(e.target.value)} required />
                                <span onClick={mostrarConfirmaSenha}>{confirmaSenhaVisivel ? <FaEyeSlash /> : <FaEye />}</span>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-primary">Cadastrar</button>
                        <p>Já possui conta? <a href="./contaescola">Entre aqui</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default App;
