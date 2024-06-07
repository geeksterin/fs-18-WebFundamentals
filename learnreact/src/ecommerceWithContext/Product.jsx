/* eslint-disable react/prop-types */
import { useContext } from "react";
import { EcommerceContext } from "./Home";

function Product({ product }) {
  const { cart, setCart } = useContext(EcommerceContext);

  function handleAddToCart(e, product) {
    setCart([...cart, product]);
  }

  return (
    <div className="product">
      <img src={product.thumbnail} />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
      <button onClick={(e) => handleAddToCart(e, product)}>Add To Cart</button>
    </div>
  );
}

export default Product;
