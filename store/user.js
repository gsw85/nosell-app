import { create } from "zustand";
export const useCurrentUser = create((set) => ({
  userID: "",
  walletAddress: "",
  member: "",
  setUser: (walletAddress, member) =>
    set((state) => ({
      ...state,
      walletAddress: walletAddress,
      member: member,
    })),
  setUserClear: () =>
    set((state) => ({
      ...state,
      walletAddress: "",
    })),
}));
