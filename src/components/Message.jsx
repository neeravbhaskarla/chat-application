import React from 'react'
import styled from 'styled-components'
function Message({message, timeStamps, user, userImage}) {
    return (
        <MessageContainer>
            <img src={userImage} alt="" />
            <MessageInfo>
                <h4>
                    {user} <span>{new Date(timeStamps?.toDate()).toUTCString()}</span>
                </h4>
                <p>{message}</p>
            </MessageInfo>
        </MessageContainer>
    )
}

export default Message

const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;

    > img{
        height: 40px;
        border-radius: 50%;
    }
`
const MessageInfo = styled.div`
    padding-left: 10px;
    > h4{
        font-weight: lighter;
        font-size: 15px;
    }
    > h4 >span{
        color: gray;
        font-weight: 300;
        margin-left: 4px;
        font-size: 10px;
    }
    > p{
        font-size: 13px;
        font-weight: lighter;
    }
`