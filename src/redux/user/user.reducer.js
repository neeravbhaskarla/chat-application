
import {userTypes} from './user.types'
import {auth} from '../../firebase/firebase.utils'
const INITIAL_STATE = {
    userId: null,
    userName: null
}

const userReducer =(state = INITIAL_STATE, action )=>{
    switch(action.type){
        case userTypes.SET_CURRENT_USER:
            return action.payload
        case userTypes.LOG_OUT_USER:
            auth.signOut()
            return{
                userId:null, 
                userName:null
            }
        default:
            return state
    }
}
export default userReducer