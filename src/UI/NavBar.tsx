import { JSX, useState } from "react";
import Button from "./Button";

export default function NavBar(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const menuItem = ["Home", "About Us", "Our Cakes", "Contact Us"] as const;
  const menuBtnStyle: string =
    "block md:hidden absolute right-5 top-5 w-[40px] cursor-pointer";

  const ulStyle: string = `${
    isOpen ? "flex" : "hidden"
  } absolute  top-10 left-1/2 -translate-x-1/2 z-10 w-1/2 text-center flex-col bg-black text-white p-4 rounded-2xl gap-[20px] md:gap-[20px] lg:gap-[60px]
              md:static  md:top-auto md:left-auto md:translate-x-0 md:z-auto md:flex md:flex-row md:bg-transparent md:w-full md:text-black md:p-0 md:rounded-none`;

  return (
    <header className="bg-white h-[80px] w-full">
      <nav className="flex justify-between items-center  h-full px-4">
        <h1 className="text-4xl font-bold">The Cake Lab</h1>
        <div className="flex  md:w-auto items-center nav__logo__container">
          {!isOpen && (
            <img
              className={menuBtnStyle}
              src="/assets/icons8-menu.svg"
              alt="open btn"
              onClick={() => setIsOpen(true)}
            />
          )}
          {isOpen && (
            <img
              className={menuBtnStyle}
              src="/assets/icons8-close.svg"
              alt="close btn"
              onClick={() => setIsOpen(false)}
            />
          )}
        </div>
        <div>
          <ul className={ulStyle}>
            {menuItem.map((item) => (
              <li
                key={item}
                className="lg:text-[20px] cursor-pointer transition-transform transform hover:scale-[1.1]"
              >
                {item}
              </li>
            ))}

            {/* Show only on mobile */}
            <li className="block md:hidden">
              <Button isHover={false}>Log in</Button>
            </li>
          </ul>
        </div>
        <Button className="hidden md:block">Log in</Button>
      </nav>
    </header>
  );
}
