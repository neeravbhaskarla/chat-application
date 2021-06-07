import React from 'react'
import styled, {css} from 'styled-components'
import {connect} from 'react-redux'
import {setRoom} from '../redux/app/app.actions'
 
function SideBarOption({id, Icon, title, setRoomId, roomId}) {

    const sideBarOptionClickHandler=()=>{
        if(id){
            setRoomId(id)
        }
    }

    const SideBarOptionContainer = styled.div`
        cursor: pointer;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 0.8rem;
        > h4{
            font-weight: 500;
        }
        :hover{
            background-color: #0000003e;
            transition: all ease-out 0.4s;
            opacity: 0.8;
        }
        ${roomId===id && css`
            background-color: #00000052;
        `}
    `

    return (
        <SideBarOptionContainer onClick={sideBarOptionClickHandler}>
            {Icon && <Icon fontSize='small' style={{padding: '10px'}}/>}
            {Icon? (
                <h4>{title}</h4>
            ):(
                <SideBarOptionChannel>
                    <span>#</span><h4>{title}</h4>
                </SideBarOptionChannel>
            )}
        </SideBarOptionContainer>
    )
}

const mapStateToProps = state =>({
    roomId: state.app.room
})

const mapDispatchToProps = dispatch =>({
    setRoomId: (id)=>dispatch(setRoom(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(SideBarOption)

const SideBarOptionChannel= styled.div`
    cursor: pointer;
    padding: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 0.9rem;
    color: #b2afcc;
    > span{
        font-size: 1rem;
    }
    > h4{
        font-weight: 500 !important;
    }
`