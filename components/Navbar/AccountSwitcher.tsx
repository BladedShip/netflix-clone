"use client";

import React, { useState } from "react";
import { BsChevronDown } from "react-icons/bs";
import Image from "next/image";
import { signOut } from "next-auth/react";

type Props = {};

const AccountSwitcher = (props: Props) => {
  const profiles = [
    {
      name: "default-blue",
      img: "/assets/profile-img/default-blue.png",
    },
    {
      name: "default-green",
      img: "/assets/profile-img/default-green.png",
    },
    {
      name: "default-red",
      img: "/assets/profile-img/default-red.png",
    },
  ];
  const [menuShown, setMenuShown] = useState<boolean>(false);

  return (
    <div
      className="flex flex-row items-center gap-2 cursor-pointer relative"
      onClick={() => {
        setMenuShown(!menuShown);
      }}
    >
      <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-md overflow-hidden relative">
        <Image src="/assets/profile-img/default-blue.png" alt="Profile" fill />
      </div>
      <BsChevronDown className="text-white" size={20} />
      {menuShown && (
        <div className="bg-black absolute w-60 p-6 top-16 right-2 flex-col border border-gray-500 flex">
          <div className="flex flex-col gap-4">
            {profiles.map((profile) => (
              <div className="group/item px-3 flex flex-row gap-4 items-center w-full">
                <Image src={profile.img} alt="Profile" width={40} height={40} />
                <p className="text-white text-sm group-hover/item:underline">
                  {profile.name}
                </p>
              </div>
            ))}

            <hr className="h-px bg-gray-500 border-0 my-4" />
            <button
              className="px-4 text-center text-white text-sm hover:underline"
              onClick={(e) => {
                e.preventDefault();
                signOut();
              }}
            >
              Sign Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountSwitcher;
