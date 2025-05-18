import Button from "../../UI/components/Button";
import { Cake } from "../../data.ts";

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
          <p className="font-semibold">£{cake.price.toFixed(2)}</p>
        </div>
        <Button>Add</Button>
      </div>
    </div>
  );
}

export default MenuItem;
