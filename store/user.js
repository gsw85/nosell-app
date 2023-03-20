import { create } from "zustand";
export const useCurrentUser = create((set) => ({
  walletAddress: "",
  setUser: (walletAddress) =>
    set((state) => ({
      ...state,
      walletAddress: walletAddress,
    })),
  setUserClear: () =>
    set((state) => ({
      ...state,
      walletAddress: "",
    })),
}));
