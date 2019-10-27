import React from 'react';
import Layout from 'Layout';
import CartItem from 'components/CartItem';

const Cart = () => (
  <Layout>
    <div className="cart-page">
      <span className="cart-title">Shopping Cart</span>
      <div className="cart-list">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      <div className="cart-total">
        Total:
        <span className="total-price">￥2345</span>
      </div>
    </div>
  </Layout>
);

export default Cart;
