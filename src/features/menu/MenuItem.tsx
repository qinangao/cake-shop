import Button from "../../UI/components/Button";
function MenuItem() {
  return (
    <div className="w-[300px] border-1 border-gray-200 px-4 py-6 rounded-[20px]">
      <img src="/assets/cakes/image-tiramisu-desktop.jpg" alt="" />
      <div className="flex items-center justify-between pt-4">
        <div>
          <p>Classic Tiramisu</p>
          <p className="font-semibold">£5.5</p>
        </div>
        <Button>Add</Button>
      </div>
    </div>
  );
}

export default MenuItem;
