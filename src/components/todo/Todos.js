import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Todo from './Todo';

const Todos = () => {
  const todos = useSelector(state => state.todo.todos);
  const [searchText, setSearchText] = useState('');   

  const filteredTodos = todos.filter((todo) => {
    return (
      todo.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1      
    );
  });
  return ( 
    <>    
   { todos.length === 0  ? (<h4 className="text-center my-4">Não há ainda tarefas. Divirta-se ;)</h4>) : (
        <form className="search">          
        <input            
            className="form-control my-4"
            type='search'            
            placeholder='Procurar tarefa...'         
            value={searchText} 
            onChange={(e) => setSearchText(e.target.value)}      
        />                      
    </form>   
   ) }         
   
      <table className="table shadow">
            <thead className="bg-danger text-white">
              <tr>
              <th>ID</th>            
              <th>Tarefa</th>           
              <th>Ação</th>           
               </tr>
            </thead>
            <tbody>
            {
              filteredTodos.map((todo, index) => {
                return(
                <Todo key={todo.id} todo={todo} index={index + 1} />
                )
              })
            }      
         </tbody>
      </table>
  </>
   
  )
}

export default Todos
