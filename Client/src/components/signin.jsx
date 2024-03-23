import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Signin() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const { email, password } = formData;

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();

      console.log(formData);

      try {
          // Check if its aan admin login
          if (email === 'admin@hk.co' && password === 'hk@123') {
              navigate('/adminstartup');
              localStorage.setItem('login','loggedIn');
          } else {
              // Otherwise im proceed with regular login
              const response = await fetch('http://localhost:3001/auth/signin', {
                  method: 'POST',
                  headers: {
                      'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(formData),
              });
              const data = await response.json();

              if (data.approvalStatus === 'approved') {
                  navigate('/');
                  localStorage.setItem('login','loggedIn');
              } else if (data.approvalStatus === 'pending') {
                  Swal.fire({
                      icon: 'info',
                      title: 'Wait for Approval',
                      text: 'Your registration is pending approval. Please wait until it is approved by the admin.',
                  });
              } else if (data.approvalStatus === 'rejected') {
                  Swal.fire({
                      icon: 'error',
                      title: 'Registration Rejected',
                      text: 'Your registration has been rejected by the admin. Please contact support for further assistance.',
                  });
              }
          }
      } catch (error) {
          console.error('Error:', error);
          // Handle error
          Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong! Please try again later.',
          });
      }
  };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                   
       <div className="card-body p-5">
                        <h1 className="text-3xl text-center font-bold mb-5">Login</h1>
                        <form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
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
                                className="border rounded-lg p-3"
                                id="password"
                                value={password}
                                onChange={handleChange}
                            />
                            <button
                                type="submit"
                                className="btn btn-primary btn-block text-uppercase p-3 rounded-lg"
                            >
                                Submit
                            </button>
                        </form>
                        <p className="mt-3 mb-0 text-center">Don't have an account? <a href="/signup">Sign Up</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
