import {appTypes} from './app.types'

export function setRoom(roomId){
    return {
        type: appTypes.SET_ROOM,
        payload: roomId
    }
}
