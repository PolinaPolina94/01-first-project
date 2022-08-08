import {usersAPI} from "../api/api"

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
                ...action.data,
                isAuth: true
                             }
                default:
            return state;
    }
}

export const setAuthUserData = (id, email, login) => {
    return { type: SET_USER_DATA, data:{id, email, login} }
}

export const getAuthUserData = () => {
    return (dispatch) => {

        usersAPI.getAuthUsers()
        .then(data => { 
         if (data.resultCode === 0) {
         let {id, email, login} = data.data
         dispatch(setAuthUserData(id, email, login)); 
        }
                    })

    }
}

export default authReducer;