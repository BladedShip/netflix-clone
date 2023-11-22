"use client";

import { useCallback, useState } from "react";
import { BsChevronDown } from "react-icons/bs";

import NavElement from "./NavElement";

type Props = {};

const DropdownSmall = (props: Props) => {
  const [menuShown, setMenuShown] = useState<boolean>(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={(e) => {
          e.preventDefault();
          setMenuShown(!menuShown);
        }}
        className="flex-row flex items-center gap-2 ml-8 cursor-pointer relative"
      >
        <p className="text-white text-sm">Browse</p>
        <BsChevronDown className="text-white" size={20} />
      </button>
      {menuShown && (
        <div className="bg-black absolute w-60 p-6 top-16 left-2 flex-col border border-gray-500 flex">
          <div className="flex flex-col gap-4">
            <NavElement label="Home" href={"/"} />
            <NavElement label="TV Shows" href={"/"} />
            <NavElement label="Movies" href={"/"} />
            <NavElement label="New & Popular" href={"/"} />
            <NavElement label="My List" href={"/"} />
            <NavElement label="Browse By Languages" href={"/"} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownSmall;
