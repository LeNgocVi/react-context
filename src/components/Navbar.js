import React, {useContext} from 'react'
import { ThemeContext } from '../Context/ThemeContext';
import { AuthContext } from '../Context/AuthContext';
import { TOGGLE_AUTH } from '../reducers/types';

const Navbar = () => {
    // load theme context
   const {theme} = useContext(ThemeContext)
   const {isLightTheme, light, dark} = theme 
   const style = isLightTheme ? light : dark

   //Load auth context
   const {isAuthenticated,dispatch}  =  useContext(AuthContext)
    return ( 
       <div className='navbar' style={style} >
           <h1>My hook app</h1>
           <ul>
               <li>Home</li>
               <li>About</li>
               <li>
                    {isAuthenticated ? "you are logged in" : ""}
                   <button onClick={()=>{
                       dispatch({
                           type: TOGGLE_AUTH
                       })
                   }} >
                       {isAuthenticated ? "Logout" :"Login" }
                   </button>
               </li>
           </ul>
       </div>
     );
}

export default Navbar;