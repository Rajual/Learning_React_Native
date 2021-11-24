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
    logout:()=>void
    changeFavoriteIcon: (iconName: string) => void;
    changeUserName: (userName: string) => void;
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

    const changeFavoriteIcon=(iconName:string)=>{
        dispatch({type:'changeFawIcon',payload:iconName});
    }

    const changeUserName=(userName:string)=>{
        dispatch({type:'changeUserName',payload:userName})
    }

    const logout=()=>{
        dispatch({type:'logout'})
    }

    return(
        <AuthContext.Provider value={{
             authState:authState,
             signIn,
             logout,
             changeFavoriteIcon,
             changeUserName,
        }}>
            {children}
        </AuthContext.Provider>
    )
}