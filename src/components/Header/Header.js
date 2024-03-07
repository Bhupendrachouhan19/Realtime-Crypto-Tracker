import React, { useState } from "react";
import { Link } from "react-router-dom";
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
    <div className="md:flex justify-between items-center shadow-md w-full bg-white">
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

      <div className="flex md:mr-8">
        <ul
          className={`${open? 'top-auto'  : 'top-[-496px]' } md:flex md:justify-around items-center md:pb-0 pb-3 absolute md:static
          bg-white md:z-auto md:gap-10 w-full md:w-auto pl-3 md:border-none border-2 border-blue-400 rounded-b-2xl transition-all duration-500 ease-in-out `}
        >
          {navLinks.map((nav) => (
            <li key={nav.name} className="my-6 md:min-w-fit">
              <Link
                to={nav.link}
                className="hover:text-blue-500 hover:cursor-pointer duration-300"
              >
                {nav.name}
              </Link>
            </li>
          ))}
          <li className="bg-[#1b4bef] my-6 w-fit md:min-w-fit text-white px-6 py-1 rounded-md hover:bg-blue-800 hover:cursor-pointer duration-700 transition-all ease-in-out">
            <Link to="/">Get Started</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
