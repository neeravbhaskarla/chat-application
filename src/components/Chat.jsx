import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import ChatIcon from '@material-ui/icons/Chat'
import ChatInput from './ChatInput'
import Message from './Message'
import {useSelector} from 'react-redux';
import {useCollection, useDocument} from 'react-firebase-hooks/firestore'
import {db} from '../firebase/firebase.utils'
import {ClipLoader} from 'react-spinners'

function Chat() {
    const roomId = useSelector((state)=>state.app.room)
    const [roomDetails, roomDetailsLoading] = useDocument(
        roomId && db.collection('rooms').doc(roomId)
        )
    const chatRef = useRef(null)
    const [roomMessage, roomMessagesLoading] = useCollection(
        roomId &&
            db
                .collection('rooms')
                .doc(roomId)
                .collection("messages")
                .orderBy("timeStamps", "asc")
    )
    useEffect(() => {
        chatRef?.current?.scrollIntoView({
          behavior: "smooth",
        });
      }, [roomId, roomMessagesLoading]);

    return (
        <ChatContainer>
            {roomMessagesLoading === false && roomDetailsLoading ===false? 
                roomDetails && roomMessage &&
                <>
                    <Header>
                        <HeaderLeft>
                            <h4>#{roomDetails?.data().name}</h4>
                        </HeaderLeft>
                        <HeaderRight>
                            <ChatIcon/>
                        </HeaderRight>
                    </Header>
                    <ChatMessages>
                        {roomMessage?.docs.map(doc=>{
                            const {message, timeStamps, user, userImage} = doc.data()

                            return (
                                <Message
                                    key={doc.id}
                                    message={message}
                                    timeStamps={timeStamps}
                                    user={user}
                                    userImage={userImage}
                                />
                            )
                        })}
                        <ChatBottom ref={chatRef}/>
                    </ChatMessages>
                    <ChatInput chatRef={chatRef} channelName={roomDetails?.data().name} roomId={roomId}/>
                </>
                :<ClipLoader color='white' css={{position: 'absolute', margin: '15px'}} size={30}/>
            }
        </ChatContainer>
    )
}

export default Chat

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    border: 1px solid #ffffff57;
    animation: visibleOpacity 1s ease-out;
    @keyframes visibleOpacity{
        from{
            transform: translateY(-50%);
            opacity: 0;
        }
        to{
            transform: translateY(0%);
            opacity: 1;
        }
    }
    
`
const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    > h4{
        font-weight: 500;
    }

`
const HeaderRight = styled.div`
`
const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
    color: white;
    background: rgba( 0, 0, 0, 0.5);
    
`

const ChatMessages = styled.div`
`

const ChatBottom = styled.div`
    padding-bottom: 80px;
`