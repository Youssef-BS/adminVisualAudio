import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, deleteUser } from '../../features/users/userSlice';
import { useNavigate } from 'react-router-dom';
import './users.css';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.users);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const deleteUserSelect = (id) => {
    window.location.reload(false);
    dispatch(deleteUser(id));
  }

  const fetchUser = (id) => {
   navigate(`/userDetails/${id}`) ; 
  }

  return (
    <div className='container'>
      {users.map((user) => (
        <div key={user.id} className='user-card'>
          <div className='user-info'>
            <p><strong>ID:</strong> {user.id}</p>
            <p><strong>First Name:</strong> {user.firstname}</p>
            <p><strong>Last Name:</strong> {user.lastname}</p>
            <p><strong>Code Post:</strong> {user.postcode}</p>
            <p><strong>Email:</strong> {user.email}</p>
          </div>
          <div className='options'>
            <button className='details-btn' onClick={()=> fetchUser(user.id)}>Show Details</button>
            <button className='delete-btn' onClick={() => deleteUserSelect(user.id)}>Delete</button> 
          </div>
        </div>
      ))}
    </div>
  );
}

export default Users;
