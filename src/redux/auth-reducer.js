import { authAPI } from "../api/api"
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'project/auth/SET_USER_DATA';   // уникальное название экшена, для предотвращения варианта совпадения названий 


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
    return { type: SET_USER_DATA, payload: { id, email, login, isAuth } }
}

// Thunk по получению пользователей с сервера  (рефакторинг с помощью использования async/await. См.оригинал ниже - // )
export const getAuthUserData = () =>
    async (dispatch) => {

        let data = await authAPI.getAuthUsers();

        if (data.resultCode === 0) {
            let { id, email, login } = data.data
            dispatch(setAuthUserData(id, email, login, true));
        }
    }

// export const getAuthUserData = () => {
//     return (dispatch) => {

//        return authAPI.getAuthUsers()
//         .then(data => { 
//          if (data.resultCode === 0) {
//          let {id, email, login} = data.data
//          dispatch(setAuthUserData(id, email, login, true)); 
//         }
//                     })
//     }
// }

// Thunk по отправке данных логинизации на сервер (рефакторинг с помощью использования async/await. См.оригинал ниже - // )
export const login = (email, password, rememberMe) =>
    async (dispatch) => {

        let response = await authAPI.login(email, password, rememberMe)

        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let message = response.data.messages.length > 0 ? response.data.messages[0] : "something wrong";
            dispatch(stopSubmit("login", { _error: message }));
        }
    }


// export const login = (email, password, rememberMe) => {
//     return (dispatch) => {

//         authAPI.login(email, password, rememberMe)
//             .then(response => {
//                 if (response.data.resultCode === 0) {
//                     dispatch(getAuthUserData())
//                 } else {
//                     let message = response.data.messages.length > 0 ? response.data.messages[0] : "something wrong";
//                     dispatch(stopSubmit("login", { _error: message }));

//                 }
//             })

//     }
// }

export const logout = () =>
    async (dispatch) => {

        let response = await authAPI.logout()

        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }

export default authReducer;