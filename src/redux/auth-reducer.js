import { authAPI, securityAPI } from "../api/api"
import { stopSubmit } from "redux-form";

const SET_USER_DATA = 'project/auth/SET_USER_DATA';   // уникальное название экшена, для предотвращения варианта совпадения названий 
const GET_CAPTCHA_URL_SUCCESS = 'project/auth/GET_CAPTCHA_URL_SUCCESS';

let inicialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    captchaURL: null
}

const authReducer = (state = inicialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        case GET_CAPTCHA_URL_SUCCESS:
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
export const getCaptchaURLSuccess = (captchaURL) => {
    return { type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaURL } }
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
export const login = (email, password, rememberMe, captcha) =>
    async (dispatch) => {

        let response = await authAPI.login(email, password, rememberMe, captcha)

        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaURL())
            }
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

export const getCaptchaURL = () =>
    async (dispatch) => {
        let response = await securityAPI.getCaptchaURL()
        const captchaURL = response.data.url;

        dispatch(getCaptchaURLSuccess(captchaURL));

    }
export default authReducer;