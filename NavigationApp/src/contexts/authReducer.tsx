import { AuthState } from './AuthContext';


type AuthAction=
       | {type:'signIn'}
       | {type:'logout'}
       | {type: 'changeFawIcon',payload:string}


export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'signIn':
            
            return{
                ...state,
                isLoggedIn:true,
                userName: 'no-username-yet'
            }
    case 'changeFawIcon':
        return{
            ...state,
            favoriteIcon:action.payload
        };
        case 'logout':
            return{
                ...state,
                isLoggedIn:false,
                favoriteIcon:undefined,
                userName:undefined
            }
        default:
            return state; 
    }
}