import { combineReducers } from 'redux';
import todoReducers from './../pages/Todo/todoReducers';

const rootRedux = combineReducers({
    todo: todoReducers
})

export default rootRedux;