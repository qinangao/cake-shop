import { cakes } from "../../data.ts";
import MenuItem from "./MenuItem";

function Menu() {
  return (
    <section className="py-10">
      <h2 className="text-4xl font-semibold text-center mb-8">Our Cakes</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {cakes.map((cake) => (
          <MenuItem key={cake.id} cake={cake} />
        ))}
      </div>
    </section>
  );
}

export default Menu;
