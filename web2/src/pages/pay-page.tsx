import { Button } from "@/components/ui/button";
import { useChallenge } from "@/hooks/useChallenge";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function PayPage() {
  const router = useNavigate();

  const { challenge } = useChallenge();

  return (
    <div className="flex flex-col">
      <div className="relative py-2 w-screen justify-center h-[45px] flex items-center">
        <ChevronLeft className="w-8 h-8 cursor-pointer absolute top-[52.5%] left-4 translate-y-[-50%]" />
        <h2 className="text-[#171717] text-[18px] font-semibold">결제하기</h2>
      </div>
      <div className="m-6 border border-solid border-[#D5D4FF] bg-white rounded-[10px] flex flex-col">
        <>
          <h2 className="h-11 flex items-center pl-4 font-semibold text-[16px]">
            챌린지 정보
          </h2>
          <div className="h-0.5 w-full bg-[#D5D4FF] mb-5" />
        </>
        <div className="flex items-center pl-6 pb-6 gap-4">
          <img
            src={challenge?.categoryImage}
            className="w-[80px] h-[80px] rounded-[8px]"
          />
          <div className="flex flex-col justify-center gap-3">
            <div className="flex flex-col gap-0.5">
              <span className="font-medium text-[15px]">
                {challenge?.title}
              </span>
              <span className="text-[14px] text-[#737373]">
                {challenge?.startDate} ~ {challenge?.endDate}
              </span>
            </div>
            <div className="w-[56px] h-[22px] flex items-center justify-center rounded-[4px] bg-[#D5D4FF] text-[#593EEC]">
              {challenge?.category}
            </div>
          </div>
        </div>
      </div>
      <div className="m-6 border border-solid border-[#D5D4FF] bg-white rounded-[10px] flex flex-col">
        <>
          <h2 className="h-11 flex items-center pl-4 font-semibold text-[16px]">
            결제 금액
          </h2>
          <div className="h-0.5 w-full bg-[#D5D4FF] mb-5" />
        </>
        <div className="flex flex-col items-center w-full gap-4">
          <div className="flex items-center w-full justify-between px-5">
            <span>총 참가비</span>
            <span>{challenge?.challengeTotalAmount}</span>
          </div>
          <div className="flex items-center w-full justify-between px-5 pb-5">
            <span>누적 예상 금액</span>
            <span>{challenge ? challenge.challengeTotalAmount * 100 : 0}</span>
          </div>
        </div>
      </div>
      <Button
        onClick={() => router(`/challenge/${challenge?.challengeId}/mission`)}
        variant="ghost"
        size="default"
        className="bg-[#593EEC] rounded-[10px] h-12 text-white font-semibold flex items-center justify-center my-7 mx-5"
      >
        결제하기
      </Button>
    </div>
  );
}
