import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaGem, FaStar, FaCircle } from 'react-icons/fa';

const ProfilePage = ({ userPassword, onPasswordChange }) => {
  const userData = {
    src:'/bgimg.jpg',
    username: 'John Doe',
    email: 'johndoe@example.com',
    subscriptionPlan: 'Gold',
    password:'u3wh4u2' 
  };
  const SubscriptionBadge = ({ plan = userData.subscriptionPlan }) => {
    let icon = null;
  switch (plan.toLowerCase()) {
    case 'gold':
      icon = <FaGem />;
      break;
    case 'silver':
      icon = <FaStar />;
      break;
    default:
      icon = <FaCircle />;
    }
    return (
        <div className="flex items-center my-2 justify-center"  style={{textAlign:"center"}}>
          {icon}
          <span className="ml-2 pl-2 mb-1">{plan}</span>
        </div>
      );
    };
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState(userData.password);
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  
  const handleChangePassword = (e) => {
    e.preventDefault(); 
    setPassword(e.target.value);
    setNewPassword('');
    setConfirmNewPassword('');
  };

  const handleNewPasswordChange = (e) => {
    setNewPassword(e.target.value);
    if (confirmNewPassword !== '' && e.target.value !== confirmNewPassword) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmNewPassword(e.target.value);
    if (e.target.value !== newPassword) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  };


  return (
    <div className="relative flex flex-col items-center min-h-screen bg-[#152238]" style= {{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundImage:  "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(bg.webp)", 
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1
          }}>
      <div className="bg-[#091121] p-5 rounded-lg shadow-md mb-5 mt-16 w-[500px] h-auto z-50">
        <img
          src={userData.src}
          alt="Profile"
          className="rounded-full h-24 w-24 object-cover justify-center mx-auto"
        />
        <div className='bg-[#293b5e] rounded-lg shadow-md my-6 py-4 px-4 text-white text-semibold h-[250px]'>
            <div className='py-2 my-2 scale-150' style={{textTransform: 'uppercase', textAlign: 'center',letterSpacing: '0.3em'}}>
            {SubscriptionBadge(userData.subscriptionPlan)}

            </div>
            <div className='flex py-3 my-2 scale-125 justify-center'><FaEnvelope className='inline-flex mr-4 mt-1'  /> {userData.email}</div>
            <div className='flex py-1 my-2 scale-125 justify-center'><FaUser className='inline-flex mr-4 mt-1' />
            {userData.username}

            </div>
        </div>
        <form>
          
          <div>
            {isEditing ? (<></>) 
            : (
                <>
                <div className='flex flex-row mx-auto justify-around'>
                  <div>
                    <button
                      type="button"
                      onClick={() => setIsEditing(true)}
                      className="bg-[#152238] text-white px-4 py-2 rounded mt-4 mx-5"
                    >
                      Edit Password
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => setIsEditing(true)}
                      className="bg-red-500 text-white px-4 py-2 rounded mt-4 mx-5"
                    >
                      Delete Account
                    </button>
                  </div>
                </div> 
                </>

            )}
          </div>
          {isEditing && (
            <div className="flex flex-col items-center my-2 justify-items-center">
              <label htmlFor="password" className="mr-2 text-white py-2">
                Password
              </label>
              <div className='flex'>
                <input
                  id="old_password"
                  type={showPassword ? 'text' : 'password'}
                  className="px-2 py-2 mb-2 w-md bg-[#293b5e] text-white rounded-lg"
                  placeholder="Enter old password"
                  required
                  alert="Please enter your old password"
                />
                <button
                    type="button"
                    onClick={() => {
                      handleTogglePassword();
                      setIsEditing(true);
                    }}
                    className="text-blue-500 focus:outline-none ml-2"
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              <div className='flex'>
                <input
                  id="new_password"
                  value={newPassword}
                  type={showPassword ? 'text' : 'password'}
                  className="px-2 py-2 mb-2 w-md bg-[#293b5e] text-white rounded-lg"
                  placeholder="Enter new password"
                  required
                  alert="Please enter your new password"
                  onChange={handleNewPasswordChange}
                />
                <button
                    type="button"
                    onClick={() => {
                      handleTogglePassword();
                      setIsEditing(true);
                    }}
                    className="text-blue-500 focus:outline-none ml-2"
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              <div className='flex'>
                <input
                  id="confirm_new_password"
                  value={confirmNewPassword}
                  type={showPassword ? 'text' : 'password'}
                  className="px-2 py-2 mb-2 w-md bg-[#293b5e] text-white rounded-lg"
                  placeholder="Confirm new password"
                  required
                  alert="Please confirm your new password"
                  onChange={handleConfirmPasswordChange}
                />
                
                <button
                    type="button"
                    onClick={() => {
                      handleTogglePassword();
                      setIsEditing(true);
                    }}
                    className="text-blue-500 focus:outline-none ml-2"
                  >
                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              {!passwordMatch && <p className='text-red-500'>Passwords do not match</p>}
              <button id='submit' disabled={!passwordMatch && true} onClick={handleChangePassword} className="bg-gray-800 text-slate-200 hover:bg-[#152238] hover:text-white px-4 py-2 rounded mt-4">
                Save Changes
              </button>
            </div>
          )}
          
        </form>
      </div>
      </div>
  );
};

export default ProfilePage;