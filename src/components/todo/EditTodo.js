import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodo, updateTodo }  from '../../store/actions/todoActions';
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditTodo = () => {
  const [title, setTitle] = useState("");

  const todo = useSelector((state) => state.todo.todo);
  const  { id } = useParams();
  const  history = useHistory();
  const dispatch = useDispatch();
 

  useEffect(() => {
    if (todo !== null) {
      setTitle(todo.title);
      
    }
    dispatch(getTodo(id));
  }, [todo]);

  const onUpdateTodo = (e) => {
    e.preventDefault();

    const update_todo = Object.assign(todo, {
      title: title,      
    });
    dispatch(updateTodo(update_todo));
    history.push("/")
  };
  return (
    <div className="card border-0 shadow">    
    <div className="card-body">
      <form onSubmit={(e) => onUpdateTodo(e)}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your Task"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className="btn btn-warning text-dark" type="submit">
         Atualizar tarefa
        </button>
      </form>
    </div>
  </div>
  )
}

export default EditTodo;
