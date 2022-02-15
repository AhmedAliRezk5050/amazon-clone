import React, { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
import { useStateValue } from './context/StateProvider';
import { auth } from './firebase/firebase';
import { removeUser, setUser } from './context/types';
import Logout from './components/logout/Logout';
import NotFound from './components/not-found/NotFound';

function App() {
  const [{ basket, user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      (user) => {
        if (user) {
          dispatch(setUser(user));
        } else {
          dispatch(removeUser());
        }
      },
      (error) => {},
    );

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
          {user && (
            <Route
              path='/checkout'
              element={
                <>
                  <Header />
                  <Checkout />
                </>
              }
            />
          )}
          <Route path='/login' element={<Login />} />
          <Route path='/logout' element={<Logout />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
