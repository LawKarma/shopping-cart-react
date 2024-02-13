import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} alt={productName} className={id === 3 ? 'special-image' : ''} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> {price} € </p>
      </div>
      <button className="addToCartBttn" onClick={() => addToCart(id)}>
        Ajouter au panier {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
