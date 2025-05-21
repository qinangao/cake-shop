import { X } from "lucide-react";
import Button from "../../UI/components/Button";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTotalCartPrice } from "./cartSlice";
import { CartItem } from "./cartSlice";
import CartItemRow from "./CartItemRow";

interface CartOverviewProps {
  cart: CartItem[];
  setIsOpen: (open: boolean) => void;
}

function CartOverview({ cart, setIsOpen }: CartOverviewProps) {
  const totalCartPrice = useSelector(getTotalCartPrice);

  function handleDelete() {}
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
        <div className="text-center text-gray-600 mt-10">
          <p className="text-lg font-medium">Your cart is empty.</p>
          <Link
            to="/menu" // or use <Link> if using React Router
            className="mt-4 inline-block text-blue-600 hover:underline"
          >
            Go to Menu
          </Link>
        </div>
      ) : (
        <>
          <ul
            className="sp
        ace-y-3 flex-grow overflow-y-auto"
          >
            {cart.map((item) => (
              <CartItemRow key={item.id} item={item} onDelete={handleDelete} />
            ))}
          </ul>

          <div className="mt-4 pt-4">
            <div className="font-semibold text-right text-3xl mb-8">
              Total: ${totalCartPrice}
            </div>
            <Button bgColor="black" textColor="white" width="100%">
              Check Out
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartOverview;
