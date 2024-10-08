// src/App.js
import React from 'react';
import EmployeeForm from './components/EmployeeForm/EmployeeForm';

const App = () => {
    return (
        <div>
            <EmployeeForm />
        </div>
    );
};

// src/components/EmployeeForm/EmployeeForm.js
import React, { useState } from 'react';
import './EmployeeForm.css'; // Importa o CSS

const EmployeeForm = () => {
    const [nome, setNome] = useState('');
    const [horario, setHorario] = useState('');
    const [fotoPerfil, setFotoPerfil] = useState(null);
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (fotoPerfil && fotoPerfil.size > 2 * 1024 * 1024) {
            setMensagem('A foto deve ser menor que 2MB.');
            return;
        }

        const id = 'ID' + Math.floor(Math.random() * 10000);
        const newEmployee = {
            id,
            nome,
            horario,
            foto_perfil: URL.createObjectURL(fotoPerfil),
        };

        const employees = JSON.parse(localStorage.getItem('employees')) || [];
        employees.push(newEmployee);
        localStorage.setItem('employees', JSON.stringify(employees));

        setMensagem('Funcionário cadastrado com sucesso!');
        setTimeout(() => {
            window.location.href = '/gerenciamento'; // Mude para a sua rota de gerenciamento
        }, 2000);
    };

    return (
        <div className="container">
            <h1>Cadastro do Funcionário</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="foto_perfil">Foto de Perfil:</label>
                    <input
                        type="file"
                        id="foto_perfil"
                        accept="image/*"
                        onChange={(e) => setFotoPerfil(e.target.files[0])}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="nome">Nome:</label>
                    <input
                        type="text"
                        id="nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="horario">Horário de Entrada:</label>
                    <input
                        type="time"
                        id="horario"
                        value={horario}
                        onChange={(e) => setHorario(e.target.value)}
                        required
                    />
                </div>
                <input type="submit" value="Cadastrar e Enviar" className="submit-button" />
                {mensagem && <div className="message">{mensagem}</div>}
            </form>
        </div>
    );
};

export default EmployeeForm;
