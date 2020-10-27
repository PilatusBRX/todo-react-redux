import React from "react";
import { Link } from "react-router-dom";
import { deleteTodo, toggleDone }  from '../../store/actions/todoActions';
import { useDispatch } from "react-redux";
import checked from '../../assets/img/checked.png';
import unchecked from '../../assets/img/unchecked.png';

const Todo = ({ todo, index }) => {

  const getStyle = () => {
    return {
      textDecoration: todo.done ? 'line-through' : '',
      color: todo.done ? '#999' : '#444',
      fontStyle: todo.done ? 'italic' : 'inherit',
      cursor: 'pointer'
    };
  };
  const dispatch = useDispatch(); 

  return (
    <tr> 
       <td>{index}</td>    
      <td style={getStyle()} onClick={() => dispatch(toggleDone(todo.id))}>
         { 
         todo.done? <img src={checked} alt="Logo"  className="checked"/> :
          <img src={unchecked} alt="Logo"  className="unchecked"/>          
          } 
          {todo.title}        
      </td>
       
      <td>
      <Link to={`/todos/edit/${todo.id}`}>
          <span className="material-icons mr-2">edit</span>
        </Link>
        <span
          className="material-icons  text-danger"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          remove_circle
        </span>
      </td>
    </tr>
  );
};

export default Todo;
