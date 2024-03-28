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
      <div className=" w-full h-40 z-10 mt-20 flex items-center  text-white justify-center absolute">
      <img
        src={newProfilePhoto}
        alt="Profile"
        className="rounded-full h-24 w-24 object-cover inline-block"
      />
      </div>
      <div className="bg-[#091121] px-4 py-6 mt-32 rounded-lg shadow-md w-96 absolute" >
        <div className='bg-[#293b5e] mt-16 rounded-lg shadow-md my-6 py-4 px-4 text-white text-semibold'>
            <div className='my-2'><FaUser className='inline-flex mr-4' />{userData.username}</div>
            <div className='my-2'><FaEnvelope className='inline-flex mr-4'  /> {userData.email}</div>
            <div className='my-2'>
        {SubscriptionBadge(userData.subscriptionPlan)}
        
      </div>
        </div>
        <form>
        
          {isEditingPassword ? (
            <div className="mb-2">
              <input
                id="oldPassword"
                type="password"
                className="px-2 py-2 mb-2 w-full bg-[#293b5e] text-white rounded-lg"
                placeholder="Enter old password"
              />
              
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
          ):(<div className="flex items-center justify-center"> {/* Container */}
          <button
            type="button"
            onClick={() => setIsEditingPassword(true)}
            className="bg-[#152238] text-white rounded flex items-center justify-center my-3 mx-3 py-2 px-4"
          >
            Edit Password
          </button>
        </div>)}
          
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;