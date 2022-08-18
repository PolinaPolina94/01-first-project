import {authAPI} from "../api/api"
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA';


let inicialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
    // isFetching: false

}


const authReducer = (state = inicialState, action) => {

    switch (action.type) {
        case SET_USER_DATA: 
             return {
                ...state,
                ...action.payload,
                             }
                default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => {
    return { type: SET_USER_DATA, payload:{id, email, login, isAuth} }
}
                                             // Thunk по получению пользователей с сервера
export const getAuthUserData = () => {
    return (dispatch) => {

       return authAPI.getAuthUsers()
        .then(data => { 
         if (data.resultCode === 0) {
         let {id, email, login} = data.data
         dispatch(setAuthUserData(id, email, login, true)); 
        }
                    })

    }

}

                                    // Thunk по отправке данных логинизации на сервер 
export const login = (email, password, rememberMe) => {
    return (dispatch) => {


        authAPI.login(email, password, rememberMe)
        .then(response => { 
         if (response.data.resultCode === 0) {
         dispatch(getAuthUserData()) 
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "something wrong";
            dispatch( stopSubmit("login", {_error: message} ) );

        }
                    })

    }
} 

export const logout = () => {
    return (dispatch) => {

        authAPI.logout()
        .then(response => { 
         if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false)); 
        }
                    })

    }
} 

export default authReducer;