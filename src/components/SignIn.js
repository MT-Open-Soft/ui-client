import React, { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(true);
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
    // document.body.style.overflow = "auto"; // Allow scrolling on the background
    window.location.href = '/';
  };

  const handleSignIn = async () => {
    console.log(email);
    console.log(password);
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

    if (email && password && emailPattern.test(email) && strongPasswordPattern.test(password)) {
      try {
        const response = await axios.post('http://localhost:8080/api/v1/auth/signin', { email, password });
        if (response.status === 200) {
          console.log(response);
          localStorage.setItem('token', response.data.token);
          localStorage.setItem('name', response.data.name);
          localStorage.setItem('subscription', response.data.subscription);
        }

        setIsLoggedIn(true);
        if(response.status===200){
          Swal.fire({
            icon: 'success',
            title: 'Login Successful!',
            text: 'You are now logged in.',
          });
          closeLoginModal();
        }
      } catch (err) {
        const mssg = err.response.status;
        setPassword('');
        if(err.response.status===401){
          Swal.fire({
            icon: 'error',
            title: 'Invalid Password',
            text: 'Please enter a valid password.',
          });
        }
        else if(err.response.status===400){
          Swal.fire({
            icon: 'error',
            title: 'User Not Found',
            text: 'The username you entered was not found. Please try again.',
          });
        }
      }
    }
  };

  return (
    <>
      {isLoginModalOpen && (
        <div className="relative inset-0 flex items-center justify-center bg-black bg-opacity-50 h-[100vh]" style={{
          backgroundImage: " linear-gradient(to bottom, rgba(6, 12, 23, 1), rgba(12, 19, 31, 0.7), rgba(16, 24, 39, 0.7), rgba(18, 29, 47, 0.85), rgba(21, 34, 56, 1)), url('https://img.freepik.com/free-photo/movie-background-collage_23-2149876003.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div className="bg-slate-800 text-white shadow-md rounded px-8 pt-6 pb-6 mb-20 max-w-sm mx-auto mt-20 w-full relative">
            <button
              onClick={closeLoginModal}
              className="absolute top-0 right-0 mt-2 mr-2 text-white hover:text-gray-400 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-2xl font-bold mb-6">FLIX TV</h2>

            <div className="mb-6 mt-10 text-white">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="appearance-auto  w-full  text-white mb-3  focus:outline-none  bg-slate-800"
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
                onClick={handleSignIn}
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SignIn;
