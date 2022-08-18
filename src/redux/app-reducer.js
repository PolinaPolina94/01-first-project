import { getAuthUserData } from './auth-reducer'


const SET_INITIALIZED = 'SET_INITIALIZED';

let inicialState = {
    initialized: false
}


const appReducer = (state = inicialState, action) => {

    switch (action.type) {
        case SET_INITIALIZED: 
             return {
                ...state,
                initialized: true
                             }
                default:
            return state;
    }
}


export const setInitialized = () => {
    return {
        type: 'SET_INITIALIZED'
    }
}

export const initializeApp = () => {

    return (dispatch) => {
        let promise = dispatch(getAuthUserData());
// debugger;
        promise.then(() => {
            dispatch(setInitialized())
        })
    }
} 

export default appReducer; 