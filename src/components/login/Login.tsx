import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { FormEvent, useState } from 'react';
import { login, signUp } from '../../firebase/firebase';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email && password) {
      const { user, error } = await login(email, password);
      if (error) {
        alert(error.message);
        return;
      }
      navigate('/');
    } else {
      alert('Provide email and password');
    }
  };
  const handleSignup = async () => {
    if (email && password) {
      const { user, error } = await signUp(email, password);
      if (error) {
        alert(error.message);
        return;
      }
    } else {
      alert('Provide email and password');
    }
  };
  return (
    <div className='login'>
      <Link to='/'>
        <img
          src='http://pngimg.com/uploads/amazon/amazon_PNG1.png'
          alt=''
          className='login__logo'
        />
      </Link>
      <form className='login__form' onSubmit={handleLogin}>
        <h1 className='login__title'>Sign-in</h1>
        <div className='login__inputContainer'>
          <label htmlFor='email' className='login__inputLabel'>
            E-email
          </label>
          <input
            type='text'
            id='email'
            className='login__input'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='login__inputContainer'>
          <label htmlFor='password' className='login__inputLabel'>
            Password
          </label>
          <input
            type='password'
            id='password'
            className='login__input'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className='login__button' type='submit'>
          Sign in
        </button>
        <p className='login__info'>
          By signing in, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button
          className='login__createAccountButton'
          type='button'
          onClick={handleSignup}
        >
          Create your Amazon account
        </button>
      </form>
    </div>
  );
};

export default Login;
