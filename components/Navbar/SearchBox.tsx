"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";

type Props = {
  searchParams?: any;
};

const SearchBox = (props: Props) => {
  const path = usePathname();
  const router = useRouter();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search) {
      router.push(`/search?query=${search}`);
    } else if (path?.includes("/search")) {
      router.push(`/search`);
    }
  }, [search]);

  return (
    <button
      className="text-gray-300 hover:text-gray-500 cursor-pointer transition"
      onClick={(e) => {
        if (!path?.includes("/search")) {
          router.push(`/search`);
        }
        e.preventDefault();
        router.push(`/search`);
      }}
    >
      {path?.includes("/search") ? (
        <div className="flex gap-2 border p-2 items-center justify-center">
          <BsSearch size={20} className="text-white" />
          <input
            placeholder="Search..."
            className="bg-transparent outline-none text-white text-sm"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            id="search"
          />
        </div>
      ) : (
        <BsSearch size={20} />
      )}
    </button>
  );
};

export default SearchBox;
