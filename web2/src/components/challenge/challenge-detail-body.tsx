import {
  getChallenge,
  participateChallenge,
} from "@/services/challenges.service";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { Skeleton } from "../ui/skeleton";
import { DayIcon, DocsIcon, RefundIcon } from "../ui/icons";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";
import { useChallenge } from "@/hooks/useChallenge";
import { useEffect } from "react";

export function ChallengeDetailBody() {
  const router = useNavigate();
  const params = useParams();
  const challengeId = params.id;

  const accessToken = localStorage.getItem("accessToken");

  const { setChallenge } = useChallenge();

  const { data: challenge } = useQuery({
    queryKey: ["challenge", challengeId],
    queryFn: async () => await getChallenge(parseInt(challengeId!)),
    enabled: !!challengeId,
    select: (data) => data.result as ChallengeType,
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: async () =>
      await participateChallenge(parseInt(challengeId!), accessToken!),
  });

  useEffect(() => {
    setChallenge(challenge);
  }, [challenge]);

  return (
    <>
      {challenge ? (
        <div className="flex flex-col ">
          <img
            src={challenge?.categoryImage}
            className="w-full object-cover h-[260px]"
          />
          <div className="flex flex-col pt-10 px-5 gap-5">
            <h2 className="font-bold text-[24px]">{challenge.title}</h2>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <DayIcon />
                <span className="text-[14px]">
                  {challenge.startDate} ~ {challenge.endDate}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <DayIcon />
                <span className="text-[14px]">
                  {challenge.participantNum}명의 챌린저와 함께 하고 있어요
                </span>
              </div>
            </div>
            <div className="bg-[#F3F3F3] h-2.5 w-[calc(100%+40px)] -ml-[20px]" />
          </div>
          <div className="flex flex-col gap-2 pt-8 px-5">
            <div className="flex items-center justify-between">
              <span className="text-[16px] font-semibold">
                챌린저 도전 금액
              </span>
              <span className="text-[16px] text-[#7E71FF] font-semibold">
                {challenge.challengeAmount}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[16px] font-semibold">총 금액</span>
              <span className="text-[16px] text-[#7E71FF] font-semibold">
                {challenge.challengeTotalAmount}
              </span>
            </div>
            <div className="w-full h-0.5 bg-[#ECECEC] my-7" />
          </div>
          <div className="flex flex-col px-5 gap-4">
            <div className="flex items-center gap-2.5">
              <DocsIcon />
              <h2 className="font-semibold text-[16px]">챌린지 설명</h2>
            </div>
            <div className="flex flex-col gap-5 text-[14px]">
              <span>
                일일 스크린 타임 4시간 이상 달성 시 챌린지 순위 선정에서
                제한됩니다.
              </span>
              <span>
                일일 스크린 타임 4시간 이하 달성한 챌린저만 챌린지 순위에
                선정되실 수 있습니다.
              </span>
              <span className="text-[#593EEC]">
                일일 미션을 통해 3등까지 챌린지의 순위가 부여되고, 참여 상금도
                3등까지 수령하실 수 있습니다.
              </span>
              <span>
                랜덤박스는 우승 상금으로 금액에 맞는 랜덤 상품이 지급됩니다.
                MONEY는 우승 상금으로 금액이 지급됩니다
              </span>
              <span className="text-[#7E71FF]">
                **챌린지는 동일 기간에 중복 참여 불가능합니다.
              </span>
            </div>
            <div className="w-full h-0.5 bg-[#ECECEC] my-7" />
            <div className="flex items-center gap-2.5">
              <RefundIcon />
              <h2 className="font-semibold text-[16px]">환불 정책</h2>
            </div>
            <div className="flex flex-col gap-5 text-[14px]">
              <div className="flex flex-col gap-2">
                <span className="font-semibold">
                  챌린지 시작 전까지 100% 환불
                </span>
                <span>
                  챌린지가 시작되기 전까지 신청한 챌린지를 자유롭게 취소할 수
                  있습니다.
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-semibold">챌린지 시작 후 취소 불가</span>
                <span>
                  챌린지는 여러 회원님들이 함께 하는 대회인만큼, 챌린지
                  시작후에는 환불이 불가능합니다.
                </span>
              </div>
            </div>
          </div>
          <Button
            disabled={isPending}
            variant="ghost"
            size="default"
            className="bg-[#593EEC] rounded-[10px] h-12 text-white font-semibold flex items-center justify-center my-7 mx-5"
            onClick={async () => {
              await mutateAsync();
              router("/pay");
            }}
          >
            {isPending ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              "참가하기"
            )}
          </Button>
        </div>
      ) : (
        <Skeleton className="w-screen h-full" />
      )}
    </>
  );
}
