import React, { useMemo } from 'react';
import './style.css';
import UserAvatar from '../../atoms/UserAvatar';

const UserSpecificDetails = ({ data }) => {
  const detailItem = useMemo(() => {
    return [
      { label: 'Email:', value: data.email || '-' },
      { label: 'Company:', value: data.company || '-' },
      { label: 'Location:', value: data.location || '-' },
      { label: 'No. of followers:', value: data.followers || '-' },
      { label: 'No. of following:', value: data.following || '-' },
      { label: 'No. of public repositories:', value: data.public_repos || '-' },
      { label: 'Twitter Handle:', value: data.twitter_username || '-' },
      { label: 'Blog:', value: data.blog || '-' },
    ];
  }, [data]);
  return (
    <div className="userDetailContainer">
      <div className="userDetail">
        <UserAvatar profilePicture={data.avatar_url} loginName={data.login}  avatarName={data.name} />
        {detailItem.map(item => (
          <div className="itemContainer">
            <div className="labelContainer">{item.label}</div>
            <div>{item.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserSpecificDetails;
