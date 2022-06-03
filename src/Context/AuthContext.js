import React,{ createContext, useReducer, useEffect} from 'react'
import { authReducer } from '../reducers/AuthReducer'
export const AuthContext = createContext()
const AuthContextProvider = ({children})=>{
    //state
    const [isAuthenticated, dispatch] = useReducer(authReducer,false)
    
    // const toggleAuth = ()=>{
    //     setAuthenticated(!isAuthenticated)
    // }

    useEffect(()=>{
        alert(isAuthenticated ? "login sucess" : "not")
    },[isAuthenticated])

    //context data
    const authContextData = {
        isAuthenticated,
        dispatch
    }

    return(
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider