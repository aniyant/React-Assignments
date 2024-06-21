import { useDispatch } from "react-redux";
import actionType from "../redux/actionTypes";

function Cart() {
  const dispatch = useDispatch();

  const addToCart = (itemName) => {
    if (itemName) {
      dispatch({ type: actionType.ADD_TO_CART, payload: itemName });
    }
  };

  return (
    <div className="cart-adder">
      <input type="text" id="itemName" placeholder="Item Name" />
      <button
        onClick={() => addToCart(document.getElementById("itemName").value)}
        id="addToCartBtn"
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Cart;
