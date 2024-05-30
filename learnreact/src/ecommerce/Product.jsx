/* eslint-disable react/prop-types */
function Product({ product }) {
  return (
    <div className="product">
      <img src={product.image} alt="Product Photo" />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <a href="">Add To Cart</a>
    </div>
  );
}

export default Product;
