import { useParams } from "react-router-dom";
import { cakes } from "../../data.ts";
import LinkButton from "../../UI/components/LinkButton.tsx";
import Button from "../../UI/components/Button.tsx";

function CakeDetail() {
  const { id } = useParams<{ id: string }>();
  const cake = cakes.find((c) => c.id === Number(id));

  if (!cake) return <div>Cake not found</div>;

  return (
    <div className="max-w-[1440px] mx-auto py-10 px-4 md:px-20 lg:py-15">
      <LinkButton linkName="← Go Back Menu" />
      <div className="flex flex-col gap-4 md:flex-row lg:gap-[50px]">
        <img src={cake.image} alt={cake.name} className="rounded-xl mb-4" />
        <div className="flex flex-col gap-6">
          <h1 className="text-2xl font-bold mb-4 md:text-4xl">{cake.name}</h1>
          <p className="text-2xl md:text-4xl font-bold">
            ${cake.price.toFixed(2)} – ${(cake.price * 1.5).toFixed(2)}
          </p>
          <p>{cake.description}</p>
          <label className="text-xl font-bold">Size:</label>
          <select
            name="cakeSize"
            id="cakeSize"
            required
            className="border-1 px-2 py-1 lg:w-[30%]"
          >
            <option value="" disabled selected>
              Select the size
            </option>
            <option value="6"> Regular 6"(4-6 Pax)</option>
            <option value="8"> Regular 8"(6-8 Pax)</option>
          </select>
          <label className="text-xl font-bold">Quantity:</label>
          <input
            type="number"
            className="border-1 px-2 py-1 lg:w-[30%]"
            required
          />
          <div className="flex gap-5">
            <Button hoverScale="100" width="150px" height="40px">
              Add to cart
            </Button>
            <Button
              hoverScale="100"
              width="150px"
              height="40px"
              bgColor="black"
              textColor="white"
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
