import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../features/users/userSlice';
import { useParams } from 'react-router-dom';
import './userDetails.css'; 

const UserDetails = () => {
  const dispatch = useDispatch();
  let { id } = useParams();
  const user = useSelector((state) => state.user.userSelect); 

  useEffect(() => {
    dispatch(getUser(id)); 
  }, [dispatch, id]);

  console.log(user);

  return (
    <div className='user-details-container'>
      {user && ( 
        <div className='user-details'>
          <h2>User Details</h2>
          <p><strong>ID:</strong> {user.id}</p>
          <p><strong>First Name:</strong> {user.firstname}</p>
          <p><strong>Last Name:</strong> {user.lastname}</p>
          <p><strong>Code Post:</strong> {user.postcode}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Tel:</strong> {user.telephone}</p>
          <p><strong>Website:</strong> {user.website}</p>
          <p><strong>Country:</strong> {user.country}</p>
          <p><strong>City:</strong> {user.city}</p>
          <p><strong>Company:</strong> {user.company}</p>
          <p><strong>isVerified:</strong> {user.isVerified ? "yes" : "no"}</p>
          <p><strong>Created At:</strong> {user.createdAt}</p>
          <p><strong>Vat:</strong> {user.vat}</p>
        </div>
      )}
    </div>
  );
}

export default UserDetails;
