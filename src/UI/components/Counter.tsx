import { useDispatch } from "react-redux";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../../features/cart/cartSlice";
import { CakeSize } from "../../data";

type CounterProps = {
  value: number;
  cake: { id: number };
  setQuantity?: (quantity: number) => void;
  quantity: number;
  selectSize: CakeSize;
  fontSize?: string;
};

function Counter({
  value,
  cake,
  setQuantity,
  quantity,
  selectSize,
  fontSize = "1.12rem",
}: CounterProps) {
  const dispatch = useDispatch();

  function handleDecrease() {
    if (quantity <= 1) return;
    dispatch(decreaseItemQuantity({ cakeId: cake.id, size: selectSize }));
    if (setQuantity) setQuantity(value - 1);
  }

  function handleIncrease() {
    dispatch(increaseItemQuantity({ cakeId: cake.id, size: selectSize }));
    if (setQuantity) setQuantity(value + 1);
  }

  return (
    <div className="lg:w-[30%]  py-1 px-10 border relative flex items-center justify-center">
      <button
        className="absolute left-2 text-[22px] cursor-pointer"
        onClick={handleDecrease}
      >
        −
      </button>
      <span className="px-4" style={{ fontSize }}>
        {value}
      </span>
      <button
        className="absolute right-2 text-[22px] cursor-pointer"
        onClick={handleIncrease}
      >
        +
      </button>
    </div>
  );
}

export default Counter;
