import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { addTodo} from '../../store/actions/todoActions';
import { useHistory } from "react-router-dom";
import uuid from "uuid/v1";

const AddTodo = () => {
  const [title, setTitle] = useState("");

  const history = useHistory();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: uuid(),
      title: title,
      done: false
    };
    dispatch(addTodo(newTodo));
    history.push("/");
  }
  return (
    <div className="card border-0 shadow">    
    <div className="card-body">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Ex.: Lavar os pratos..."
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Adicionar tarefa
        </button>
      </form>
    </div>
  </div>
  )
}

export default AddTodo;
