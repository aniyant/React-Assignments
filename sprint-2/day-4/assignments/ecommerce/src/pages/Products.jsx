import React from 'react'
import { Navigate,useNavigate,Link , useSearchParams } from 'react-router-dom';

export const Products = () => {
    const baseUrl = " https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-products";

    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const navigate = useNavigate();
    const [searchParams,setSearchParams] = useSearchParams();
    const [page,setPage] = React.useState(Number(searchParams.get('page')) || 1);
    const [filter, setFilter] = React.useState({filter:searchParams.get('filter') || '',price:searchParams.get('order')} || "");

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
        let queryParams = new URLSearchParams({
            page:page,
            limit:4
        });

        filter.filter ? queryParams.append('filter',filter.filter):queryParams
        filter.price? queryParams.append("sort","price"):queryParams;
        filter.price? queryParams.append("order",filter.price):queryParams

        // queryParams = (filter.filter? `&filter=${filter.filter}`: '')+ (filter.price? `&sort=price&order=${filter.price}`:'');
        fetchData(`${baseUrl}?${queryParams}`);
        
    }, [page,filter])
    // console.log(products);
    React.useEffect(() => {
        let queryParams = {};
        queryParams.page = page;
        queryParams.limit = 4;

        if(filter.filter){
            queryParams.filter = filter.filter;
        }
        if(filter.price){
            queryParams.sort = "price";
            queryParams.order = filter.price;
        }
        setSearchParams(queryParams);
      }, [page,filter]);
    

    const handleClick = (e,id) => {
        // console.log(id);
        navigate(`/products/${id}`);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilter((prev) => ({
            ...prev,
            [name]: value === "all" ? null : value
        }));
        setPage(1);
    };
    return (
        <div>
            {loading && <h4>Loading...</h4>}
            {error && <h4>Error Occured While Loading...</h4>}
            <div style={{display:"flex",gap:"30px", justifyContent:"center",alignContent:"center"}}>
                <button>
                <label htmlFor='filter'>Category: </label>
                <select name="filter" id="filter" value={filter.filter} onChange={handleChange}>
                    <option value="all">All</option>
                    <option value="men">Men</option>
                    <option value="women">Women</option>
                    <option value="kids">Kids</option>
                </select>
                </button>
                <button>
                <label htmlFor='price'>Price: </label>
                <select name="price" id="price" value={filter.price} onChange={handleChange}>
                    <option value="asc">low to high</option>
                    <option value="desc">high to low</option>
                </select>
                </button>
            </div>
            <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
            margin: "20px"
        }}>
            {
                products.map(product => {
                    return (
                    // <Link key={product.id} to={`/products/${product.id}`}>
                    <div
                     key={product.id}
                     style={{
                        width: "200px",
                        border: "1px ridge",
                        padding: "10px",
                        margin: "10px",
                        display: "flex",
                        textAlign:"left",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "10px",
                        cursor: "pointer",
                        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.2)",
                        transition: "all 0.5s ease-in-out",
                        "&:hover": {
                            boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.5)"
                        }
                     }}
                     onClick={(e)=>handleClick(e,product.id)} >
                        <img src={product.image} alt={product.title} style={{display:"block"}}/> 
                        <p>{product.title}</p>
                        <p style={{margin:"0px",padding:"0px"}}>{product.brand}</p>
                        <p style={{margin:"0px",padding:"0px"}}>{product.category}</p>
                        <p style={{margin:"0px",padding:"0px"}}>{product.price}</p>
                    </div>
                    // </Link>
                )})
            }
            </div>

            <div style={{
                display:"flex",
                justifyContent:"center",
                alignItems:"center",
                gap:"50px",
                width:"100%",
                margin:"10px",
                }}>
                <button onClick={() => setPage(page - 1)} disabled={page === 1}>Prev</button>
                <button onClick={() => setPage(page + 1)} disabled={page === 10}>Next</button>
            </div>
        </div>
    )
}
