import { BsPlusCircle, BsCartX } from "react-icons/bs";
import { BiMinusCircle } from "react-icons/bi";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  resetCart,
  deleteItem,
  drecreaseQuantity,
  increaseQuantity,
} from "../redux/orebiSlice";
function Cart() {
  const { products } = useSelector((state) => state.orebiReducer);
  const dispatch = useDispatch();

  const totalPrice = products.reduce((total, product) => {
    const productTotal = product.price * product.quantity;
    return total + productTotal;
  }, 0);

  return (
    <div className="cart-wrapper noselect">
      <div className="cart-header">
        <h3>Shopping Cart New</h3>
      </div>
      <div className="cart-list">
        <ul>
          {products.map((item, index) => (
            <li className="cart-item">
              <div className="cart-item-img">
                <img src={item.image} width="60" height="70" alt="cart item" />
              </div>
              <div className="cart-item-name">
                <span>{item.name} </span>
              </div>
              <div className="cart-item-qty">
                <span className="cart-delete-item">
                  <BsCartX onClick={() => dispatch(deleteItem(item._id))} />
                </span>

                {item.quantity > 1 && (
                  <span>
                    <BiMinusCircle
                      onClick={() =>
                        dispatch(drecreaseQuantity({ _id: item._id }))
                      }
                    />
                  </span>
                )}
                <input type="number" value={item.quantity} disabled />
                <span>
                  <BsPlusCircle
                    onClick={() =>
                      dispatch(increaseQuantity({ _id: item._id }))
                    }
                  />
                </span>
              </div>
              <div className="cart-item-price">
                ${item.price * item.quantity}.00
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="cart-checkout">
        <div className="cart-total">
          <h4>Total :</h4>
          <span>${totalPrice}.00</span>
        </div>
        <div className="cart-shipping">
          <h4>Shipping :</h4>
          <span>Free Shipping</span>
        </div>
        <div className="cart-checkout-button">
        
        </div>
      </div>
    </div>
  );
}

export default Cart;
