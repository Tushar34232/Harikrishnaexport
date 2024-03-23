import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-white">HK-Capital</span>
      { localStorage.getItem('login') && <div>
        <span style={{color:"white"}}>log out</span>
        <i className ="fa-solid fa-right-from-bracket mx-2" style={{color:"white"}} onClick={()=>{ localStorage.removeItem('login');navigate('/signin')}}></i>
        </div>
      }
      </div> 
     
    </nav>
  );
}
