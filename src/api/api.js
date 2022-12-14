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
    }    
}

export const profileAPI = {
    getUserProfile (userId) {
        return  instance.get(`profile/${userId}`) 
        .then(response => response)
    },
    getStatus (userId) {
        return instance.get(`/profile/status/${userId}`)
    },
    updateStatus (status) {
        return instance.put(`/profile/status`, {
            status: status
        })
    },
    savePhoto (photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);
            return instance.put(`/profile/photo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
    })
    },
    saveProfile (profile) {
        return instance.put(`/profile`, profile)
} 
}

export const authAPI = {
    getAuthUsers () {
        return instance.get(`auth/me`) 
        .then(response => response.data)  
    },
    login (email, password, rememberMe = false, captcha = null) {
        return instance.post(`auth/login`, {email, password, rememberMe, captcha})
    },
    logout () {
        return instance.delete(`auth/login`)
    }
}

export const securityAPI = {
    getCaptchaURL () {
        return instance.get(`security/get-captcha-url`) 
    }
}
