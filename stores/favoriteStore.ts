import { MovieData } from "@/typings";

import { create } from "zustand";

type FavoriteStore = {
  favorites: string[];
  setFavorites: (movie: string[]) => void;
};
const useFavoriteStore = create<FavoriteStore>((set) => ({
  favorites: [],
  setFavorites: (favorites) => set({ favorites }),
}));

export default useFavoriteStore;
