import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  title: string;
};

const FooterLink = (props: Props) => {
  return (
    <Link href={props.href} target="_blank" referrerPolicy="no-referrer" className="text-zinc-500 text-xs py-2 hover:underline">
      {props.title}
    </Link>
  );
};

export default FooterLink;
