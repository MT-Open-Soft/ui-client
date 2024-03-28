import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaGem, FaStar, FaCircle } from 'react-icons/fa';

const ProfilePage = () => {
  const userData = {
    src:'imgurl',
    username: 'JohnDoe',
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
        <div className="flex items-center">
          {icon}
          <span className="ml-2 pl-2">{plan}</span>
        </div>
      );
    };
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleTogglePassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const [newProfilePhoto, setNewProfilePhoto] = useState(userData.src);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewProfilePhoto(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userData.src = newProfilePhoto;
  };
  return (
    <div className="flex flex-col items-center min-h-screen bg-[#152238]">
      <div className="bg-[#091121] w-full h-40 flex items-center  text-white justify-center">
      <img
        src={newProfilePhoto}
        alt="Profile"
        className="rounded-full h-24 w-24 object-cover inline-block"
      />
      </div>
      <div className="bg-[#091121] p-4 mt-4 rounded-lg shadow-md w-96" >
        <div className='bg-[#293b5e] rounded-lg shadow-md my-6 py-4 px-4 text-white text-semibold'>
            <div className='my-2'><FaUser className='inline-flex mr-4' />{userData.username}</div>
            <div className='my-2'><FaEnvelope className='inline-flex mr-4'  /> {userData.email}</div>
            <div className='my-2'>
        {SubscriptionBadge(userData.subscriptionPlan)}
        
      </div>
        </div>
        <form>
          
          
          <div className="items-center">
            <label htmlFor="password" className="mr-2 text-white py-2">
              Password
            </label>
            <input 
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  className=" px-2 mr-4 py-2 mb-2 w-md bg-[#293b5e] text-white rounded-lg"
                  value={userData.password}
                  readOnly
                />
            <button
                type="button"
                onClick={handleTogglePassword}
                className="text-blue-500 focus:outline-none"
            >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>

            {isEditingPassword ? (
              <></>
            ) : (
              <button
                type="button"
                onClick={() => setIsEditingPassword(true)}
                className="bg-[#152238] text-white px-4 py-2 rounded mt-4 mx-5"
              >
                Edit
              </button>
            )}
          </div>
          {isEditingPassword && (
            <div className="mb-2">
              
              <input
                id="newPassword"
                type="password"
                className="px-2 py-2 mb-2 w-md bg-[#293b5e] text-white rounded-lg"
                placeholder="Enter new password"
              />
              <button className="bg-[#152238] text-white px-4 py-2 rounded mt-4 ml-6">
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