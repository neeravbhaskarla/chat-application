import {userTypes} from './user.types'

export const setUser = (userId, userName, photoURL) =>({
    type: userTypes.SET_CURRENT_USER,
    payload: {
        userId, 
        userName,
        avatar: photoURL
    }
})
export const logOutUser = () =>({
    type: userTypes.LOG_OUT_USER
})
