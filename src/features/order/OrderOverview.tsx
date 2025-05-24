import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import OrderForm from "./OrderForm";
import OrderSummary from "./OrderSummary";

function OrderOverview() {
  return (
    <div className="max-w-[1440px] mx-auto px-4 py-10">
      <h2 className="text-center text-3xl pb-10">Check out</h2>
      <div className="text-center">
        <p className="text-2xl pb-4">
          Already has a account?{" "}
          <span>
            Click{" "}
            <Link to="/login" className="hover:underline hover:text-gray-700">
              here
            </Link>{" "}
            to log in
          </span>
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-[50px]">
        <OrderForm />
        <OrderSummary />
      </div>
    </div>
  );
}

export default OrderOverview;
