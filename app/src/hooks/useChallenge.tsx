import {create} from 'zustand';

type ChallengeProps = {
  challengeId: string | null;
  sortBy: 'LATEST' | 'POPULAR';
  setChallengeId: (challengeId: string) => void;
  setSortBy: (sortBy: 'LATEST' | 'POPULAR') => void;
};

export const useChallenge = create<ChallengeProps>(set => ({
  challengeId: null,
  sortBy: 'LATEST',
  setChallengeId: challengeId => set({challengeId}),
  setSortBy: sortBy => set({sortBy}),
}));
