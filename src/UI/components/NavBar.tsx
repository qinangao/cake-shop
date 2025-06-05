import { JSX, useState } from "react";

import CartSidebar from "../../features/cart/CartSidebar";

import User from "../../features/user/User";
import { Link } from "react-router-dom";

export default function NavBar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/aboutus" },
    { label: "Our Cakes", path: "/menu" },
    { label: "Contact Us", path: "/contactus" },
  ];

  const ulStyle: string = `${
    isOpen ? "flex" : "hidden"
  } absolute  top-10 left-1/2 -translate-x-1/2 z-10 w-1/2 text-center flex-col bg-black text-white p-4 rounded-2xl gap-[20px] md:gap-[20px] lg:gap-[60px] lg:pr-[100px]
              md:static  md:top-auto md:left-auto md:translate-x-0 md:z-auto md:flex md:flex-row md:bg-transparent md:w-full md:text-black md:p-0 md:rounded-none`;

  return (
    <header className="bg-white h-[80px] w-full">
      <nav className="relative flex items-center justify-between h-full px-4">
        {/* LEFT: Menu Button (only on small screens) */}
        <div className="block md:hidden">
          {!isOpen ? (
            <img
              className="w-[30px] cursor-pointer"
              src="/assets/icons/icons8-menu.svg"
              alt="open menu"
              onClick={() => setIsOpen(true)}
            />
          ) : (
            <img
              className="w-[30px] cursor-pointer"
              src="/assets/icons/icons8-close.svg"
              alt="close menu"
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>

        {/* CENTER: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <h1 className="text-2xl md:text-4xl font-bold text-center">
            The Cake Lab
          </h1>
        </div>

        {/* RIGHT: Nav items and cart/user icons */}
        <div className="flex items-center gap-4 ml-auto">
          <ul className={ulStyle}>
            {navItems.map((item) => (
              <li
                key={item.path}
                className="lg:text-[20px] cursor-pointer transition-transform transform hover:scale-[1.1]"
              >
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
            {/* Mobile login button inside menu */}
          </ul>

          {/* Desktop login icon */}

          <User />

          {/* Cart Sidebar */}
          <CartSidebar />
        </div>
      </nav>
    </header>
  );
}
