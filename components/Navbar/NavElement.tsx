import Link from "next/link";
import React from "react";

type Props = {
  label: string;
  href: string;
};

const NavElement = (props: Props) => {
  return (
    <Link href={props.href} className="text-white cursor-pointer hover:text-gray-300 transition text-sm font-light tracking-wider">
      {props.label}
    </Link>
  );
};

export default NavElement;
