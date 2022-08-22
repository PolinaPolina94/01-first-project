import { profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';
const DELETE_POST = 'DELETE_POST';

let inicialState = {
    postsData: [
        { id: 1, message: "Hello, Kitty", likesCount: 20 },
        { id: 2, message: "Hi, dear", likesCount: 15 },
        { id: 2, message: "Hi, dear", likesCount: 15 },
        { id: 2, message: "Hi, dear", likesCount: 15 },
    ],
    profile: null,
    status: ''
}

const profailReducer = (state = inicialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = action.newPostText 
            return {
                ...state,
                postsData: [...state.postsData, {message: newPost}],
                newPostText: ''
            };

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };

        case SET_USER_STATUS:
            return {
                ...state,
                status: action.status
            } ;
        case DELETE_POST: 
        return {
            ...state,
            postsData: state.postsData.filter(p => p.id !== action.id)
        }    

        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => {
    return { type: ADD_POST, newPostText }
}

export const setUserProfile = (profile) => {
    return { type: SET_USER_PROFILE, profile }
}

export const setUserStatus = (status) => {
    return {type: SET_USER_STATUS, status}
}

export const deletePost = (id) => {
    return {type: DELETE_POST, id}
}

export const getUserProfile = (userId) => {
    return (dispatch) => {

        profileAPI.getUserProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            })
    }
}
                         //Thunk
export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
        .then(response=> {
            
            dispatch(setUserStatus(response.data))
        })
    }
}
                     // Thunk 
export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
        .then(response=> {
            if (response.data.resultCode === 0) {
            dispatch(setUserStatus(status))
            }
        })
    }
}

export default profailReducer;
