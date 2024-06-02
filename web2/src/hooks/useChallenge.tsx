import { create } from "zustand";

type UseChallengeType = {
  challenge: ChallengeType | null;
  isOpen: boolean;
  setChallenge: (challenge: ChallengeType | undefined) => void;
  setIsOpen: (isOpen: boolean) => void;
};

export const useChallenge = create<UseChallengeType>((set) => ({
  challenge: null,
  isOpen: false,
  setChallenge: (challenge) => set({ challenge }),
  setIsOpen: (isOpen) => set({ isOpen }),
}));
