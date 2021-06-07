import React, {useEffect} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Header from './components/Header';
import SideBar from './components/SideBar'
import Chat from './components/Chat'
import Login from './components/Login'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import {setUser} from './redux/user/user.actions'
import {auth} from './firebase/firebase.utils'

function App() {
  const userId = useSelector(state=> state.user.userId)
  const dispatch = useDispatch()
  useEffect(()=>{
    let unSubscribeUser = null
    unSubscribeUser = auth.onAuthStateChanged(async user=>{
      if(user){
          const {uid, displayName, photoURL } = user
          dispatch(setUser(uid, displayName, photoURL))
        }
      })
      return () => unSubscribeUser
  },[dispatch])
  return (
    <Router>
      <Switch>
            <Route path='/' exact>
              {userId==null?<Login />:
              <>
              <Header/>
              <AppBody>
                  <SideBar/>
                  <Chat/>
              </AppBody>
              </>}
            </Route>
          </Switch>
    </Router>
  );
}
const AppBody = styled.div`
  display: flex;
  height: 100vh;
  animation: fromSide 2s ease-out;
  @keyframes fromSide{
    from{
      transform: translateX(-100%);
      opacity: 0;
    }
    to{
      transform: translateX(0%);
      opacity: 1;
    }
  }
`
export default App;
