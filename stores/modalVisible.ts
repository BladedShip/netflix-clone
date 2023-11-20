import { create } from "zustand";

type ModalStore = {
  isVisible: boolean;
  setIsVisible: (visible: boolean) => void;
};

const useModalStore = create<ModalStore>((set) => ({
  isVisible: false,
  setIsVisible: (isVisible) => set({ isVisible }),
}));

export default useModalStore;
