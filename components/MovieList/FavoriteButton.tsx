"use client";

// import axios from "axios";
import { AiOutlineCheck, AiOutlinePlus } from "react-icons/ai";
import { useMemo } from "react";

// import useCurrentUser from "@/hooks/useCurrentUser";
// import getFavorites from "@/hooks/getFavorites";
// import { useCookies } from "react-cookie";
import useFavoriteStore from "@/stores/favoriteStore";

type Props = {
  movieSlug: string;
};

const FavoriteButton = (props: Props) => {
  // const { data: user, mutate } = useCurrentUser();
  // const { mutate: mutateFavs } = getFavorites();

  // const isFavorite = useMemo(() => {
  //   const favoriteList = user?.favorites || [];

  //   return favoriteList.includes(props.movieSlug);
  // }, [user, props.movieSlug]);

  // const toggleFavorites = useCallback(async () => {
  //   let res;

  //   if (isFavorite) {
  //     res = await axios.delete("/api/favorite", {
  //       data: {
  //         movieSlug: props.movieSlug,
  //       },
  //     });
  //   } else {
  //     res = await axios.post("/api/favorite", {
  //       movieSlug: props.movieSlug,
  //     });
  //   }

  //   const updatedFavorites = res?.data?.favorites;

  //   mutate({
  //     ...user,
  //     favorites: updatedFavorites,
  //   });

  //   mutateFavs();
  // }, [props.movieSlug, user, mutate, mutateFavs, isFavorite]);

  const [favorites, setFavorites] = useFavoriteStore((state) => [
    state.favorites,
    state.setFavorites,
  ]);

  const toggleFavorites = () => {
    if (isFavorite) {
      setFavorites(favorites.filter((slug) => slug !== props.movieSlug));
    } else {
      setFavorites([...favorites, props.movieSlug]);
    }
  };

  const isFavorite = useMemo(() => {
    return favorites?.includes(props.movieSlug);
  }, [favorites, props.movieSlug]);
  return (
    <button
      className="cursor-pointer w-6 h-6 lg:w-10 lg:h-10 border-white border-2 rounded-full flex items-center justify-center transition hover:opacity-80"
      onClick={(e) => {
        e.preventDefault();
        toggleFavorites();
      }}
    >
      {isFavorite ? (
        <AiOutlineCheck className="text-white" size={26} />
      ) : (
        <AiOutlinePlus className="text-white" size={26} />
      )}
    </button>
  );
};

export default FavoriteButton;
