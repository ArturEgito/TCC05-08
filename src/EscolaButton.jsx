import React from 'react';

const EscolaButton = ({ onClick }) => {
    return (
        <button type="button" className="btn btn-primary" onClick={onClick}>
            Escola
        </button>
    );
};

export default EscolaButton;
