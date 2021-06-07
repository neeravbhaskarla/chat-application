import React from 'react'
import styled from 'styled-components'
import {db} from '../firebase/firebase.utils'

function AddChannelOption({Icon, title}) {

    const addChannel=()=>{
        
        const channelName = prompt("Enter Channel Name")
        
        if(channelName){
            db.collection("rooms").add({
                name: channelName
            })
        }
    }
    return (
        <SideBarOptionContainer onClick={addChannel}>
            <Icon fontSize='small' style={{padding: '10px'}}/>
            <h4>{title}</h4>
        </SideBarOptionContainer>
    )
}

export default AddChannelOption

const SideBarOptionContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 0.8rem;
    > h4{
        font-weight: 500;
    }
    :hover{
        opacity: 0.7;
        cursor: pointer;
    }
`