import Link from "next/link";
import React from "react";
import { BsFillPlayFill } from "react-icons/bs";

type Props = {
  slug: string;
};

const PlayButton = (props: Props) => {
  return (
    <Link
      href={`/movie/${props?.slug}`}
      className="bg-white text-black rounded-md p-2 px-3 text-sm lg:text-lg font-semibold flex flex-row items-center hover:bg-opacity-80 transition cursor-pointer"
    >
      <BsFillPlayFill className="mr-2" size={26} />
      Play
    </Link>
  );
};

export default PlayButton;
