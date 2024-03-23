import React, { useState, useEffect } from 'react';
import Requestdata from './requestdata';
import Alert from './alert';

const Adminpage = () => {
  const [reqdata, setReqdata] = useState([]);
  
  const [displayAlert, setDisplayAlert] = useState(false); 
  const getAllReq = async () => {
    try {
      const response = await fetch('http://localhost:3001/user/pending', {
        method: 'GET'
      });
      const data = await response.json();
      setReqdata(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching requests:', error);
    }
  };

 

  useEffect(() => {
    getAllReq();
   
  }, []);

   const setAlert =(value) =>{
     setDisplayAlert(value);
   }
  return (
    <>
    {displayAlert &&<Alert></Alert>}
   
    <div className='container'>
      <div style={{ textAlign: 'center' }}>
        <h3>All Pending Requests</h3>
      </div>
      <div className="row my-3 mx-5">
        {reqdata.length === 0 ? (
          <h1>No req available</h1>
        ) : (
          reqdata.map((data) => (
            <Requestdata data={data} getAllReq={getAllReq} key={data._id} setDisplayAlert={setAlert} />
          ))
        )}
      </div>
     
    </div>
    </>
  );
};

export default Adminpage;