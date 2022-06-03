import React,{useContext} from 'react'
import { ThemeContext } from '../Context/ThemeContext';
import { TodoContext } from "../Context/TodoContext";
import { DELETE_TODO } from '../reducers/types'

const TodoItem = ({todo}) => {
//const todo = props.todo;

const {theme} = useContext(ThemeContext)
const {isLightTheme, light, dark} = theme 
const style = isLightTheme ? light : dark

// Load context todos
const {dispatch} =  useContext(TodoContext)



return (

         <li onClick={() => {
            dispatch({
              type: DELETE_TODO,
              payload: {
                id: todo.id
              }
            })
          }} style={style}>{todo.title}</li>
        //  <li onClick={deleteTodo.bind(this,todo.id)} style={style}>{todo.title}</li>

  )
}

export default TodoItem