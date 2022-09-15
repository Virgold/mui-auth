import React, {useEffect} from 'react'
import { Router, Routes, Route,useNavigate, Navigate} from "react-router-dom";
import LogoutButton from './common/Button';


export default function Dashboard({logout,handleAction}) {
  const navigate = useNavigate();
  function handleLogout(){
    // console.log('yes');
    sessionStorage.removeItem('Auth Token')
    navigate('/login')
  }


  useEffect(() => {
      let authToken = sessionStorage.getItem('Auth Token')

      if (authToken) {
          navigate('/dashboard')
      }

      if (!authToken) {
          navigate('/login')
      }
  }, [])
  
    return (
      <div className='mx-12'>
        <h2 className='text-slate-300 font-bold text-2xl'>Dashboard</h2>
        <div>
              <LogoutButton title='Logout' handleAction={handleLogout}/>
        </div>
      {/* <form>
      <label>
          <p>Username</p>
          <input type="text" className='border-l border-r border-t border-b border-red-900 mx-auto rounded-lg '/>
        </label>
      </form> */}
      </div>
    )
}
