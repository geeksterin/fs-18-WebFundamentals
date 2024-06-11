import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ecomContext } from "./Home";

function SingleProduct() {
  const { id } = useParams(); // {id:19}
  const { products, handleAddToCart } = useContext(ecomContext);

  const [productToDisplay, setProductToDisplay] = useState({});

  // console.log(products);

  useEffect(() => {
    if (products.length > 0 && id) {
      setProductToDisplay(
        products.find((product) => product.id === Number(id))
      );
    }
  }, [id, products]);

  console.log(productToDisplay);

  return (
    <>
      {Object.keys(productToDisplay).length > 0 ? (
        <div className="flex p-2">
          <div className="w-1/2">
            <img src={productToDisplay.attributes.image} alt="" />
          </div>
          <div className="w-1/2">
            <h3>{productToDisplay.attributes.title}</h3>
            <p>
              <strong>Category: </strong>
              {productToDisplay.attributes.category}
            </p>
            <p>
              <strong>Price: </strong> $
              {productToDisplay.attributes.price / 100}
            </p>
            <p>{productToDisplay.attributes.description}</p>

            <p className="flex items-center gap-4">
              <strong>Colors: </strong>
              {productToDisplay.attributes.colors.map((color, index) => {
                return (
                  <span
                    key={index}
                    className="w-5 h-5 rounded-full inline-block"
                    style={{ backgroundColor: color }}
                  ></span>
                );
              })}
            </p>
            <button
              to=""
              className="bg-cyan-950 text-white p-2 border-cyan-950 rounded-md"
              onClick={(e) => handleAddToCart(e, productToDisplay)}
            >
              Add To Cart
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default SingleProduct;
