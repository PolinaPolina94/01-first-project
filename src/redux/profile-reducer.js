import { profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let inicialState = {
    postsData: [
        { id: 1, message: "Hello, Kitty", likesCount: 20 },
        { id: 2, message: "Hi, dear", likesCount: 15 },
        { id: 2, message: "Hi, dear", likesCount: 15 },
        { id: 2, message: "Hi, dear", likesCount: 15 },
    ],
    newPostText: " ",
    profile: null,
    status: ''
}

const profailReducer = (state = inicialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };

        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
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
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return { type: ADD_POST }
}

export const updateNewPostTextActionCreator = (text) => {
    return { type: UPDATE_NEW_POST_TEXT, newText: text }
}

export const setUserProfile = (profile) => {
    return { type: SET_USER_PROFILE, profile }
}

export const setUserStatus = (status) => {
    return {type: "SET_USER_STATUS", status}
}

export const getUserProfile = (userId) => {
    return (dispatch) => {

        profileAPI.getUserProfile(userId)
            .then(response => {
                dispatch(setUserProfile(response.data));
            })
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
        .then(response=> {
            
            dispatch(setUserStatus(response.data))
        })
    }
}

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