import React from "react";
import {useSelector} from 'react-redux';
import { Link } from "react-router-dom";


const Navbar = () => {
  const todos = useSelector(state => state.todo.todos);

  return (
    
    <nav className="navbar shadow   navbar-dark bg-primary">
      <div className="container">   
      <Link to="/" className="navbar-brand">
      TodoIt! <span className="material-icons mr-2">edit</span>
     </Link>     

     <button className="btn btn-dark ml-2">Tarefas: {todos.length}</button>  

      <Link to="/todos/add" className="btn btn-danger">
         Adicionar Tarefas
      </Link>         
     </div>      
    </nav>    
  );
};

export default Navbar;

