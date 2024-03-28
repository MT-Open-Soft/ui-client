import React from 'react';

function SignIn({ closeLoginModal }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-slate-800 text-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md mx-auto mt-20 w-full">
          <h2 className='text-2xl font-bold mb-6'>FLIX TV</h2>
      
          <div className="text-white mb-4 pb-4">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
      
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
      
          <div>
            <label className="flex items-center pb-4">
              <input type="checkbox" id="rememberMe" name="rememberMe" className="mr-2" />
              <span className="text-gray-700 text-sm">Remember Me</span>
            </label>
          </div>
      
          <div className="flex items-center justify-between block">
            <button
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={closeLoginModal}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
  );
}

export default SignIn;