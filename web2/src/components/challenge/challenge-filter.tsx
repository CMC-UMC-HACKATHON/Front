import { useSearchParams } from "react-router-dom";
import { Button } from "../ui/button";
import { useEffect } from "react";
import { cn } from "@/lib/utils";

export function ChallengeFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy");

  useEffect(() => {
    if (!sortBy) {
      setSearchParams({ sortBy: "LATEST" });
    }
  }, [sortBy]);

  const activeClass = "bg-[#593EEC] text-white";
  const inActiveClass = "bg-[#F2F3FF] text-[#593EEC]";

  return (
    <div className="flex items-center gap-1">
      <Button
        variant="ghost"
        size="default"
        className={cn(
          "font-medium text-[15px] flex items-center justify-center rounded-[100px]",
          sortBy === "LATEST" ? activeClass : inActiveClass
        )}
        onClick={() => setSearchParams({ sortBy: "LATEST" })}
      >
        최신순
      </Button>
      <Button
        variant="ghost"
        size="default"
        className={cn(
          "font-medium text-[15px] flex items-center justify-center rounded-[100px]",
          sortBy === "POPULAR" ? activeClass : inActiveClass
        )}
        onClick={() => setSearchParams({ sortBy: "POPULAR" })}
      >
        인기순
      </Button>
    </div>
  );
}
