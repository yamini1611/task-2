import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

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

  const handleBuyNow = () => {
    Swal.fire({
      title: 'Order Confirmation',
      text: 'Are you sure you want to buy this product?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes, buy it!',
      cancelButtonText: 'No, cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: 'Order Successful',
          text: 'Your order has been placed successfully!',
          icon: 'success',
          confirmButtonText: 'OK',
        }).then(() => {
          navigate('/ProductList');
        });
      }
    });
  };

  const handleAddToCart = () => {
    // Create an object with the product details
    const cartItem = {
      id: product.id,
      name: product.product_name,
      price: product.price,
    };

    // Send a POST request to the server to add the product to the cart
    fetch('http://localhost:5000/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItem),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Product added to cart:', data);
        // Redirect to the cart page
        navigate('/cart');
      })
      .catch((error) => {
        console.error('Error adding product to cart:', error);
      });
  };

  return (
    <div style={{ paddingLeft: 300, paddingBottom: 60 }}>
      <h2 style={{ color: 'black', fontWeight: '600', paddingLeft: 200, marginTop: 2 }}>MICHAEL KNORS</h2>
      <div style={{ marginTop: -90 }}>
        <h2 style={{ color: 'black', paddingLeft: 10, fontWeight: '200' }}>Product Details</h2>
        <img src={product.image} alt={product.product_name} height={300} width={300} onClick={handleGoBack} />
        <h5>{product.product_name}</h5>
        <h5>Price: {product.price}</h5>
        <h5>Discount Price: {product.discount_price}</h5>
        <button type="button" className="btn btn-success" onClick={handleBuyNow}>
          BUY NOW
        </button>
        <button style={{ marginLeft: 25 }} type="button" className="btn btn-warning" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
