import * as actions from './actions'
// import axios from 'axios'

let counter = 0
export function todoAdded(todo){
    return {
        type: actions.ADD_TODO,
        payload: {
            todo,
            id: ++counter
        }
    }
}

export function todoRemover(id){
    return {
        type: actions.REMOVE_TODO,
        payload: {
            
            id
        }
    }
}

// redux-thunk/async version practice

// export function todoAdded(todo){
//     return async (dispatch, getState) => {
//         console.log(getState())

//           const resp = await axios.post('https://jsonplaceholder.typicode.com/posts')
//           if (resp.status >= 200 && resp.status < 300) {
//             console.log('db interaction complete');
//               dispatch({
//                   type: actions.ADD_TODO,
//                   payload: {
//                       todo,
//                       id: ++counter
//                     }
//                 })
//             }
//             else {
//                 console.log('lol didn\'t work')
//             }

//         console.log(getState()) // the result will now be updated with the state, as the dispatch has taken place.
//     }
// }