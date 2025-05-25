function OrderSummary() {
  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-50 rounded-lg shadow-md flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">
        Order summary
      </h2>
      <ul>
        <li>
          <div className="flex justify-center border-b-1 pb-4 px-6">
            <img
              src="/assets/cakes/image-6.jpg"
              alt="order-image"
              className="w-15"
            />
            <div className="flex flex-col items-start justify-between jus px-5">
              <p className="font-medium">
                Lemon Meringue Pie<span className="px-1 font-mono">x2</span>
              </p>
              <p>Size: 6" itches</p>
            </div>
            <p className="pl-10 text-xl pt-4">$14</p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default OrderSummary;
