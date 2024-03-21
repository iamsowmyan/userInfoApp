import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import UserListTable from '../../molecules/UserListTable/UserListTable';
import './style.css';

const UserList = () => {
  const navigate = useNavigate();
  const title = 'User Detail List';
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  // const accessToken = process.env.REACT_APP_GITHUB_ACCESS_TOKEN;
  useEffect(() => {
    fetchData();
  }, [page, rowsPerPage]);


  const fetchData = async () => {
    try {
      const { data } = await axios.get(`https://api.github.com/users?per_page=${rowsPerPage}&page=${page+1}`);
      setData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleRowClick = (rowData) => {
    navigate(`/userDetails/${rowData.login}`);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <div className="titleContainer">{title}</div>
      <UserListTable 
        data={data} 
        handleRowClick={handleRowClick}
        rowsPerPage={rowsPerPage}
        page={page}
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}
       />
    </>
  );
}

export default UserList;
