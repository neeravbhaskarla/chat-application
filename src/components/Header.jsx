import React from 'react'
import Logout from '@material-ui/icons/ExitToApp'
// import SearchIcon from '@material-ui/icons/Search'
// import HelpIcon from '@material-ui/icons/HelpOutline'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import {logOutUser} from '../redux/user/user.actions'
const Header = () => {
    const avatar = useSelector(state=>state.user.avatar)
    const dispatch = useDispatch()
    return (
        <HeaderContainer>
            <HeaderLeft>
                <HeaderAvatar>
                    <img src={avatar} alt=""/>
                </HeaderAvatar>
            </HeaderLeft>

            {/* <HeaderSearch>
                <input placeholder="Search"/>
                <SearchIcon/>
            </HeaderSearch> */}

            <HeaderRight>
                <Logout onClick={()=>dispatch(logOutUser())} style={{cursor: 'pointer'}}/>
                {/* <HelpIcon/> */}
            </HeaderRight>
        </HeaderContainer>
    )
}


const HeaderContainer = styled.div`
    display: flex;
    position: fixed;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
    color: white;
    background: rgba( 0, 0, 0, 0.20 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 16.5px );
    -webkit-backdrop-filter: blur( 16.5px );
    animation: appear 3s forwards;
    @keyframes appear{
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }
`

const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;
    
    > .MuiSvgIcon-root{
        font-size: 25px;
        margin-left: auto;
        margin-right: 30px;
    }
`

const HeaderAvatar = styled.div`
    opacity: 1;
    > img{
        padding: 0;
        margin: 0;
        height: 35px;
        width: 35px;
        border-radius: 50%;
    }
    :hover{
        opacity: 0.6;
    }
`


// const HeaderSearch = styled.div`
//     font-family: 'Poppins';
//     flex: 0.4;
//     display: flex;
//     align-items: center;
//     > input{
//         border: 0;
//         color: white;
//         font-weight: lighter;
//         font-size: 0.9rem;
//         font-family: 'Poppins', sans-serif;
//         background-color: transparent !important;
//         margin-left: 30%;
//         height: 25px;
//         width: 40%;
//         border-radius: 5px;
//         :active{
//             border:0;
//         }
//         ::placeholder{
//             font-family: 'Poppins', sans-serif;
//             font-weight: 300;
//             color: white;
//             opacity: 0.7;
//         }
//     }
//     > .MuiSvgIcon-root{
//         cursor: pointer;
//         margin-left: 3px;
//         margin-right: auto;
//     }
// `

const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;
    > .MuiSvgIcon-root{
        cursor: pointer;
        margin-left: auto;
        margin-right: 20px;
    }
`

export default Header
