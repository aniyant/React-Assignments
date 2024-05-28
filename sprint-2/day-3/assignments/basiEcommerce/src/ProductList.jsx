import React from 'react'

export const ProductList = ({products}) =>{
  return (
    <div style={{display:"flex",justifyContent:"space-evenly",gap:"30px"}}>
        {
            products.map((product) => {
                return (
                    <div style={{width:"400px",border:"1px ridge"}}>
                        {/* <img style={{display:"block"}} src={product.image} alt={product.title} /> */}
                        <p>{product.title}</p>
                        <p>{product.category}</p>
                        <p>{product.price}</p>
                    </div>
                )
            })
        }
    </div>
  )
}
