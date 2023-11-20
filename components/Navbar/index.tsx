import Image from "next/image";

import NavElement from "./NavElement";
import DropdownSmall from "./DropdownSmall";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="w-full fixed z-50">
      <div className="px-4 md:px-16 py-6 flex flex-row items-center transition duration-700 bg-zinc-900 bg-opacity-90">
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
      </div>
    </nav>
  );
};

export default Navbar;
