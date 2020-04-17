import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { FaPlus, FaSearch, FaBroom } from 'react-icons/fa';
import Grid from './../Templates/Grid/index';
import { add, changeDescription, search, clear } from './../Todo/todoActions';

import './style.css';

class TodoForm extends Component {
    constructor(props){
        super(props)

        this.keyHandler = this.keyHandler.bind(this);
    }

    componentWillMount(){
        this.props.search();
    }

    keyHandler(e){
        const { add, description, clear } = this.props;
        if (e.key === 'Enter') {
            add(description);
        } else if (e.key === 'Escape') {
            clear()
        }
    }

    render(){
        const { add, search, description, clear } = this.props;
        return (
            <div role="form" className="todoForm">
            <Grid cols="12 9 10">
                <input 
                    id="description"
                    className="form-control"
                    placeholder="Adicione uma tarefa"
                    onKeyUp={this.keyHandler}
                    onChange={this.props.changeDescription}
                    value={this.props.description}
                />  
            </Grid>
    
            <Grid cols="12 3 2">
                <button className="btn btn-primary" onClick={() => add(description)}>
                    <FaPlus />
                </button>
                <button className="btn btn-info" onClick={() => search()}>
                    <FaSearch />
                </button>
                <button className="btn btn-default" onClick={() => clear()}>
                    <FaBroom />
                </button>
            </Grid>
        </div>
        )
    }
}


const mapStateToProps = state => ({description: state.todo.description});
const mapDispatchToProps = dispatch => bindActionCreators({ add, changeDescription, search, clear }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);