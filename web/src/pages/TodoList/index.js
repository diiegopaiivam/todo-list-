import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { markAsDone, markAsPending, remove } from './../Todo/todoActions';
import { FaTrashAlt, FaCheck, FaUndo } from 'react-icons/fa';
import './style.css';

const TodoList = props => {

    const renderRows = () => {
        const list = props.list || [];

        return list.map(todo => (
            <tr key={todo._id}>
                <td className={todo.done ? "markedIsDone" : ""}>{todo.description}</td>
                <td>
                    <button className="btn btn-success" hidden={todo.done}>
                        <FaCheck size={10} color="#fff" 
                        onClick={() => props.markAsDone(todo)} />
                    </button>
                    <button className="btn btn-warning" hidden={!todo.done}>
                        <FaUndo size={10} color="#fff" 
                        onClick={() => props.markAsPending(todo)} />
                    </button>
                    <button className="btn btn-danger" hidden={!todo.done}>
                        <FaTrashAlt size={10}
                        onClick={() => props.remove(todo)}/>
                    </button>
                </td>
            </tr>
        ))
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="table-actions">Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    );
}

const mapStateToProps = state =>({list: state.todo.list});
const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);