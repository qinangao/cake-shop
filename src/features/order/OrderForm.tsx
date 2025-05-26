import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useCustomerInfo } from "./useCustomerInfo";

function OrderForm() {
  const {
    collectDate,
    setCollectDate,
    name,
    setName,
    email,
    setEmail,
    contactNumber,
    setContactNumber,
    filterPassedTime,
  } = useCustomerInfo();

  return (
    <div className="p-6 bg-gray-50 rounded-lg shadow-md flex flex-col items-center lg:items-start">
      <h2 className="text-2xl font-semibold mb-6 text-center md:text-left">
        Quick Checkout (No Sign-In Needed)
      </h2>
      <form className="flex flex-col gap-5 mb-6 w-full">
        <div className="flex flex-col md:flex-row gap-5">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
        </div>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <input
          type="tel"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          placeholder="Contact number"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </form>

      <p className="mb-4 text-center md:text-left text-gray-700">
        At the moment, we’re pleased to offer self-collection only.
      </p>
      <label className="flex items-center gap-2 mb-6 cursor-not-allowed select-none text-gray-600">
        <input
          type="checkbox"
          checked
          disabled
          className="cursor-not-allowed"
        />
        <span>In-store self-collection</span>
      </label>

      <DatePicker
        selected={collectDate}
        onChange={(date) => setCollectDate(date)}
        showTimeSelect
        timeIntervals={15}
        filterTime={filterPassedTime}
        dateFormat="MMMM d, yyyy h:mm aa"
        timeCaption="Time"
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholderText="Select date and time"
      />
    </div>
  );
}

export default OrderForm;
