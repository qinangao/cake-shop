import { BsCart2 } from "react-icons/bs";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Button from "../../UI/components/Button";
import { Link } from "react-router-dom";

function CartIcon() {
  const [isOpen, setIsOpen] = useState(false);

  const mockCartItems = [
    { id: 1, name: "T-shirt", price: "$19.99" },
    { id: 2, name: "Sneakers", price: "$49.99" },
    { id: 3, name: "Cap", price: "$12.99" },
  ];

  return (
    <>
      {/* Cart Icon */}
      <div className="cursor-pointer text-3xl hidden md:block relative z-50">
        <button onClick={() => setIsOpen(true)} className="focus:outline-none">
          <BsCart2 className="w-6 h-6 mb-1 mr-4" />
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
              className="fixed top-0 right-0 h-full w-80 bg-white z-50 shadow-xl p-5 flex flex-col"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Your Cart</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-600"
                >
                  <X size={24} />
                </button>
              </div>

              {mockCartItems.length === 0 ? (
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
                <ul className="space-y-3 flex-grow overflow-y-auto">
                  {mockCartItems.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between border-b pb-2 text-sm"
                    >
                      <span>{item.name}</span>
                      <span>{item.price}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="font-semibold text-right pb-5">Total: $82.97</div>
              <Button bgColor="black" textColor="white">
                Check Out
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default CartIcon;
