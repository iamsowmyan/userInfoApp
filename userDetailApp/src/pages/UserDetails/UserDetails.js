import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UserSpecificDetails from '../../molecules/UserSpecificDetails/UserSpecificDetails';

const UserDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchUserSpecificData = async () => {
      try {
        const { data } = await axios.get(`https://api.github.com/users/${id}`);
        setData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchUserSpecificData();
  }, []);
  return (
    <UserSpecificDetails data={data} />
  );
}

export default UserDetails;