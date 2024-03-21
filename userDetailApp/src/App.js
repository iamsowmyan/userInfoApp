import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import UserList from './pages/UserList';
import UserDetails from './pages/UserDetails';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/userList" />} />
        <Route exact path="/userList" element={<UserList />} />
        <Route exact path="/userDetails/:id" element={<UserDetails />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
