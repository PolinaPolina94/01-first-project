import {usersAPI} from "../api/api";


const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS'; 
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROCESS = 'TOGGLE_IS_FOLLOWING_PROCESS'

let inicialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProcess: []  

}

const usersReducer = (state = inicialState, action) => {

    switch (action.type) {
        case FOLLOW: 
             return {
                ...state,
                users: state.users.map ( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u; 
                                } ) 
             }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map ( u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u; 
                                } ) 
             }

        case SET_USERS: {
            return {...state, users: [...action.users ] }
        }

        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage }
        }

        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalUsersCount }
        }

        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING_PROCESS: {
            return {...state, 
                followingInProcess: action.isFetching 
                ? [...state.followingInProcess, action.userId] 
                : state.followingInProcess.filter(id => id !== action.userId)
            }
        }

        default:
            return state;
    }
}

export const follow = (userId) => {
    return { type: FOLLOW, userId }
}

export const unfollow = (userId) => {
    return { type: UNFOLLOW, userId }
}

export const setUsers = (users) => {
    return { type: SET_USERS, users }
}

export const setCurrentPage = (currentPage) => {
    return { type: SET_CURRENT_PAGE, currentPage }
}

export const setTotalUsersCount = (totalUsersCount) => {
    return { type: SET_TOTAL_USERS_COUNT, totalUsersCount }
}

export const toggleIsFetching = (isFetching) => {
    return { type: TOGGLE_IS_FETCHING, isFetching }
}

export const toggleFollowingProcess = (isFetching, userId) => {
    return { type: TOGGLE_IS_FOLLOWING_PROCESS, isFetching, userId }
}


export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))

        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {

                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items));
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
} 


export const markCurrentUserPage = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(setCurrentPage(pageNumber));
        dispatch(toggleIsFetching(true))

        usersAPI.getUsers (pageNumber,pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
            })


    }
}

export const followUsers = (userId) => {
    return (dispatch) => {

        dispatch(toggleFollowingProcess(true, userId))
        usersAPI.followUsers(userId)

            .then(data => {

                if (data.resultCode === 0) {
                    dispatch(follow(userId))
                }
                dispatch(toggleFollowingProcess(false, userId))
            })

    }
}

export const unfollowUsers = (userId) => {
    return (dispatch) => {

        dispatch(toggleFollowingProcess(true, userId))
        usersAPI.unfollowUsers(userId)
        
            .then(data => {

                if (data.resultCode === 0) {
                    dispatch(unfollow(userId))   
                }
                dispatch(toggleFollowingProcess(false, userId))
            })

    }
}


export default usersReducer;