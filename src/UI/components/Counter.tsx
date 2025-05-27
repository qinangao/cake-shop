import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../../features/cart/cartSlice";

type CounterProps = {
  value: number;
  cake: { id: number };
  setQuantity?: (quantity: number) => void;
  quantity: number;
};

function Counter({ value, cake, setQuantity, quantity }: CounterProps) {
  const dispatch = useDispatch();

  function handleDecrease() {
    if (quantity < 1) return;
    dispatch(decreaseItemQuantity(cake.id));
    if (setQuantity) setQuantity(value - 1);
  }

  function handleIncrease() {
    dispatch(increaseItemQuantity(cake.id));
    if (setQuantity) setQuantity(value + 1);
  }

  return (
    <div className="lg:w-[30%] py-1.5 px-10 border relative flex items-center justify-center">
      <button
        className="absolute left-2 text-2xl cursor-pointer"
        onClick={handleDecrease}
      >
        −
      </button>
      <span className="px-4 text-lg">{value}</span>
      <button
        className="absolute right-2 text-2xl cursor-pointer"
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
