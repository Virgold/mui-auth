import React from "react";
// import { Register } from "./components/Register";
import Dashboard from "./components/Dashboard";
import { useState,useEffect } from 'react';
import Form from "./components/common/Form";
import { Routes, Route,useNavigate} from "react-router-dom";
import { app } from './components/firebase-config';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      navigate('/dashboard')
    }
  }, [])


  const submittAction = (id) => {
    const authentication = getAuth();
    // console.log(authentication);
    if(id==2){
      createUserWithEmailAndPassword(authentication, email, password)
      .then((response) => {
        navigate('/dashboard')
        sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken)
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          toast.error('Email Already in Use');
        }
      })
    };

    if (id==1){
      signInWithEmailAndPassword(authentication,email,password)
      .then((response) => {
        navigate('/dashboard')
        sessionStorage.setItem('Auth Token',  response._tokenResponse.refreshToken)
      })
      .catch((error) => {
        if(error.code === 'auth/wrong-password'){
          toast.error('Please check the Password');
        }
        if(error.code === 'auth/user-not-found'){
          toast.error('Please check the Email');
        }
      })
    }
  }


  return (
    // <Router>
    <Routes>
      <Route 
        path='/login' 
        element={
          <Form 
            title="Login"
            setEmail={setEmail}
            setPassword={setPassword} 
            handleAction={() => submittAction(1)}
            />} />
      <Route 
        path='/register' 
        element={
          <Form 
            title="Register"
            setEmail={setEmail}
            setPassword={setPassword} 
            handleAction={() => submittAction(2)}
            />} />
      <Route
            path='/dashboard'
            element={
              <Dashboard />}
          />
    </Routes>
    // </Router>
  );
}

export default App;
