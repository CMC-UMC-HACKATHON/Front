import { getChallenges } from "@/services/challenges.service";
import { useQuery } from "@tanstack/react-query";
import { useId } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Skeleton } from "../ui/skeleton";

export function ChallengeList() {
  const [searchParams, _setSearchParams] = useSearchParams();
  const id = useId();

  const sortBy = searchParams.get("sortBy") as "LATEST" | "POPULAR";

  const { data: challenges } = useQuery({
    queryKey: ["challenges", sortBy],
    queryFn: async () => getChallenges(sortBy),
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    select: (data) => data.result as ChallengeType[],
  });

  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-14">
      {challenges && challenges.length > 0 ? (
        challenges.map((challenge) => (
          <Link
            to={`/challenge/${challenge.challengeId}`}
            key={challenge.challengeId}
            className="col-span-1 min-h-[170px] max-w-[240px] flex flex-col gap-2"
          >
            <img
              src={challenge.categoryImage}
              className="object-cover w-full h-[150px]"
            />
            <div className="flex items-center gap-1">
              <div className="w-[56px] h-[22px] flex items-center justify-center rounded-[4px] bg-[#D5D4FF] text-[#593EEC]">
                {challenge.category}
              </div>
            </div>
            <div className="flex flex-col gap-0.5">
              <h2 className="text-[16px] font-medium">{challenge.title}</h2>
              <p className="text-[14px] text-[#737373]">
                {challenge.startDate} - {challenge.endDate}
              </p>
            </div>
          </Link>
        ))
      ) : (
        <div className="grid grid-cols-2 gap-x-3 gap-y-14">
          {Array.from({ length: 4 }).map((_) => (
            <Skeleton key={id} className="h-[170px] w-[240px] col-span-1" />
          ))}
        </div>
      )}
    </div>
  );
}
