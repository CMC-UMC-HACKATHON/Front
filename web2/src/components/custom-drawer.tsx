import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { useChallenge } from "@/hooks/useChallenge";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export function CustomDrawer() {
  const router = useNavigate();

  const { isOpen, setIsOpen, challenge } = useChallenge();

  const [isConfirmed, setIsConfirmed] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        setIsConfirmed(true);
      }, 3000);
    }
  }, [isOpen]);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerContent className="h-[50vh] flex flex-col gap-10 items-center justify-center">
        {isConfirmed ? (
          <Button
            onClick={() => {
              router(`/challenge/${challenge?.challengeId}/mypage`);
              setIsOpen(false);
            }}
            variant="secondary"
            size="default"
          >
            인증 완료
          </Button>
        ) : (
          <>
            <Loader2 className="w-20 h-20 animate-spin" />
            <div className="text-lg font-semibold">결제중,,,</div>
          </>
        )}
      </DrawerContent>
    </Drawer>
  );
}
