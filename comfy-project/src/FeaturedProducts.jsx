import { useContext } from "react";
import { ecomContext } from "./Home";

function FeaturedProducts() {
  const { products } = useContext(ecomContext);

  const featuredProducts = products.filter((prod) => {
    return prod.attributes.featured === true;
  });

  return (
    <div className="flex items-center p-2">
      {featuredProducts.map((prod, index) => {
        return (
          <div key={index} className="m-2 p-2">
            <a href="">
              <img src={prod.attributes.image} alt="" />
            </a>
            <h3>
              <a href="">{prod.attributes.title}</a>
            </h3>
            <p>${prod.attributes.price / 100}</p>
          </div>
        );
      })}
    </div>
  );
}

export default FeaturedProducts;
