import React from 'react'
import styled from 'styled-components'
import {Button} from '@material-ui/core'
import {db} from '../firebase/firebase.utils'
import firebase from 'firebase'
import { useState } from 'react'
import { useSelector } from 'react-redux'

function ChatInput({channelName, roomId, chatRef}) {
    const [input, setInput] = useState('')
    const userName = useSelector(state=>state.user.userName)
    const avatar = useSelector(state=>state.user.avatar)
    const sendMessage = (e) =>{
        e.preventDefault()
        if(!roomId){
            return
        }
        db.collection('rooms').doc(roomId).collection('messages').add({
            message: input,
            timeStamps: firebase.firestore.FieldValue.serverTimestamp(),
            user: userName,
            userImage: avatar
        })
        setInput('')
    } 
    chatRef?.current?.scrollIntoView({
        behavior: "smooth",
    });
    return (
        <ChatInputContainer>
            <form>
                <input placeholder={`Message to #${channelName}`} onChange={(e)=>setInput(e.target.value)} value={input   }/>
                <Button hidden type="submit" onClick={sendMessage} >
                    Send
                </Button>
            </form>
        </ChatInputContainer>
    )
}

export default ChatInput

const ChatInputContainer = styled.div`
    border-radius: 40px;
    > form {
        position: relative;
        display: flex;
        justify-content: center;
    }
    > form >input{
        font-family: 'Poppins', sans-serif;
        color: #dbdbdb;
        position: fixed;
        font-size: 1rem;
        bottom: 30px;
        width: 60%;
        border: 1px solid #ccc;
        background-color: transparent;
        border-radius: 20px;
        padding: 15px;
        :focus{
            transition: all 1s;
            background-color: #0000006a;
        }
        ::placeholder{
            font-family: 'Poppins', sans-serif;
        }
    }

    > form >button{
        display: none !important;
    }

`
