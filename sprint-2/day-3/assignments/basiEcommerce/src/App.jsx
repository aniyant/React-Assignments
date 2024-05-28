import { useState, useEffect,useContext } from 'react'
import './App.css'
import { ProductList } from './ProductList';
import { AuthContext } from './AuthContextProvider';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() =>{
    fetchData();
  },[]);
  const fetchData = () => {
    fetch('https://fakestoreapi.com/products')
   .then(res => res.json())
   .then(data => setProducts(data))
   .catch(err =>console.log(err));
  };

  const [loggedIn,setLoggedIn] = useContext(AuthContext);
  // console.log(products);
  // products.forEach(product => console.log(product));
  return (
    <>
      <h1>Welcome To Ecommerce</h1>
      <nav>
        <button onClick={fetchData}>Product</button>
        <button onClick={()=>setLoggedIn(!loggedIn)}>Login</button>
      </nav>
      {loggedIn ? <h3>You are Logged In.</h3>:<h3>Please Log In first</h3>}
      {loggedIn && <ProductList products={products} />}
    </>
  )
}

export default App
