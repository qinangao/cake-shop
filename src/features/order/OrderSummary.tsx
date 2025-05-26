import { useDispatch, useSelector } from "react-redux";
import Button from "../../UI/components/Button";
import OrderItemRow from "./OrderItemRow";
import { clearCart, getCart, getTotalCartPrice } from "../cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { useCustomerInfo } from "./useCustomerInfo";

function OrderSummary() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const { isFilledInfo } = useCustomerInfo();
  console.log(isFilledInfo);

  function handlePlaceOrder() {
    navigate("/confirmation", {
      state: {
        orderItems: cart,
        total: totalCartPrice,
      },
    });
    dispatch(clearCart());
  }

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md flex flex-col">
      <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">
        Order summary
      </h2>
      {cart.length === 0 ? (
        <p className="text-center font-bold text-3xl p-7">No orders found.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <OrderItemRow
                key={`${item.name}-${item.size}-${item.quantity}`}
                item={item}
              />
            ))}
          </ul>
          <div className="flex justify-between items-center py-7">
            <p className="text-2xl">Total:</p>
            <p className="text-2xl font-semibold">${totalCartPrice}</p>
          </div>

          <div className="mt-auto">
            <Button
              width="100%"
              bgColor="black"
              textColor="white"
              onClick={handlePlaceOrder}
              disabled={!isFilledInfo}
            >
              Place Order
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default OrderSummary;
