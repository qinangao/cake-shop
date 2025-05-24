import { X } from "lucide-react";
import Button from "../../UI/components/Button";
import { useDispatch, useSelector } from "react-redux";
import { getTotalCartPrice } from "./cartSlice";
import { CartItem, clearCart } from "./cartSlice";
import CartItemRow from "./CartItemRow";
import EmptyCart from "../../UI/components/EmptyCart";

interface CartOverviewProps {
  cart: CartItem[];
  setIsOpen: (open: boolean) => void;
}

function CartOverview({ cart, setIsOpen }: CartOverviewProps) {
  const dispatch = useDispatch();
  const totalCartPrice = useSelector(getTotalCartPrice);

  function handleClearCart() {
    dispatch(clearCart());
  }
  console.log(cart);

  return (
    <div className="flex flex-col h-full py-3">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl mb-3 font-bold">Your Cart</h2>
        <button onClick={() => setIsOpen(false)} className="text-gray-600">
          <X size={24} />
        </button>
      </div>
      {cart.length === 0 ? (
        <EmptyCart />
      ) : (
        <>
          <ul
            className="sp
        ace-y-3 flex-grow overflow-y-auto"
          >
            {cart.map((item) => (
              <CartItemRow
                key={`${item.name}-${item.size}-${item.quantity}`}
                item={item}
              />
            ))}
          </ul>

          <div className="mt-4 pt-4">
            <div className="font-semibold text-right text-3xl mb-8">
              Total: ${totalCartPrice}
            </div>
            <div className="flex justify-between">
              <Button
                bgColor="black"
                textColor="white"
                width="40%"
                to="/checkout"
              >
                Check Out
              </Button>
              <Button isHover={false} width="40%" onClick={handleClearCart}>
                Clear Cart
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartOverview;
