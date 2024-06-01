/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";

function Cart({ cart, handleRemoveFromCart }) {
  return (
    <>
      <div id="cartItems">
        {cart.map((item, index) => {
          return (
            <div className="item" key={index}>
              <div className="left">
                <img src={item.image} alt="" />
              </div>
              <div className="right">
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <Link
                  to=""
                  onClick={(e) => handleRemoveFromCart(e, item.id)}
                  title="Delete this item"
                >
                  <DeleteIcon />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Cart;
