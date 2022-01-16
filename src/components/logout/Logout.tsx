import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebase/firebase';

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    auth
      .signOut()
      .then(() => {
        navigate('/', { replace: true });
      })
      .catch((error) => {
        // An error happened.
      });
  }, []);
  return <div></div>;
};

export default Logout;
