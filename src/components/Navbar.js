import React, {useContext} from 'react'
import { ThemeContext } from '../Context/ThemeContext';
import { AuthContext } from '../Context/AuthContext';

const Navbar = () => {
    // load theme context
   const {theme} = useContext(ThemeContext)
   const {isLightTheme, light, dark} = theme 
   const style = isLightTheme ? light : dark

   //Load auth context
   const {isAuthenticated,toggleAuth}  =  useContext(AuthContext)
    return ( 
       <div className='navbar' style={style} >
           <h1>My hook app</h1>
           <ul>
               <li>Home</li>
               <li>About</li>
               <li>
                    {isAuthenticated ? "you are logged in" : ""}
                   <button onClick={toggleAuth} >
                       {isAuthenticated ? "Logout" :"Login" }
                   </button>
               </li>
           </ul>
       </div>
     );
}

export default Navbar;