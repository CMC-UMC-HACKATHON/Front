import { ChevronLeft } from "lucide-react";

export function ChallengeDetailHeader() {
  return (
    <div className="relative py-2 w-screen justify-center h-[45px] flex items-center">
      <ChevronLeft className="w-8 h-8 cursor-pointer absolute top-[52.5%] left-4 translate-y-[-50%]" />
      <h2 className="text-[#171717] text-[18px] font-semibold">챌린지 상세</h2>
    </div>
  );
}
