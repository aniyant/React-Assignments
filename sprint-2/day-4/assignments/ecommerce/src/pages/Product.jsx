import React from 'react';
import { useParams,Link} from 'react-router-dom';

export const Product = () => {
    const baseUrl = " https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products";

    const [product, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const {product_id} = useParams();

    const fetchData = (url) =>{
        console.log(url);
        setLoading(true);
        fetch(url)
           .then(res => res.json())
           .then(data => {
                    setProducts(data.data);
                    setLoading(false);
                })
           .catch(err=> {
                    setLoading(false);
                    setError(true)
                })
    }
    React.useEffect(() => {
        fetchData(`${baseUrl}/${product_id}`);
    }, [])
    
  return (
    <div>
        <h2>Product Information</h2>
        {loading && <h3>Loading...</h3>}
        {error && <h3>Error Occured While Loading..</h3>}
        <div>
            <img src={product.image} alt={product.title} />
            <p>{product.title}</p>
            <p>{product.brand}</p>
            <p>{product.category}</p>
            <p>{product.price}</p>
        </div>
    </div>
  )
}
