import React from 'react';
import './style.css';
import Avatar from '@mui/material/Avatar';

const UserAvatar = ({ profilePicture, loginName, avatarName }) => {
  return (
    <div className="avatarContainer">
      <Avatar alt={loginName} src={profilePicture} className="profileContainer" />
      <div className="avatarName">{avatarName}</div>
    </div>
  );
}
export default UserAvatar;