import React, { useReducer } from "react";
import { createContext } from "react";
import { authReducer } from "./authReducer";

export interface AuthState{
    isLoggedIn: boolean;
    userName?:string;
    favoriteIcon?:string
}

//Initial state
export const authInitialState: AuthState={
    isLoggedIn:false,
    userName:undefined,
    favoriteIcon:undefined
}

//Know that show the context
export interface AuthContextProps{
    authState:AuthState;
    signIn:()=>void;
}


//Crear el contexto
export const AuthContext= createContext({} as AuthContextProps);

//State Provider
export const AuthProvider=({children}:any)=>{
//dispatch manda el estado al reducer.
    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const signIn=()=>{
        dispatch({type:'signIn'});
    }

    return(
        <AuthContext.Provider value={{
             authState:authState,
             signIn,
        }}>
            {children}
        </AuthContext.Provider>
    )
}