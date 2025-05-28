import LinkButton from "../../UI/components/LinkButton.tsx";
import Button from "../../UI/components/Button.tsx";
import Counter from "../../UI/components/Counter.tsx";
import useItemDetail from "../../hooks/useItemDetail.ts";
import { CakeSize } from "../../data.ts";

function CakeDetail() {
  const detail = useItemDetail();

  if (!detail) {
    return <p>Cake not found.</p>;
  }

  const {
    cake,
    handleAddtoCart,
    handleOrderNow,
    setSelectSize,
    setQuantity,
    quantity,
    selectSize,
  } = detail;

  return (
    <div className="max-w-[1440px] mx-auto py-10 px-4 md:px-20 lg:py-15">
      <LinkButton linkName="← Go Back Menu" />
      <div className="flex flex-col gap-4 lg:flex-row lg:gap-[50px]">
        <img
          src={cake.image}
          alt={cake.name}
          className="rounded-xl mb-4 lg:w-[40%]"
        />
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-bold mb-4 md:text-4xl">{cake.name}</h1>
          <p className="text-2xl md:text-4xl font-bold">
            ${cake.unitPrice.toFixed(2)} – ${(cake.unitPrice * 1.5).toFixed(2)}
          </p>
          <p>{cake.description}</p>
          <label className="text-xl font-bold">Size:</label>
          <select
            name="cakeSize"
            id="cakeSize"
            required
            className="border-1 px-2 py-1 lg:w-[30%]"
            value={selectSize}
            onChange={(e) => setSelectSize(e.target.value as CakeSize | "")}
          >
            <option value="" disabled>
              Select the size
            </option>
            {cake.availableSizes?.map((size) => (
              <option key={size} value={size}>
                {size === "6-inch"
                  ? 'Regular 6" (4–6 Pax)'
                  : size === "8-inch"
                  ? 'Regular 8" (6–8 Pax)'
                  : size}
              </option>
            ))}
          </select>
          <label className="text-xl font-bold">Quantity:</label>

          <Counter
            value={quantity}
            cake={cake}
            setQuantity={setQuantity}
            quantity={quantity}
            selectSize={selectSize as CakeSize}
          />
          <div className="flex gap-5">
            <Button
              hoverScale="100"
              width="150px"
              height="40px"
              onClick={handleAddtoCart}
            >
              Add to cart
            </Button>
            <Button
              hoverScale="100"
              width="150px"
              height="40px"
              bgColor="black"
              textColor="white"
              disabled={!selectSize || !quantity}
              to="/checkout"
              onClick={handleOrderNow}
            >
              Order Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CakeDetail;
