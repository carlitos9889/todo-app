import { TaskCardsLayout } from "../layouts";

export const DashBoardPage = (): JSX.Element => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-start">
      <header className="py-5">
        <h1 className="text-4xl">Welcome back, Carlos</h1>
      </header>
      <div className="h-5/6 w-[90%] max-h-[640px] rounded-md border-1 shadow-sm border-[#A1A3AB] grid grid-cols-2 gap-3 grid-rows-2 px-4">
        <TaskCardsLayout />
        <div className="row-span-1 flex justify-center">
          body body body body
        </div>
        <div className="row-span-1 flex justify-center">
          body body body body
        </div>
      </div>
    </div>
  );
};
