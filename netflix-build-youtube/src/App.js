import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screen/HomeScreen';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginScreen from './screen/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screen/ProfileScreen';

function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() =>{
    const unsubscribe = auth.onAuthStateChanged(userAuth =>{
      if (userAuth){
        console.log(userAuth)
        dispatch(login(
          {
            uid: userAuth.uid,
            email: userAuth.email
          }
        ))
      }
      else{
        dispatch(logout())
      }
    })
    return unsubscribe
  }, [dispatch])
  return (
    <div className="App">
      {!user ?(
        <LoginScreen/>
      ) : (
      <BrowserRouter>
      <Routes>
        <Route exact path="/profile" element={<ProfileScreen/>} />
      </Routes>
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
      )}
    </div>
  );
}

export default App
