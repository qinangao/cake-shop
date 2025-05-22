import Button from "./Button";

function EmptyCart() {
  return (
    <div className="flex flex-col items-center gap-4 text-gray-600 mt-10 text-center">
      <img src="/assets/icons/icons8-cart-100.png" alt="empty-cart" />
      <h2 className="text-2xl text-black font-semibold">Your cart is empty</h2>
      <p className="font-medium">
        It looks like you haven't added any items to your cart yet. Start
        browsing our products and add some items to your cart.
      </p>
      <Button
        to="/menu"
        bgColor="black"
        width="180px"
        textColor="white"
        fontSize="15px"
        className="pt-[3px] mt-[30px]"
      >
        Continue Shopping
      </Button>
    </div>
  );
}

export default EmptyCart;

// icons8-cart-100.png
