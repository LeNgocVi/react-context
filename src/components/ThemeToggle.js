import React,{useContext} from 'react'
import { ThemeContext } from '../Context/ThemeContext';

const ThemeToggle = () => {
    const {toggleTheme} = useContext(ThemeContext)
  return (
    <div className='toggle-btn'>
        <button onClick={toggleTheme} >Toggle theme</button>
    </div>
  )
}

export default ThemeToggle