import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(true);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const closeSignupModal = () => {
    setIsSignupModalOpen(false);
    // document.body.style.overflow = "auto"; // Allow scrolling on the background
    window.location.href = '/';
  };
  
  const handleSignUp = async () => {
    if (!username) {
      setUsernameError('This field is required');
    } else {
      setUsernameError('');
    }

    if (!email) {
      setEmailError('This field is required');
    } else {
      setEmailError('');
    }

    if(!emailPattern.test(email)){
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('This field is required');
    } else {
      setPasswordError('');
    }

    const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!strongPasswordPattern.test(password)) {
    setPasswordError('Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character');
    return; // Stop execution if password is not strong
  }

    if (username && email && password && emailPattern.test(email) && strongPasswordPattern.test(password)) 
    try{
      console.log(username,email,password)
      const response = await axios.post('http://localhost:8080/api/v1/auth/signup', { "name": username, "email": email, "password": password });
      console.log(response)
      localStorage.setItem('token', response.data.token);
      document.getElementById("overlay").style.display = "block";
      Swal.fire({
        icon: 'success',
        title: 'Signup Successful!',
      })
      .then(function(){
        document.getElementById("overlay").style.display = "none";
        window.location = "http://localhost:3000/";
    });
    }catch (err) {
      const mssg = err.response.status;
      setPassword('');
      if(err.response.status===400){
        document.getElementById("overlay").style.display = "block";
        Swal.fire({
          icon: 'error',
          title: 'User Already Exists',
          text: 'User with this email already exists. Please try again with a different email address.',
        }).then(function(){
          document.getElementById("overlay").style.display = "none";
        });
      }
    }
  };

  return (
    <>
      {isSignupModalOpen && (
        <div className="relative inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 h-[100vh]" style={{
          backgroundImage: " linear-gradient(to bottom, rgba(6, 12, 23, 1), rgba(12, 19, 31, 0.7), rgba(16, 24, 39, 0.7), rgba(18, 29, 47, 0.85), rgba(21, 34, 56, 1)), url('https://img.freepik.com/free-photo/movie-background-collage_23-2149876003.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div id="overlay" className="fixed top-0 left-0 w-[100%] h-[100%] bg-transparent z-50" style={{
            display: "none"
          }}></div>
          <div className="bg-slate-800 text-white shadow-md rounded px-8 pt-6 pb-6 mb-20 max-w-md mx-auto mt-20 w-full relative">
            <button
              onClick={closeSignupModal}
              className="absolute top-0 right-0 mt-2 mr-2 text-white hover:text-gray-400 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-6 pb-4">Sign Up</h2>
            <div className="mb-6 mt-10 text-white">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                Username
              </label>
              <input
                className="appearance-auto  w-full text-white mb-3  focus:outline-none  bg-slate-800"
                style={{ borderBottom: '1px solid #cbd5e0' }}
                id="username"
                type="text"
                autoComplete="off"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {usernameError && <p className="text-red-500 text-xs italic">{usernameError}</p>}
            </div>
            <div className="mb-6">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="appearance-auto  w-full text-white mb-3  focus:outline-none  bg-slate-800"
                style={{ borderBottom: '1px solid #cbd5e0' }}
                id="email"
                type="email"
                autoComplete="off"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {emailError && <p className="text-red-500 text-xs italic">{emailError}</p>}
            </div>
            <div className="mb-6">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input
                className="appearance-auto  w-full text-white mb-3  focus:outline-none  bg-slate-800"
                style={{ borderBottom: '1px solid #cbd5e0' }}
                id="password"
                type="password"
                autoComplete="off"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {passwordError && <p className="text-red-500 text-xs italic">{passwordError}</p>}
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={handleSignUp}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SignUp;
