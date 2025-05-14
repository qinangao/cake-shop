import { useState } from "react";
import { BsCart2 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
function CartIcon() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div
      onClick={() => setCartCount(cartCount + 1)}
      className="cursor-pointer text-3xl hidden md:block relative"
    >
      <NavLink to="/cart">
        <BsCart2 className="w-6 h-6 mb-1 mr-4" />
      </NavLink>
      {cartCount !== 0 && (
        <span className="absolute -top-2 right-1.5 bg-red-500 text-white text-xs w-4.5 h-4.5 flex items-center justify-center rounded-full">
          {cartCount}
        </span>
      )}
    </div>
  );
}

export default CartIcon;
