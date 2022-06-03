import React,{useContext} from 'react'
import { ThemeContext } from '../Context/ThemeContext';
import { TodoContext } from "../Context/TodoContext";

const TodoItem = ({todo}) => {
//const todo = props.todo;

const {theme} = useContext(ThemeContext)
const {isLightTheme, light, dark} = theme 
const style = isLightTheme ? light : dark

// Load context todos
const {deleteTodo} =  useContext(TodoContext)



return (

         <li onClick={()=>{deleteTodo(todo.id)}} style={style}>{todo.title}</li>
        //  <li onClick={deleteTodo.bind(this,todo.id)} style={style}>{todo.title}</li>

  )
}

export default TodoItem