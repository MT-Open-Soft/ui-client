// ChangePasswordForm.js
import React, { useState } from 'react';

const ChangePasswordForm = ({ onChangePassword }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleChangePassword = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      // Call the onChangePassword function with the new password
      onChangePassword(password);
      // Clear form fields
      setPassword('');
      setConfirmPassword('');
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <form onSubmit={handleChangePassword}>
      <h2>Change Password</h2>
      <div>
        <label>New Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <label>Confirm Password:</label>
        <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      </div>
      <button type="submit">Change Password</button>
    </form>
  );
}

export default ChangePasswordForm;
