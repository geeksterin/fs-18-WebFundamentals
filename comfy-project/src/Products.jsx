import { useContext } from "react";
import { ecomContext } from "./Home";
import { Link } from "react-router-dom";

function Products() {
  const { products, handleAddToCart } = useContext(ecomContext);
  
  return (
    <div className="flex items-center p-2 flex-wrap gap-3">
      {products.map((prod, index) => {
        return (
          <div key={index} className="m-2 p-2 w-[30%]">
            <Link to={`/products/${prod.id}`}>
              <img src={prod.attributes.image} alt="" />
            </Link>
            <h3>
              <a href="">{prod.attributes.title}</a>
            </h3>
            <p>${prod.attributes.price / 100}</p>
            <button
              className="bg-cyan-950 text-white p-2 border-cyan-950 rounded-md"
              onClick={(e) => handleAddToCart(e, prod)}
            >
              Add To Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
