// rafce: Function component
import TodoItem from "./TodoItem";
import React, {  useContext } from "react";
import TodoForm from "./TodoForm";
import { TodoContext } from "../Context/TodoContext";
import { AuthContext } from "../Context/AuthContext";


const Todos = () => {
    // load context
  const {todos} = useContext(TodoContext) 

//Load auth context
const {isAuthenticated} =useContext(AuthContext)
  
return (
    <div className="todo-list">
      <TodoForm />
      {isAuthenticated ? ( <ul>
        {todos.map((todo) => (
         <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>) : (<p style={{textAlign:"center"}}> Not auth </p>)}
     
    </div>
  );
};

export default Todos;
