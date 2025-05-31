import { CartItem, deleteItem } from "./cartSlice";
import { cakes } from "../../data";
import { useDispatch } from "react-redux";
import Counter from "../../UI/components/Counter";
// import Counter from "../../UI/components/Counter";

export type CartItemRowProps = {
  item: CartItem;
};

function CartItemRow({ item }: CartItemRowProps) {
  const dispatch = useDispatch();
  const cake = cakes.find((cake) => cake.name === item.name);
  const imageUrl = cake?.image;

  function handleDeleteItem() {
    dispatch(deleteItem({ cakeId: item.cakeId, size: item.size }));
  }

  if (!cake) return;
  return (
    <li className="flex flex-col gap-2 border-b text-sm py-3">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src={imageUrl}
            alt={item.name}
            className="w-16 h-16 object-cover rounded"
          />

          <div className="flex flex-col gap-[20px]">
            <p className="font-medium text-base">{item.name}</p>
            <p>
              <span className="font-semibold">Size:</span> {item.size}
            </p>
          </div>
        </div>

        <span className="font-bold text-base">
          ${item.totalPrice.toFixed(2)}
        </span>
      </div>

      <div className="flex items-center justify-end gap-[130px]">
        <Counter
          value={item.quantity}
          cake={{ id: cake.id }}
          quantity={item.quantity}
          selectSize={item.size}
          fontSize="1rem"
        />
        <button
          onClick={handleDeleteItem}
          className="hover:underline hover:text-gray-500 text-xs"
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItemRow;
