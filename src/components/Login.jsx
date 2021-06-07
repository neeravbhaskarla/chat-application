import { Button } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import { auth, provider } from "../firebase/firebase.utils";
import {setUser} from '../redux/user/user.actions'
import {useDispatch} from 'react-redux'
import Logo from '../assets/Logo.svg'

function Login() {
  const dispatch = useDispatch()
  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithPopup(provider)
        .then(data=>{
            const {uid, displayName, photoURL } = data.user
            dispatch(setUser(uid, displayName, photoURL))
        })
  };

  return (
    <LoginContainer>
      <LoginInnerContainer>
        <img src={Logo} alt=""/>
        <h4>Group Chat</h4>
        <Button onClick={signIn}>Google Sign In</Button>
      </LoginInnerContainer>
    </LoginContainer>
  );
}

export default Login;

const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginInnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px;
  text-align: center;
  border-radius: 10%;
  background: rgba( 0, 0, 0, 0.15 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 16.5px );
  -webkit-backdrop-filter: blur( 16.5px );
  > h4{
      color: whitesmoke;
      font-weight: normal;
  }
  > button {
      font-family: 'Poppins', sans-serif;
    margin-top: 30px;
    text-transform: inherit;
    background-color: #a1a1ff;
    color: white;
    :hover {
      background-color: #1ea5ff;
      color: white;
      opacity: 0.8;
      transition: all 0.2s;
    }
  }
`;