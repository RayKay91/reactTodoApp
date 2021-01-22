import * as actions from './actions'



export default function todosReducer(state = [], action){
    if (action.type === actions.ADD_TODO) {
        return [
            ...state,
            {
                id: action.payload.id,
                todo: action.payload.todo
            }
        ]
    }
    else if (action.type === actions.REMOVE_TODO){
        return state.filter(todo => todo.id !== action.payload.id)
    }
    else return state
}
