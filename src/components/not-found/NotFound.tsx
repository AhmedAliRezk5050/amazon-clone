import React from 'react';
import { Link } from 'react-router-dom';
import './not-found.css';

const NotFound = () => {
  return (
    <div className='not-found'>
      <h2>Page is not found</h2>
      <div className='link-wrapper'>
        Back to <Link to='/'>Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
