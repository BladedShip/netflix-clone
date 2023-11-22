import Image from "next/image";
import { BsBell } from "react-icons/bs";

import NavElement from "./NavElement";
import DropdownSmall from "./DropdownSmall";
import AccountSwitcher from "./AccountSwitcher";
import SearchBox from "./SearchBox";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="w-full fixed z-50">
      <div className="px-4 md:px-16 py-6 flex flex-row items-center transition duration-700 ">
        <Link href={"/"}>
          <Image
            src="/assets/logo.png"
            alt="Netflix Logo"
            width={120}
            height={50}
          />
        </Link>
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavElement label="Home" href={"/"} />
          <NavElement label="TV Shows" href={"/"} />
          <NavElement label="Movies" href={"/"} />
          <NavElement label="New & Popular" href={"/"} />
          <NavElement label="My List" href={"/"} />
          <NavElement label="Browse By Languages" href={"/"} />
        </div>
        <DropdownSmall />
        <div className="flex flex-row ml-auto gap-6 items-center">
          <SearchBox />
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
