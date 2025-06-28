import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './PlaceOrder.css'; // optional if you're styling this

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);

  const getDeliveryFee = () => {
    return getTotalCartAmount() > 0 ? 20 : 0;
  };

  const getFinalTotal = () => {
    return getTotalCartAmount() + getDeliveryFee();
  };

  return (
    <form className='place-order'>
      
      {/* LEFT SIDE - Delivery Form */}
      <div className='place-order-left'>
        <p className='title'>Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>
        <input type='email' placeholder='Email address' />
        <input type='text' placeholder='Street' />
        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder='Zip code' />
          <input type="text" placeholder='Country' />
        </div>
        <input type='text' placeholder='Phone' />
      </div>

      {/* RIGHT SIDE - Cart Total */}
      <div className="place-order-right">
        <div className='cart-total'>
          <h2>Cart Total</h2>
          <div className='cart-total-details'>
            <p>Subtotal</p>
            <p>₹{getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className='cart-total-details'>
            <p>Delivery Fee</p>
            <p>₹{getDeliveryFee()}</p>
          </div>
          <hr />
          <div className='cart-total-details'>
            <p>Total</p>
            <p>₹{getFinalTotal()}</p>
          </div>
          <button className="checkout-btn">
            Proceed to Payment
          </button>
        </div>
      </div>

    </form>
  );
};

export default PlaceOrder;
