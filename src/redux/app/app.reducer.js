import {appTypes} from './app.types'

const INITIAL_STATE = {
    room: null,

}

const appReducer = (state = INITIAL_STATE, action) =>{
    switch(action.type){
        case appTypes.SET_ROOM:
            return{
                ...state,
                room: action.payload
            }
        default:
            return state
    }
}

export default appReducer