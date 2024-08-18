import { Input } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import { NotificationsIcon } from "./NotificationsIcon";
import { CalendarioIcon } from "./CalendarioIcon";
import { useDate } from "../hooks";

export const Header = () => {
  const { getCurrentDate, getCurrentDay } = useDate({
    currentDate: new Date(),
  });

  return (
    <header className="bg-[#F8F8F8] shadow-md static flex items-center py-4 justify-around">
      <p className="text-primary font-bold text-4xl">
        Dash<span className="text-black">board</span>
      </p>
      <Input
        className="w-2/5 hidden md:block"
        placeholder="Search your taks here ..."
        endContent={<SearchIcon />}
      />
      <div className="flex gap-x-8 items-center">
        <div className="flex gap-x-2 items-center">
          <NotificationsIcon />
          <CalendarioIcon />
        </div>
        <div className="text-sm">
          {getCurrentDay()} <br />{" "}
          <span className="text-secondary">{getCurrentDate()}</span>
        </div>
      </div>
    </header>
  );
};
