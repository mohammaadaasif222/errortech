import React from "react";
import { Link } from "react-router-dom";
import { textTrim } from "../helper";
import { useDispatch } from "react-redux";
import {addToCart} from '../redux/orebiSlice'
const Product = ({item}) => {
  const dispatch = useDispatch()
  return (
    <div className="product-card">
      <div className="product-header">
        <Link to={`product/${item.id}`}>
          <div className="product-maximize">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="expand-arrows-alt"
              className="svg-inline--fa fa-expand-arrows-alt fa-w-14 fa-2x w-50 "
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M448 344v112a23.94 23.94 0 0 1-24 24H312c-21.39 0-32.09-25.9-17-41l36.2-36.2L224 295.6 116.77 402.9 153 439c15.09 15.1 4.39 41-17 41H24a23.94 23.94 0 0 1-24-24V344c0-21.4 25.89-32.1 41-17l36.19 36.2L184.46 256 77.18 148.7 41 185c-15.1 15.1-41 4.4-41-17V56a23.94 23.94 0 0 1 24-24h112c21.39 0 32.09 25.9 17 41l-36.2 36.2L224 216.4l107.23-107.3L295 73c-15.09-15.1-4.39-41 17-41h112a23.94 23.94 0 0 1 24 24v112c0 21.4-25.89 32.1-41 17l-36.19-36.2L263.54 256l107.28 107.3L407 327.1c15.1-15.2 41-4.5 41 16.9z"
              ></path>
            </svg>
          </div>
        </Link>
        <span className="product-add-to-cart">
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="shopping-bag"
            className="svg-inline--fa fa-shopping-bag fa-w-14 w-50 "
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            onClick={() =>
              dispatch(
                addToCart({
                  _id: item.id,
                  name: item.title,
                  quantity: 1,
                  image: item.image,
                  price: item.price,
                  desc: item.description
                })
              )
            }
          >
            <path
              fill="currentColor"
              d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"
            ></path>
          </svg>
        </span>
      </div>
      <div className="product-image">
        <div className="background-design" style={{background: "rgb(240, 150, 158)"}}>
          <div className="circle"></div>
        </div>
        <figure>
          <img
            src={item.image}
            alt={item.title}
            width="50"
            
          />
        </figure>
      </div>
      <div className="product-name">
        <p>{textTrim(item.title, 3)}</p>
      </div>
      <div className="product-price">336</div>
    </div>
  );
};

export default Product;
