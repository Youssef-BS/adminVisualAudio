import React from 'react';
import './users.css';

const Users = () => {
  return (
    <div className='container-users'>
      <div className='user'>
        <div className='options'>
          <button>Show details</button>
          <button>Delete</button>
        </div>
      </div>        
    </div>
  );
}

export default Users;
