import { ADD_TODO, TOGGLE_TODO } from '../actions';
 

const initialState = {
    todo: [
       { value: 'Walk the dog',
        completed: false }

    ]
};


const reducer = ( state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            console.log('add_todo', action);
            const newTodo = {
                value: action.payload,
                completed: false
      }; 
      return {
        ...state,
        todo: [...state.todo, newTodo]
      };
      case TOGGLE_TODO:
        return {
            ...state, 
                todo: state.todo.map((todoList, index) => 
                action.payload === index
                ? {...todoList, completed: !todoList.completed } 
                :todoList
            )
        }

      default: 
        return state
    }
}

export default reducer;