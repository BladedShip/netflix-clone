import React from "react";

type Props = {
  label: string;
};

const NavElement = (props: Props) => {
  return (
    <div className="text-white cursor-pointer hover:text-gray-300 transition text-sm font-light tracking-wider">
      {props.label}
    </div>
  );
};

export default NavElement;
