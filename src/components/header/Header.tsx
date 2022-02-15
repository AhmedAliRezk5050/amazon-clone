import './header.css';
import { Link, useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from '../../context/StateProvider';
import { auth } from '../../firebase/firebase';
import { getBasketProductsCount } from '../../context/reducer';

const Header = () => {
  const [{ user, basket }] = useStateValue();
  const navigate = useNavigate();
  const handleLogout = () => {
    if (user) {
      auth
        .signOut()
        .then(() => {
          // navigate('/', { replace: true });
        })
        .catch((error) => {
          // An error happened.
        });
    }
  };
  return (
    <nav className='header'>
      <Link to='/'>
        <img
          src='https://pngimg.com/uploads/amazon/amazon_PNG25.png'
          alt=''
          className='header__logo'
        />
      </Link>
      <div className='header__search'>
        <input type='text' className='header__searchInput' />
        <SearchIcon className='header__searchIcon' height='38px' />
      </div>

      <div className='header__nav'>
        <Link to={user ? '/' : '/login'} className='header__link'>
          <div className='header__option' onClick={handleLogout}>
            <span className='header__optionLineOne'>
              hello, {user && user.email}
            </span>
            <span className='header__optionLineTwo'>
              {user ? 'logout' : 'sign in'}
            </span>
          </div>
        </Link>
        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Returns</span>
            <span className='header__optionLineTwo'>& Orders</span>
          </div>
        </Link>
        <Link to='/' className='header__link'>
          <div className='header__option'>
            <span className='header__optionLineOne'>Your</span>
            <span className='header__optionLineTwo'>Prime</span>
          </div>
        </Link>
        {user && (
          <Link to='/checkout' className='header__link'>
            <div className='header__optionBasket'>
              <ShoppingBasketIcon className='header__basketIcon' />
              <span className='header__optionLineTwo header__basketCount'>
                {getBasketProductsCount(basket)}
              </span>
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Header;
