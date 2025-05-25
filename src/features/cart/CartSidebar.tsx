import { BsCart2 } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { useSelector } from "react-redux";
import { getCart, getTotalCartQuantity } from "./cartSlice";
import CartOverview from "./CartOverview";
import { shouldAutoOpenCart } from "../../utilities/cartSideBarControl";

function CartIcon() {
  const [isOpen, setIsOpen] = useState(false);
  const cart = useSelector(getCart);
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  const prevCartLength = useRef(cart.length);
  useEffect(() => {
    if (shouldAutoOpenCart() && cart.length > prevCartLength.current) {
      setIsOpen(true);
    }
    prevCartLength.current = cart.length;
  }, [cart.length]);

  return (
    <>
      {/* Cart Icon */}
      <div className="cursor-pointer text-3xl hidden md:block relative z-50">
        <button onClick={() => setIsOpen(true)} className="focus:outline-none">
          <BsCart2
            className="w-6 h-6 mb-[2px] mr-4 cursor-pointer
          "
          />
          {totalCartQuantity !== 0 && (
            <span
              className="absolute top-[-5px] right-0 w-5 h-5 rounded-full bg-red-400 text-white text-[14px] 
                 flex items-center justify-center"
            >
              {totalCartQuantity}
            </span>
          )}
        </button>
      </div>

      {/* Overlay + Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            {/* Dimmed Overlay */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 z-50 shadow-xl p-5 flex flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Right Sidebar */}
            <motion.div
              className="fixed top-0 right-0 h-full sm:w-full lg:w-100 bg-white z-50 shadow-xl p-5 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <CartOverview cart={cart} setIsOpen={setIsOpen} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

//SHow side bar for style purpose
// function CartIcon() {
//   const cart = useSelector(getCart);

//   return (
//     <>
//       {/* Cart Icon */}
//       <div className="cursor-pointer text-3xl hidden md:block relative z-50">
//         <button className="focus:outline-none">
//           <BsCart2 className="w-6 h-6 mb-1 mr-4" />
//         </button>
//       </div>

//       {/* Always Visible Sidebar */}
//       <div className="fixed top-0 right-0 h-full w-100 bg-white z-50 shadow-xl p-5 flex flex-col">
//         <CartOverview cart={cart} setIsOpen={() => {}} />
//       </div>
//     </>
//   );
// }

export default CartIcon;
