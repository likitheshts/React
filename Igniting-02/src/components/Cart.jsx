import { useDispatch, useSelector } from "react-redux";
import FoodItemCard from "./FoodItemCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <div className="float-right mr-8">
        <button
          className="bg-red-400 p-2 m-2 w-28"
          onClick={() => {
            handleClearCart();
          }}
        >
          CLEAR
        </button>
      </div>
      <div className="flex flex-wrap mt-10">
        {cartItems.map((items) => (
          <FoodItemCard key={items?.id} {...items} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
