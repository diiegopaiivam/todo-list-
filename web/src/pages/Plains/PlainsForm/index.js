import React from 'react';
import './style.css';

export default props => (
    <form>
        <header className="cabecalho"><strong>Meu plano de aula</strong></header>
        <div className="form-control">
            <label>Horário da aula</label>
            <input
                type="time" 
                id="time"
            />
            <label>Campo de experiência</label>
            <input 
                type="text"
                id="experience"

            />
        </div>
        <div className="form-control">
            <label>Conteúdo</label>
            <input 
                type="text"
                id="experience"

            />
            <label>Objetivo</label>
            <textarea 
                type="text"
                id="experience"

            />
        </div>  
    </form>
)