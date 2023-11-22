import { create } from "zustand";

type SearchStore = {
  search: string;
  setSearch: (search: string) => void;
};
const useSearchStore = create<SearchStore>((set) => ({
  search: "",
  setSearch: (search) => set({ search }),
}));

export default useSearchStore;
