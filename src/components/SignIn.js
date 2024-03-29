<<<<<<< HEAD

import React, { useState } from 'react';

=======
import React, { useState ,useEffect} from 'react';
import axios from 'axios';
>>>>>>> 021be03665975373055a888e6a517cb9d961d92a
function SignIn({ closeLoginModal }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignIn = async() => {
    console.log (email)
    console.log(password)
    if (!email) {
      setEmailError('This field is required');
    } else {
      setEmailError('');
    }

    if (!password) {
      setPasswordError('This field is required');
    } else {
      setPasswordError('');
    }

    if (email && password) {
      try{
      const response = await axios.post('http://localhost:8080/api/v1/auth/signin', { email, password });
      if (response.status === 200){
      console.log(response)
      localStorage.setItem('token', response.data.token);
      }
      
      
      setIsLoggedIn(true);
      closeLoginModal();
    }catch(err){
      const mssg = err.response.data.error.message
      setPassword("")
      
      alert(mssg)
    }
  }
    
    

<<<<<<< HEAD
    localStorage.setItem('password', password);
    localStorage.setItem('email', email);
=======
    
>>>>>>> 021be03665975373055a888e6a517cb9d961d92a

  };

  
 
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-slate-800 text-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-sm mx-auto mt-20 w-full relative">
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
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

        <div className="flex items-center justify-between block">
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
  );
}

export default SignIn;
