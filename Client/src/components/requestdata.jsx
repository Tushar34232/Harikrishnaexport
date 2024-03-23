import React from 'react'
import { useEffect ,useState } from 'react';
import Alert from './alert';
const requestdata = (props) => {

 
    
 


  //approve request
  const btn_approve = async () =>{

    console.log(props.data._id);
  const response = await fetch( `http://localhost:3001/user/update/${props.data._id}`
  , {
    method: 'PUT'
   
})
const data1 = await response.json();
 console.log(data1);
//  alert(props.data.username + " registration req has been approved");
 props.getAllReq();
 props.setDisplayAlert(true);
 setTimeout(() => {
  props.setDisplayAlert(false);
}, 3000);
  }
  return (
    
  
    <div className="col-md-3 my-3 mx-5">
         
    <div className="card"  style={{width:"18rem"}}>
    <div className="card-body">
      <h5 className="card-title"></h5>
      <h6 className="card-subtitle mb-2 text-muted" style={{fontStyle:"bold"}}>Name : {props.data.username}</h6>
      <p className="card-text" style={{fontStyle:"bold"}} >Email : {props.data.email}</p>
    
      <button type="button" className="btn btn-success  mx-2" onClick={btn_approve} >Approve</button>
    
    </div>
  </div>
  </div>
  
  )
}

export default requestdata