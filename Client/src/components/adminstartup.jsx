import React from 'react'
import Adminpage from './adminpage'
import adminlogs from './adminlogs'
import { useNavigate } from 'react-router-dom'
const adminstartup = () => {
    const navigate = useNavigate();
   
    
  return (
    <div className='d-flex justify-content-center'>
    <button type="button" className="btn btn-info mx-2 my-3" onClick={()=>{navigate('/admin')}}>Pending Requests</button>
    <button type="button" className="btn btn-info mx-2 my-3" onClick={()=>{navigate('/adminlogs')}} >User Logs</button>
    </div>
  )
}

export default adminstartup