import Product from '../product/Product';
import './home.css';
const Home = () => (
  <div className='home'>
    <div className='home__banner'></div>
    <div className='home__row'>
      <Product
        id='wwsdw'
        title='Hot Rachel sdfasf dfgdf dfdf fdfdf dfdf dfdfdfdfdf dfdfdfdf'
        price={200}
        rating={5}
        image='https://cdn.mos.cms.futurecdn.net/LqCbxVi9XXXushvkFmBv5f-768-80.jpg'
      />
      <Product
        id='sdfdfdsdfdfd'
        title='Hot Rachel sdfasf dfgdf dfdf fdfdf dfdf dfdfdfdfdf dfdfdfdf'
        price={200}
        rating={5}
        image='https://cdn.mos.cms.futurecdn.net/LqCbxVi9XXXushvkFmBv5f-768-80.jpg'
      />
    </div>
  </div>
);

export default Home;
