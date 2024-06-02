import { ChallengeFilter } from "@/components/challenge/challenge-filter";
import { ChallengeHeader } from "@/components/challenge/challenge-header";
import { ChallengeList } from "@/components/challenge/challenge-list";

export default function ChallengePage() {
  return (
    <div className="w-[400px] h-full flex flex-col gap-6 pb-6">
      <ChallengeHeader />
      <ChallengeFilter />
      <ChallengeList />
    </div>
  );
}
