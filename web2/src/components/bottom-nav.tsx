import { Home, Paperclip, User2 } from "lucide-react";
import { Link } from "react-router-dom";

export function BottomNav() {
  return (
    <div className="fixed bg-white bottom-0 left-0 px-10 py-4 w-full min-h-6 flex items-center">
      <Link
        to="/"
        className="flex-1 cursor-pointer flex flex-col items-center gap-2"
      >
        <Home className="w-5 h-5" />
        <span>챌린지</span>
      </Link>
      <Link
        to="/"
        className="flex-1 cursor-pointer flex flex-col items-center gap-2"
      >
        <Paperclip className="w-5 h-5" />
        <span>미션</span>
      </Link>
      <Link
        to={"/"}
        className="flex-1 cursor-pointer flex flex-col items-center gap-2"
      >
        <User2 className="w-5 h-5" />
        <span>MY</span>
      </Link>
    </div>
  );
}
