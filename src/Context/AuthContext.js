import React,{ createContext, useState, useEffect} from 'react'

export const AuthContext = createContext()
const AuthContextProvider = ({children})=>{
    //state
    const [isAuthenticated, setAuthenticated] = useState(false)
    
    const toggleAuth = ()=>{
        setAuthenticated(!isAuthenticated)
    }

    useEffect(()=>{
        alert(isAuthenticated ? "login sucess" : "not")
    },[isAuthenticated])
    //context data
    const authContextData = {
        isAuthenticated,
        toggleAuth
    }

    return(
        <AuthContext.Provider value={authContextData}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContextProvider