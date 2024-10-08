import React from 'react';
import { Link } from 'react-router-dom';

const AlunoButton = () => {
    return (
        <Link to="./elias/contaaluno">
            <button type="button" className="btn btn-primary">
                Aluno
            </button>
        </Link>
    );
};

export default AlunoButton;
