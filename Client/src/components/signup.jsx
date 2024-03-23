import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Signup() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });


  const { username, email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch(`http://localhost:3001/auth/signup`,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      Swal.fire({
        icon: 'success',
        title: 'Registration Complete!',
        text: 'Your registration is complete. wait for admin approval',
  
      });
      navigate('/signin');
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card-body p-5">
            <h1 className="card-title text-3xl text-center font-bold mb-5">Register</h1>
            <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
              <input
                type="text"
                placeholder="Name"
                className="border p-3 rounded-lg"
                id="username"
                value={username}
                onChange={handleChange}
              />
              <input
                type="email"
                placeholder="Email"
                className="border p-3 rounded-lg"
                id="email"
                value={email}
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                className="border p-3 rounded-lg"
                id="password"
                value={password}
                onChange={handleChange}
              />
    
              <button
                disabled={loading}
                className="btn btn-primary btn-block text-uppercase p-3 rounded-lg"
              >
                {loading ? 'Loading...' : 'Submit'}
              </button>
            </form>
            <p className="mt-3 mb-0 text-center">Already have an account? <a href="/signin">Sign In</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
