import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';


const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/product/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleGoBack = () => {
    navigate('/ProductList');
  };


  return (
    
    <div  style={{paddingLeft:300,paddingBottom:60}}>
            <h2 style={{ color: 'black', fontWeight: '600',paddingLeft:200 ,marginTop:2}}>MICHAEL KNORS</h2>
            <div style={{marginTop:-90}}>
      <h2 style={{color:'black', paddingLeft:10,fontWeight: '200'}}>Product Details</h2>
      <img src={product.image} alt={product.product_name} height={300} width={300} onClick={handleGoBack} />
      <h5>{product.product_name}</h5>
      <h5>Price: {product.price}</h5>
      <h5>Discount Price: {product.discount_price}</h5>
      <button type="button" class="btn btn-success" >BUY NOW</button>
    </div>
    </div>
  );
};

export default ProductDetails;
