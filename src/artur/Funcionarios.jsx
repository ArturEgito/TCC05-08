import { useState } from'react';
import './Funcionarios.css'; // Certifique-se de que o caminho do CSS esteja correto

const Funcionarios = () => {
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

    const handleBack = () => {
        window.history.back(); // Função para voltar à página anterior
    };

    return (
        <>
            <div className="funcionarios-container"> {/* Adicionei uma classe específica para o container */}
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

            {/* Botão Voltar */}
            <div style={{ textAlign: 'center', marginTop: '20px' }}>
                <button className="back-button" onClick={handleBack}>
                    Voltar
                </button>
            </div>
        </>
    );
};

export default Funcionarios;