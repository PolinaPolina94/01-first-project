// import { createSelector } from "reselect"


export const getPageUsers = (state) => {
    return state.usersPage.users
}

// export getPageUsersSelector = createSelector(); 

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}

export const getFollowingInProcess = (state) => {
    return state.usersPage.followingInProcess
} 