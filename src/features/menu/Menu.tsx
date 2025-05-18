import { cakes } from "../../data.ts";
import MenuItem from "./MenuItem";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <section className="py-10">
      <div className="max-w-[1440px] mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-8">Our Cakes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6 px-4">
          {cakes.map((cake) => (
            <Link
              key={cake.id}
              to={`/cake/${cake.id}`}
              className="flex justify-center w-full"
            >
              <MenuItem cake={cake} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;
