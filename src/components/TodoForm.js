import React, { useState, useContext } from "react";
import { ThemeContext } from '../Context/ThemeContext';
import { TodoContext } from "../Context/TodoContext";

import {v4 as uuidv4} from "uuid";
const TodoForm = ({  }) => {
     //  Load context 
  const {theme} = useContext(ThemeContext)
  const {isLightTheme, light, dark} = theme 
  const style = isLightTheme ? light : dark
  
  //  Load context todos
  const {addTodo} =  useContext(TodoContext)
  const [title, setTitle] = useState("");

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event)=> {
    event.preventDefault()
    addTodo({
        id: uuidv4(),
        title, 
    })

  }
 
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={title}
        placeholder="Enter a new todo..."
        onChange={onTitleChange}
        required
      />
      <input style={style} type="submit" value="Add" />
    </form>
  );
};

export default TodoForm;
