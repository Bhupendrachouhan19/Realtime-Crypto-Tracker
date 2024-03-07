import React, { useState } from "react";
import KoinXLogo from "../../utils/assets/KoinXLogo.svg";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Crypto Taxes", link: "/" },
    { name: "Free Tools", link: "/" },
    { name: "Resource Center", link: "/" },
  ];

  const handleOpenMenu = () => setOpen(!open);

  return (
    <div className="md:flex justify-between items-center shadow-md w-full md:fixed md:top-0 md:left-0 bg-white">
      <div>
        <img
          src={KoinXLogo}
          alt="KoinX"
          className="h-10 md:h-12 my-3 md:ml-8 ml-3"
        />
      </div>

      <div
        onClick={() => handleOpenMenu()}
        className="text-3xl absolute top-5 right-3 md:hidden cursor-pointer"
      >
        <ion-icon name={open ? "close" : "menu"}></ion-icon>
      </div>

      <div className="flex md:mr-6">
        <ul
          className={`${
            open ? "top-15" : "top-[-490px]"
          } md:flex pl-4 border border-blue-400 rounded-b-2xl md:border-none items-center md:w-auto md:justify-around pb-1 absolute md:static md:gap-4 lg:gap-x-10 bg-white w-full transition-all ease-in-out duration-700 md:z-auto opacity-0 md:opacity-100`}
        >
          {navLinks.map((nav) => (
            <li key={nav.name} className="my-6 md:min-w-fit">
              <a href={nav.link} className="hover:text-blue-500 duration-300">
                {nav.name}
              </a>
            </li>
          ))}
          <li className="bg-[#1b4bef] my-6 w-fit text-white px-6 py-1 rounded-md hover:bg-blue-800 duration-300">
            <a href="/">Get Started</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
