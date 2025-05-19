import { Cake } from "../../data.ts";
import { HiOutlineShoppingBag } from "react-icons/hi";

type MenuItemProps = {
  cake: Cake;
};

function MenuItem({ cake }: MenuItemProps) {
  return (
    <div className="w-[300px] border-1 border-gray-200 px-4 py-6 rounded-[20px] checked:user-valid:required:*:**:not-[]:">
      <img src={cake.image} alt="" />

      <div className="flex items-center justify-between pt-4">
        <div>
          <p>{cake.name}</p>
          <p className="font-semibold">
            {" "}
            ${cake.unitPrice.toFixed(2)} – ${(cake.unitPrice * 1.5).toFixed(2)}
          </p>
        </div>
        <div className="relative group inline-block">
          <HiOutlineShoppingBag className="w-10 h-10 mr-1 p-1 cursor-pointer hover:text-white hover:bg-gray-700 hover:rounded-[50%] transition" />
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 text-sm text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
            Select options
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
