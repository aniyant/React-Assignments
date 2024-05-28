import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const goToProducts = () => {
    navigate('/products');
  };

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <button onClick={goToProducts}>Go to Products</button>
    </div>
  );
};

export default Home;
