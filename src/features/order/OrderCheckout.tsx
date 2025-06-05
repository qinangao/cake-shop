import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import OrderForm from "./OrderForm";
import OrderSummary from "./OrderSummary";
import LinkButton from "../../UI/components/LinkButton";
import { useAuth } from "../../hooks/useAuth";

function OrderCheckout() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="max-w-[1440px] mx-auto p-10">
      <LinkButton linkName="← Continue shopping" />
      <h2 className="text-3xl text-center pb-10">Checkout</h2>

      {!isAuthenticated && (
        <div className="text-center pb-10">
          <p className="text-2xl">
            Already have an account?{" "}
            <Link to="/login" className="hover:underline hover:text-gray-700">
              Click here to log in
            </Link>
          </p>
        </div>
      )}

      <div className="flex flex-col md:flex-row gap-12">
        <div className="flex-1">
          <OrderForm />
        </div>
        <div className="flex-1 md:max-h-[600px] overflow-auto">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}

export default OrderCheckout;
