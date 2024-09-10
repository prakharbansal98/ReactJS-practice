import { addToCart, emptyCart, removeFromCart } from "../redux/action";
import { useDispatch } from "react-redux";

function Main() {
  const dispatch = useDispatch();
  const product = {
    name: "phone",
    price: 10000,
  };
  return (
    <div>
      <div>
        <button onClick={() => dispatch(addToCart(product))}>
          Add to cart
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(removeFromCart(product))}>
          Remove from cart
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(emptyCart())}>Empty cart</button>
      </div>
    </div>
  );
}

export default Main;
