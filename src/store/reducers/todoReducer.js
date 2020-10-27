import {
  CREATE_TODO,
  GET_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TOGGLE_DONE 
} from "../constant/types";
// import {todos} from '../data/todos.json';

const initialState = {
  // eles vem do todos.json
 todos: [], 
 todo: null
};

export const todoReducer = (state = initialState, action) => {

  switch(action.type) {

    //CREATE_TODO
    case CREATE_TODO:
      return{
        ...state,
        todos: [action.payload, ...state.todos]
    };
    // DELETE_TODO
    case DELETE_TODO:
        return{
          ...state,
          todos: state.todos.filter(
            (todo) => todo.id !== action.payload         
        )
    };
    //GET_TODO
    case GET_TODO:
                                                         
       let currentTodo = state.todos.filter((todo) => todo.id === action.payload);
       
       currentTodo = currentTodo.values();
        //arr = array
       for (let val of currentTodo){
         currentTodo = val;
       }
      return {
        ...state,
        todo: currentTodo,
      };
      //UPDATE_TODO
      case UPDATE_TODO:
        return{
          ...state,
          todos: state.todos.map((todo) => 
            todo.id === action.payload.id ? action.payload: todo
          )
      }; 
      case TOGGLE_DONE:
          return {
            ...state,
            todos: state.todos.map(todo =>
            todo.id === action.id ? { ...todo, done: !todo.done } : todo
        ) }  
        default:
            return state;

  }// end of switch
}//end of todoReducer