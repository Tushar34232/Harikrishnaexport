
import React ,{useState ,useEffect} from 'react'

const adminlogs = () => {
    const [userLogs, setUserLogs] = useState([{}]);
    const getUserLogs = async () => {
        try {
          const response = await fetch('http://localhost:3001/user/userlogs', {
            method: 'GET'
          });
          const data = await response.json();
          setUserLogs(data);
          console.log(data);
        } catch (error) {
          console.error('Error fetching user logs:', error);
        }
      };

      useEffect(() => {
       
        getUserLogs();
      }, []);

  return (
    <>
    <div style={{ textAlign: 'center' }}>
        <h3>User Logs</h3>
      </div>
      <div className="row my-3 mx-5">
        {userLogs.length === 0 ? (
          <h1>No user logs available</h1>
        ) : (
          userLogs.map((log) => (
            <div key={log._id} className="col-md-12 user-log-entry">
            <span className="fw-bold">{log.username}</span> logged in to the portal at 
              <p className="text-muted">{new Date(log.timestamp).toLocaleString()}</p>
            <hr className="my-3" />
          </div>
          
          ))
        )}
      </div>
      </>
  )
}

export default adminlogs