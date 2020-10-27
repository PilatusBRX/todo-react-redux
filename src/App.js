import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react';
import  {store, persistor}   from './store';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddTodo from "./components/todo/AddTodo";
import EditTodo  from "./components/todo/EditTodo";
import Navbar from "./components/layout/Navbar";
import Todos from "./components/todo/Todos";
import "./styles/App.scss";


const App = () => {

  return (
    <Provider store={store}>   
      <PersistGate loading={null} persistor={persistor}>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="py-3">
              <Switch>
                <Route exact path="/" component={Todos}  />
                <Route exact path="/todos/add" component={AddTodo} />
                <Route
                  exact                  
                  path="/todos/edit/:id"
                  component={EditTodo}
                />
              </Switch>
            </div>
          </div>         
        </div>
      </Router>
      </PersistGate>       
    </Provider>
  );
}

export default App;
