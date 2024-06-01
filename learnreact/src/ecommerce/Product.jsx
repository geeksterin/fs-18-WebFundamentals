import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
function Product({ product, handleAddToCart }) {

  return (
    <div className="product">
      <img src={product.image} alt="Product Photo" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <Link to="" onClick={(e) => handleAddToCart(e, product)}>
        Add To Cart
      </Link>
    </div>
  );
}

export default Product;
