import React from 'react';
import { connect } from 'react-redux';

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Cart</h2>
      {cart.items.map(item => (
        <div key={item.id}>
          <p>{item.title} - ${item.price}</p>
          {/* Implement remove button and action */}
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  };
};

export default connect(mapStateToProps)(Cart);
