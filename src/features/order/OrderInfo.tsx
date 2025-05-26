import { useLocation } from "react-router-dom";
import { formatNiceDate, generateShortOrderId } from "../../utilities/helper";
import { useCustomerInfo } from "./useCustomerInfo";
import OrderItemRow from "./OrderItemRow";
import { CartItem } from "../cart/cartSlice";

function OrderInfo() {
  const { collectDate, name, email } = useCustomerInfo();
  const orderId = generateShortOrderId();

  const location = useLocation();
  const { orderItems, total }: { orderItems: CartItem[]; total: number } =
    location.state || {
      orderItems: [],
      total: 0,
    };
  return (
    <div className="flex flex-col justify-center items-center px-3 ">
      <div className="text-center pt-10">
        <div className="flex items-center justify-center gap-2">
          <img src="/assets/icons/icons8-approve.svg" alt="" />{" "}
          <h1 className="text-2xl md:text-3xl font-bold">
            Your Order Is Confirmed
          </h1>
        </div>

        <div className="md:text-lg py-4 leading-[40px]">
          <p>
            Order number: <strong>{orderId}</strong>
          </p>
          <p>
            Thank you {name}! Your order has been successfully placed! A
            confirmation email has sent to <strong>{email}</strong>
          </p>
          <p>
            It will be ready for collection on
            <strong>
              {" "}
              {collectDate ? formatNiceDate(collectDate) : "N/A"}
            </strong>{" "}
            at store.
          </p>
        </div>
      </div>
      <div className="flex flex-col rounded-2xl justify-center  lg:w-[40%] border-1 border-gray-300 py-4 md:px-8 my-6">
        <h2 className="text-xl md:text-2xl">Order summary</h2>
        <ul className=" px-3 my-4">
          {orderItems.map((item) => (
            <OrderItemRow
              item={item}
              key={`${item.name}-${item.size}-${item.quantity}`}
            />
          ))}
        </ul>
        <div className="text-xl md:text-2xl flex justify-between">
          <p>Total: </p>
          <p>${total}</p>
        </div>
      </div>
    </div>
  );
}

export default OrderInfo;
