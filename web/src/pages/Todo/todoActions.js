import api from './../../services/api';

export const changeDescription = (e) => ({
    type: 'DESCRIPTION_CHANGED',
    payload: e.target.value
});

export const search = () => {
    const response = api.get('/');
    return {
        type: 'TODO_SEARCHED',
        payload: response
    }
};


export const add = (description) => {
    return dispatch => {
        api.post('/todo', {description})
            .then(response => dispatch({ type: 'TODO_ADDED', payload: response.data }))
            .then(response => dispatch(search()))
            .then(response => dispatch(clear()))
    }
};

export const markAsDone = (todo) => {
    return dispatch => {
        api.put(`todo/${todo._id}`, { ...todo, done: true })
            .then(resp => dispatch(search()))
    }
}

export const markAsPending = (todo) => {
    return dispatch => {
        api.put(`todo/${todo._id}`, { ...todo, done: false })
            .then(resp => dispatch(search()))
    }
}


export const remove = todo => {
    return dispatch => {
        api.delete(`/todo/${todo._id}`)
            .then(resp => dispatch(search()));
    }
}

export const clear = () => {
    return {
        type: 'TODO_CLEAR'
    }
}