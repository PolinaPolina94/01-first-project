import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "e95f2d0c-3a3e-4988-b7ae-1ca1e96eb3dd"
        }
})

export const usersAPI = {
    getUsers (currentPage =1 ,pageSize = 4) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    followUsers (userId) {
        return instance.post(`follow/${userId}`, {})
        .then(response => response.data)
    },
    unfollowUsers (userId) {
        return instance.delete(`follow/${userId}`)
        .then(response => response.data)
    },
    getAuthUsers () {
        return instance.get(`auth/me`) 
        .then(response => response.data)  
    },
    getUserProfile (userId) {
        return  instance.get(`profile/${userId}`) 
        .then(response => response)
    }

    

}

// export const getUsers = (currentPage =1 ,pageSize = 4) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`)
//         .then(response => response.data)
// };

// export const followUsers = (userId) => {
//     return instance.post(`follow/${userId}`, {})
//     .then(response => response.data)
// }; 

// export const unfollowUsers = (userId) => {
//     return instance.delete(`follow/${userId}`)
//     .then(response => response.data)
// }; 


