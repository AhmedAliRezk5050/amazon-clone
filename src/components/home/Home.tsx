import { useEffect, useReducer, useState } from 'react';
import Product from '../product/Product';
import './home.css';

interface Product {
  id: string;
  title: string;
  price: number;
  rating: number;
  image: string;
}

const Home = () => {
  const [products, setProducts] = useState<Product[]>();

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    setError(null);

    fetch('https://clone-bd963-default-rtdb.firebaseio.com/products.json')
      .then((response) => response.json())
      .then((response) => {
        const fetchedProducts: Product[] = [];
        for (const key in response) {
          fetchedProducts.push({
            id: key,
            ...response[key],
          });
        }
        setProducts(fetchedProducts);
        setLoading(false);
        setError(null);
      })
      .catch((e) => {
        setLoading(false);
        setError(e.message ? e.message : 'Error Fetching Products');
      });
  }, []);

  const renderProducts = () => {
    if (loading) {
      return <h1>Loading...</h1>;
    }

    if (error) {
      return <h1>{error}</h1>;
    }

    if (!products || products.length === 0) {
      return <h1>No Products Found</h1>;
    }

    return products.map(({ id, title, image, price, rating }) => (
      <Product
        key={id}
        id={id}
        title={title}
        price={price}
        rating={rating}
        image={image}
      />
    ));
  };
  return (
    <div className='home'>
      <div className='home__banner'></div>
      <div className='home__row'>{renderProducts()}</div>
    </div>
  );
};

export default Home;
