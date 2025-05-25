import { CartItem, deleteItem } from "./cartSlice";
import { cakes } from "../../data";
import { useDispatch } from "react-redux";

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

  return (
    <li className="flex gap-4 items-start border-b pb-3 text-sm">
      <img
        src={imageUrl}
        alt={item.name}
        className="w-16 h-16 object-cover rounded"
      />
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-start">
          <div>
            <p className="font-medium text-base">{item.name}</p>
            <p>
              <span className="font-semibold">Size:</span> {item.size}
            </p>
            <p>
              <span className="font-semibold">Quantity:</span> {item.quantity}
            </p>
          </div>
          <div className="flex flex-col items-center gap-5">
            <span className="font-bold text-base">${item.totalPrice}</span>
            <button
              onClick={handleDeleteItem}
              className="hover:underline hover:text-gray-500 text-xs"
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItemRow;
