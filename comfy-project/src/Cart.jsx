import { useContext } from "react";
import { ecomContext } from "./Home";

function Cart() {
  const { cart, setCart } = useContext(ecomContext);
  return (
    <>
      <div className="flex gap-4">
        <div className="left w-1/2">
          {cart.length > 0
            ? cart.map((cartItem, index) => {
                return (
                  <div key={index} className="w-full p-2 mb-2 flex gap-2">
                    <img src={cartItem.attributes.image} alt="" />
                    <div>
                      <h4>{cartItem.attributes.title}</h4>
                      <p>{cartItem.attributes.price / 100}</p>
                    </div>
                  </div>
                );
              })
            : ""}
        </div>
        <div className="right w-1/2"></div>
      </div>
    </>
  );
}

export default Cart;
