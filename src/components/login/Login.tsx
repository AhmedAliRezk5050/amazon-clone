import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { FormEvent, useEffect, useState } from 'react';
import { login, signUp } from '../../firebase/firebase';

const createErrorMessage = (error: string) =>
  error
    .replace(/(Firebase)|(Error)|(:)|(auth\/)|(\()|(\))/g, '')
    .replace(/-/g, ' ');

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (successMessage) {
      setFormError(null);
    }
    if (formError) {
      setSuccessMessage('');
    }
  }, [successMessage, formError]);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError(null);
    setSuccessMessage('');
    if (email && password) {
      const { user, error } = await login(email, password);
      if (error) {
        setFormError(
          error.message
            ? createErrorMessage(error.message)
            : 'Operation Failed',
        );
        return;
      }
      navigate('/');
    } else {
      setFormError('Provide email and password');
    }
  };
  const handleSignup = async () => {
    setFormError(null);
    setSuccessMessage('');
    if (email && password) {
      const { user, error } = await signUp(email, password);
      if (error) {
        setFormError(
          error.message
            ? createErrorMessage(error.message)
            : 'Operation Failed',
        );
        return;
      }
      setSuccessMessage('Signed up successfully');
    } else {
      setFormError('Provide email and password');
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
        {formError && (
          <div className='login__error'>
            <p>{formError}</p>
          </div>
        )}
        {successMessage && (
          <div className='login__success'>
            <p>{successMessage}</p>
          </div>
        )}
        <div className='login__inputContainer'>
          <label htmlFor='email' className='login__inputLabel'>
            E-email
          </label>
          <input
            type='text'
            id='email'
            placeholder='Email'
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
            placeholder='Password'
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
