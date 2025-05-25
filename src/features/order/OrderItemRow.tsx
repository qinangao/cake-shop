import { cakes } from "../../data";
import { CartItemRowProps } from "../cart/CartItemRow";

function OrderItemRow({ item }: CartItemRowProps) {
  const cake = cakes.find((cake) => cake.name === item.name);
  const imageUrl = cake?.image;
  return (
    <li>
      <div className="flex gap-[20px] justify-between border-b-1 border-gray-400 py-4">
        <div className="flex gap-5">
          <img src={imageUrl} alt="order-image" className="w-15" />
          <div className="flex flex-col items-start justify-between">
            <p className="font-medium">
              {item.name}
              <span className="px-1 text-gray-500 font-semibold">
                x {item.quantity}
              </span>
            </p>
            <p>Size: {item.size}</p>
          </div>
        </div>
        <p className="pl-10 text-xl pt-4">$ {item.totalPrice}</p>
      </div>
    </li>
  );
}

export default OrderItemRow;
