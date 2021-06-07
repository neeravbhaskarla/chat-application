import React from 'react'
import styled from 'styled-components'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
// import HomeIcon from '@material-ui/icons/Home'
import AddChannel from '@material-ui/icons/Add'
import SideBarOption from './SideBarOption'
import AddChannelOption from './AddChannelOption'

import { useCollection } from 'react-firebase-hooks/firestore'
import {db} from '../firebase/firebase.utils'
import { useSelector } from 'react-redux'


function SideBar() {
    const userName = useSelector(state=>state.user.userName)
    const [channels] = useCollection(db.collection('rooms'))
    return (
        <SideBarContainer>
            <SideBarHeader>
                <SideBarInfo>
                    <h2>{userName}</h2>   
                    <h4>
                        <FiberManualRecordIcon/>
                        Online
                    </h4>
                </SideBarInfo>
            </SideBarHeader> 

            {/* <SideBarOptions>
                <SideBarOption Icon={HomeIcon} title="Home"/>
            </SideBarOptions> */}
            
            {/* <hr/> */}
            <AddChannelOption Icon={AddChannel} title="Add Channel"/>
            <SideBarOptions>
                {channels?.docs.map(doc=>(
                    <SideBarOption key={doc.id} id={doc.id} title={doc.data().name}/>
                ))}
            </SideBarOptions>
        </SideBarContainer>
    )
}
const SideBarContainer = styled.div`
    color: white;
    background: rgba( 0, 0, 0, 0.20 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 16.5px );
    -webkit-backdrop-filter: blur( 16.5px );
    flex: 0.3;
    border-top: 1px solid #ffffff57;
    max-width: 230px;
    margin-top: 60px;

    > hr{
        margin-top:10px;
        margin-bottom: 10px;
        border: 1px solid #ffffff57;
    }
`

const SideBarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid #ffffff57;
    padding: 13px;
    > .MuiSvgIcon-root{
        cursor: pointer;
        padding: 8px;
        color: black;
        font-size: 14px;
        background-color: white;
        border-radius: 100%;
        
        :hover{
            opacity: 0.7;
        }
    }
`

const SideBarInfo = styled.div`
    flex: 1;

    > h2{
        font-size: 15px;
        font-weight: 500;
        margin-bottom:  5px;
    }
    
    > h4{
        display: flex;
        font-size: 10px;
        font-weight: lighter;
        align-items: center;
    }

    > h4 .MuiSvgIcon-root{
        font-size: 8px;
        margin-right: 4px;
        color: #0fff43;
    }
`
const SideBarOptions = styled.div`
    display: flex;
    flex-direction: column;
`

export default SideBar
