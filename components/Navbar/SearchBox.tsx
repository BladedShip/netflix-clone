"use client";

import useSearchStore from "@/stores/searchStore";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { BsSearch } from "react-icons/bs";

type Props = {};

const SearchBox = (props: Props) => {
  const path = usePathname();
  const router = useRouter();

  const [search, setSearch] = useSearchStore((state) => [
    state.search,
    state.setSearch,
  ]);

  // Did not implement a debounce here because We're searching through a small amount of data.
  // If it was a larger amount, pagination along with delays would be a better solution

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
        e.preventDefault();
        if (!path?.includes("/search")) {
          router.push(`/search`);
        }
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
