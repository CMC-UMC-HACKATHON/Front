import { Button } from "@/components/ui/button";
import { useChallenge } from "@/hooks/useChallenge";
import { getChallenge } from "@/services/challenges.service";
import { getMissions } from "@/services/mission.service";
import { useQuery } from "@tanstack/react-query";
import { CheckCircle } from "lucide-react";
import { useParams } from "react-router-dom";

export default function MissionPage() {
  const params = useParams();
  const challengeId = params.id;

  const { setIsOpen } = useChallenge();

  const { data: challenge } = useQuery({
    queryKey: ["challenge", challengeId],
    queryFn: async () => await getChallenge(parseInt(challengeId!)),
    enabled: !!challengeId,
    select: (data) => data.result as ChallengeType,
  });

  const { data: missions } = useQuery({
    queryKey: ["missions", challengeId],
    queryFn: async () => getMissions(parseInt(challengeId!)),
    enabled: !!challengeId,
    select: (data) => data.result,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="flex h-screen flex-col w-screen pt-32 p-5 gap-10">
      <div className="flex items-center w-full justify-between">
        <div className="flex flex-col gap-1">
          <span className="font-bold text-[20px]">{challenge?.title}</span>
          <span className="text-[#737373] text-[12px]">
            {challenge?.startDate} ~ {challenge?.endDate}
          </span>
        </div>
        <div className="w-[56px] h-[22px] flex items-center justify-center rounded-[4px] bg-[#e2e2ff] text-[#593EEC]">
          {challenge?.category}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-[18px] font-semibold">필수 미션</span>
        <Button
          onClick={() => setIsOpen(true)}
          variant="ghost"
          size="default"
          className="bg-[#F2F3FF] flex items-center justify-start w-full text-[#593EEC] font-semibold text-[12px] cursor-pointer"
        >
          스크린샷 인증하기
        </Button>
      </div>
      <div className="flex flex-col gap-4">
        <span className="text-[18px] font-semibold">오늘의 미션</span>
        {missions && missions.length > 0
          ? missions.map((mission: MissionType) => (
              <div
                key={mission.missionId}
                className="flex items-center w-full justify-between"
              >
                <div className="flex items-center gap-6">
                  <CheckCircle className="w-5 h-5" />
                  <span>{mission.missionName}</span>
                </div>
                <Button variant="outline" size="default">
                  미션하기
                </Button>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
