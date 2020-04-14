import React, { Component } from 'react';
import Pageheader from './../Templates/Pageheader/index';
import TodoForm from './../TodoForm/index';
import TodoList from './../TodoList/index';
import api from './../../services/api';

export default class Todo extends Component {
    constructor(props){
        super(props)
        this.state = {
            description: '', list: []
        }
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.refresh();
    }

    refresh() {
        api.get('/')
          .then(response => this.setState({
              ...this.state, description: '', list: response.data
          })
        )        
    }


    handleChange(e){
        this.setState({...this.state, description: e.target.value})
    }

    handleAdd(){
        const description = this.state.description
        api.post('/todo', {description})
            .then(response => this.refresh());
    }

    handleRemove(todo){
        api.delete(`/todo/${todo._id}`)
        .then(response => this.refresh())
    }


    render(){
        return(
            <div>
                <Pageheader name="Tarefas" small="Cadastro"></Pageheader>
                <TodoForm 
                    description={this.state.description}
                    handleChange={this.handleChange}                
                    handleAdd={this.handleAdd} 
                />
                <TodoList 
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                />
            </div>
        )
    }
}