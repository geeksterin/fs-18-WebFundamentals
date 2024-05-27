import { useState } from "react";
import data from "./shoppingData";

function ShoppingCart() {
  const [cart, setCart] = useState([]);

  function handleAddToCart(productToAdd) {
    setCart([...cart, productToAdd]);
  }

  console.log(cart);

  return (
    <>
      <h1>SHOPPING CART</h1>
      {data.map((product, index) => {
        return (
          <div className="product" key={index}>
            <img src={product.img} alt="" />
            <h3>{product.name}</h3>
            <p>{product.price}</p>

            <button onClick={() => handleAddToCart(product)}>
              Add To Cart
            </button>
          </div>
        );
      })}
    </>
  );
}
export default ShoppingCart;
