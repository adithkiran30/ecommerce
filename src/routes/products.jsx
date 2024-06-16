import React from 'react';
import { Link } from "react-router-dom";
import {  useLoaderData } from "react-router-dom";
export async function loader() {
  const response = await fetch('https://fakestoreapi.com/products');
const data = await response.json();
return {data}
}
function Products(props) {
  const {data} = useLoaderData();
  console.log(data);
    return (
        <main>
  
  <section>
    <div className="container">
      <h2>Similar products</h2>
      <div className="productsList" id="listingDiv">
        {
          data.map(product => 
            <article className="product" key={product.id}>
          <img
            src={product.image}
            alt=""
          />
          <div className="productDetails">
          <Link to={'/products/' + product.id}>
  <h3 className="h6">{product.title}</h3>
</Link>
            
            <div>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>☆ </span>
            </div>
            <div className="priceAndButton">
              <span className="p">${product.price}</span>
              <button className="button buttonPrimary">Add to cart</button>
            </div>
          </div>
        </article>
        
        )
        }
      </div>
    </div>
  </section>
  </main>
    );
}

export default Products;