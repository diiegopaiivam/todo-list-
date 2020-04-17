import React from 'react';
import Pageheader from './../Templates/Pageheader/index';
import TodoForm from './../TodoForm/index';
import TodoList from './../TodoList/index';

export default props => (

    <div>
        <Pageheader name="Tarefas" small="Cadastro"></Pageheader>
        <TodoForm />
        <TodoList/>
    </div>

)
