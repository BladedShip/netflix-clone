import Image from "next/image";
import { BsBell, BsSearch } from "react-icons/bs";

import NavElement from "./NavElement";
import DropdownSmall from "./DropdownSmall";
import AccountSwitcher from "./AccountSwitcher";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="w-full fixed z-50">
      <div className="px-4 md:px-16 py-6 flex flex-row items-center transition duration-700 ">
        <Image
          src="/assets/logo.png"
          alt="Netflix Logo"
          width={120}
          height={50}
        />
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavElement label="Home" />
          <NavElement label="TV Shows" />
          <NavElement label="Movies" />
          <NavElement label="New & Popular" />
          <NavElement label="My List" />
          <NavElement label="Browse By Languages" />
        </div>
        <DropdownSmall />
        <div className="flex flex-row ml-auto gap-6 items-center">
          <div className="text-gray-300 hover:text-gray-500 cursor-pointer transition">
            <BsSearch size={20} />
          </div>
          <div className="text-gray-300 hover:text-gray-500 cursor-pointer transition">
            <BsBell size={20} />
          </div>
          <AccountSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
