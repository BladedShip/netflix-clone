import { MovieData } from "@/typings";

import { create } from "zustand";

type MovieStore = {
  movie?: MovieData;
  setMovie: (movie: MovieData) => void;
};
const useMovieStore = create<MovieStore>((set) => ({
  movie: undefined,
  setMovie: (movie) => set({ movie }),
}));

export default useMovieStore;
