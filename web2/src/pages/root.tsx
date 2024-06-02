import { BottomNav } from "@/components/bottom-nav";
import { CustomDrawer } from "@/components/custom-drawer";
import { useChallenge } from "@/hooks/useChallenge";
import { Outlet } from "react-router-dom";

export default function Root() {
  const { isOpen } = useChallenge();
  return (
    <div className="w-screen h-screen flex justify-center">
      {isOpen && <CustomDrawer />}
      <div className="absolute bottom-8">
        <Outlet />
      </div>
      {/* <BottomNav /> */}
    </div>
  );
}
