import React from 'react';
import { FaPlus } from 'react-icons/fa';
import Grid from './../Templates/Grid/index';

import './style.css';

export default props => (
    <div role="form" className="todoForm">
        <Grid cols="12 9 10">
            <input 
                id="description"
                className="form-control"
                placeholder="Adicione uma tarefa"
                onChange={props.handleChange}
                value={props.description}
            />  
        </Grid>

        <Grid cols="12 3 2">
            <button className="btn btn-primary" onClick={props.handleAdd}>
                <FaPlus />
            </button>
        </Grid>
    </div>
)