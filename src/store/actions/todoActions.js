import {
  CREATE_TODO,
  GET_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TOGGLE_DONE
} from "../constant/types";

//addTodo
export const addTodo = (todo) => ({

  type: CREATE_TODO,
  payload: todo
})
//get a todo
export const getTodo = (id) => ({
  type: GET_TODO,
  payload: id
})
//update todo
export const updateTodo = (todo) => ({
  type: UPDATE_TODO,
  payload: todo
})

//delete todo
export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id
})
//toggle done
export const toggleDone = (id) => ({
  type: TOGGLE_DONE,
  id
})




