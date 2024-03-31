import { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaGem, FaStar, FaCircle } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { set } from 'date-fns';
import baseURL from './Config.js'

const SubscriptionBadge = ({ user_plan }) => {
  let icon = null;
  switch (user_plan?.toLowerCase() || 'default') {
    case 'gold': 
    icon = <FaGem color='#eab308' />
    break;
    case 'silver': 
    icon = <FaStar color='#cbd5e1' />
    break;
    default: 
    icon = <FaCircle color='#1d4ed8' />;
  }
  return (
    <div className="flex items-center my-2 justify-center" style={{ textAlign: "center" }}>
      {icon}
      <span className="ml-2 pl-2">{user_plan}</span>
    </div>
  );
};

const ProfilePage = ({ userPassword, onPasswordChange }) => {
  var token = localStorage.getItem('token');
  const apiURL = baseURL+"/user";
  const [userData, setUserData] = useState(null);
  const userDisplay = {
    src: '/default-avatar.png',
    username: userData?.name || 'Username',
    email: userData?.email || 'Email',
    plan: userData?.subscription || 'free',
  };
  useEffect(() => {
    const getUserData = async () => {
      const result = await axios
      .get(`${apiURL}`, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
      .then((res) => {
        console.log(res.data);
        return res.data;
      })
      .catch((e) => {
        console.error(e)
        setError(e.response.data.error.message);
      });
      console.log('result', result)
    if(result) {
      setUserData(result);
    }}
    getUserData();
    
  }, []);
  
  
  console.log("userData", userData);
  
  console.log("userDisplay", userDisplay);
  const [isEditing, setIsEditing] = useState(false);
  const [showOldPassword, setOldShowPassword] = useState(false);
  const [showNewPassword, setNewShowPassword] = useState(false);
  const [showConfirmNewPassword, setConfirmNewShowPassword] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [updatePasswordError, setUpdatePasswordError] = useState('');
  const [emptyFieldError, setEmptyFieldError] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [deleteError, setDeleteError] = useState(false);
  const [passwordError, setPasswordError] = useState('');

  const handleToggleOldPassword = () => {

        setOldShowPassword((prevOldShowPassword) => !prevOldShowPassword);
      };
      const handleToggleNewPassword = () => {
        setNewShowPassword((prevNewShowPassword) => !prevNewShowPassword);
      };
      const handleToggleConfirmNewPassword = () => {
        setConfirmNewShowPassword((prevConfirmNewShowPassword) => !prevConfirmNewShowPassword);
      };
    
      const handleOldPasswordChange = (e) => {
        setOldPassword(e.target.value);
        isEmptyField();        
      };

      const navigate = useNavigate();

      const handleNewPasswordChange = (e) => {
        setNewPassword(e.target.value);
        if (confirmNewPassword !== '' && e.target.value !== confirmNewPassword) {
          setPasswordMatch(false);
        } else {
          setPasswordMatch(true);
        }
        isEmptyField();
      };
    
      const handleConfirmPasswordChange = (e) => {
        setConfirmNewPassword(e.target.value);
        if (e.target.value !== newPassword) {
          setPasswordMatch(false);
        } else {
          setPasswordMatch(true);
        }
        isEmptyField();
      };

      const isEmptyField = () => {
        if(oldPassword === '' || newPassword === '' || confirmNewPassword === '') {
          setEmptyFieldError(true);
        } else {
          setEmptyFieldError(false);
        }
      }
      const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

      const handleSubmit = async(e) => {
        e.preventDefault();
        if(!oldPassword || !newPassword || !confirmNewPassword) {
          setEmptyFieldError(true);
          console.log('Please fill in all fields');
          return;
        }
        else if (!strongPasswordPattern.test(newPassword)) {
            setPasswordError('Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character');
            return; // Stop execution if password is not strong
          }
        
        console.log("token",token)
    
        const result = await axios
            .put(`${apiURL}/password`, {oldPassword, newPassword}, {
              headers: {
                "Authorization": `Bearer ${token}`
              }
            })
            .catch((e) => {
              console.error(e)
              setIsError(true);
              setUpdatePasswordError(e.response.data.error.message);
            });
    
        if(result) {
          setEmptyFieldError(false)
          setIsError(false)
          setDeleteError(false);
          setSuccess(true);
          setOldPassword('');
          setNewPassword('');
          setConfirmNewPassword('');
          setIsEditing(false);
        }    
    }
    
    const handleDeleteAccount = async(e) => {
      e.preventDefault();
      const result = await axios
          .delete(`${apiURL}`, {
            headers: {
              "Authorization": `Bearer ${token}`
            }
          })
          .catch((e) => {
            console.error(e)
            setError(e.response.data.error.message);
            Swal.fire({
              icon: 'success',
              title: 'Cannot Delete Account!',
              text: e.response.data.error.message,
              toast: true,
              allowEscapeKey: false,
              allowOutsideClick: false,
            })
          });
          
        if(result) {
          localStorage.removeItem('token');
          Swal.fire({
            icon: 'success',
            title: 'Account Deleted Successfully!',
            toast: true,
          })
          .then(function(){
                window.location.href = "/";
          });
        }
      }

    const handleRedirect = () => {
      setIsEditing(false);
    }

    const handleClose = () => {
      navigate(`/`);
    };

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-[#152238]" style={{
      position: 'relative',
      width: '100%',
      height: '100%',
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(bg.jfif)",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      zIndex: 1
    }}>
      <button 
      onClick={handleClose} 
      className="absolute top-5 right-5 text-white text-2xl">
        X
    </button>
      <div id="overlay" className="fixed top-0 left-0 w-[100%] h-[100%] bg-transparent z-50" style={{
        display: "none"
      }}></div>
      <div className="bg-[#091121] p-5 rounded-lg shadow-md mb-5 mt-16 w-[500px] h-auto z-50 box-border border-2 border-yellow-600">
        <img
          src={userDisplay.src}
          alt="Profile"
          className="rounded-full h-24 w-24 object-cover justify-center mx-auto"
        />
        <div className='bg-[#293b5e] rounded-lg shadow-md my-6 py-4 px-4 text-white text-semibold h-[250px]'>
          <div className='py-2 my-2 text-2xl' style={{ textTransform: 'uppercase', textAlign: 'center', letterSpacing: '0.3em' }}>
            <SubscriptionBadge user_plan={userDisplay.plan} />
          </div>
          <div className='flex py-3 my-2 text-xl justify-start'><FaEnvelope className='inline-flex mr-4 mt-1' /> {userDisplay.email}</div>
          <div className='flex py-1 my-2 text-xl justify-start'><FaUser className='inline-flex mr-4 mt-1' />{userDisplay.username}</div>
        </div>

        <form name='password_change' onSubmit>
          <div>
            {isEditing ? (<></>) 
            : (
              <div>
                <div className='flex justify-center mb-4'>
                  <div>
                    <button
                      type="button"
                      onClick={() => setIsEditing(true)}
                      className="bg-[#152238] text-white px-4 py-2 rounded mt-4 mx-5 text-sm"
                    >
                    Edit Password
                    </button>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={handleDeleteAccount}
                      className="bg-red-500 text-white px-4 py-2 rounded mt-4 mx-5 text-sm"
                    >
                    Delete Account
                    </button>
                  </div>
                </div> 
                {success && <div className='text-green-500 text-xs italic text-center my-4'>Password changed successfully</div>}
              </div>
            )}
          </div>
          {isEditing && (
            <div className="flex flex-col items-center my-2 justify-items-center">
              <label className="mr-2 text-lg text-white py-2">
                Edit Password
              </label>
              <div className='flex'>
                <input
                  id="old_password"
                  value={oldPassword}
                  type={showOldPassword ? 'text' : 'password'}
                  className="px-2 py-2 mb-2 w-md bg-[#293b5e] text-white rounded-lg"
                  placeholder="Old password"
                  required
                  onChange={handleOldPasswordChange}
                />

                <button
                    type="button"
                    onClick={() => {
                      handleToggleOldPassword();
                    }}
                    className="text-blue-500 focus:outline-none ml-2"
                  >
                    {showOldPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              <div className='flex'>
                <input
                  id="new_password"
                  value={newPassword}
                  type={showNewPassword ? 'text' : 'password'}
                  className="px-2 py-2 mb-2 w-md bg-[#293b5e] text-white rounded-lg"
                  placeholder="New password"
                  required
                  alert="Please enter your new password"
                  onChange={handleNewPasswordChange}
                />

                <button
                    type="button"
                    onClick={() => {
                      handleToggleNewPassword();
                    }}
                    className="text-blue-500 focus:outline-none ml-2"
                  >
                    {showNewPassword ? <FaEye /> : <FaEyeSlash />}
                </button>

              </div>
              {passwordError && <p className="text-red-500 text-xs italic">{passwordError}</p>}

              <div className='flex'>
                <input
                  id="confirm_new_password"
                  value={confirmNewPassword}
                  type={showConfirmNewPassword ? 'text' : 'password'}
                  className="px-2 py-2 mb-2 w-md bg-[#293b5e] text-white rounded-lg"
                  placeholder="Confirm new password"
                  required
                  alert="Please confirm your new password"
                  onChange={handleConfirmPasswordChange}
                />
                
                <button
                    type="button"
                    onClick={() => {
                      handleToggleConfirmNewPassword();
                    }}
                    className="text-blue-500 focus:outline-none ml-2"
                  >
                    {showConfirmNewPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              {!passwordMatch && <div className='text-red-500 text-xs italic'>Passwords do not match</div>}
              {emptyFieldError && <div className='text-red-500 text-xs italic'>Please fill in all fields</div>}
              {isError && <div className='text-red-500 text-xs italic'>{error}</div>}
              {isError && <div className='text-red-500 text-xs italic'>{updatePasswordError}</div>}
              {deleteError && <div className='text-red-500 text-xs italic'>{error}</div>}
              <div className='flex'>
              <button 
                id='submit' 
                disabled={!passwordMatch && true} 
                onClick={handleSubmit} 
                className="bg-gray-800 text-slate-200 hover:bg-[#152238] hover:text-white px-4 py-2 rounded mt-4 text-sm">
                Save Changes
              </button>
              <button
                type="button"
                onClick={handleRedirect}
                className="bg-red-500 text-white px-4 py-2 rounded mt-4 mx-5 text-sm"
              >
              Cancel
              </button>
              </div>
            </div>
          )}
          
        </form>
        
      </div>
    </div>
  );
};

export default ProfilePage;