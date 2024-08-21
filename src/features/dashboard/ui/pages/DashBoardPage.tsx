import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { TaskCardsLayout } from "../layouts";
import { CardShowProgressBar, StatusCheckICon, TaskCard } from "../components";

export const DashBoardPage = (): JSX.Element => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-start">
      <header className="py-5">
        <h1 className="text-4xl">Welcome back, Carlos</h1>
      </header>
      <div className="w-[90%] max-h-[640px] rounded-md border-1 shadow-sm border-[#A1A3AB] grid grid-cols-2 gap-x-3 gap-y-5 grid-rows-3 p-4">
        <TaskCardsLayout />
        <div className="row-span-1 flex justify-center">
          <CardShowProgressBar />
        </div>
        <div className="row-span-2 flex justify-center">
          <Card className="w-full h-full border-none bg-[#F5F8FF] shadow-lg">
            <CardHeader className="space-x-2">
              {/* <div className="flex items-center justify-start mt-4 ml-6"> */}
              <StatusCheckICon />
              <h1 className="text-primary text-lg">Task Completed</h1>
              {/* </div> */}
            </CardHeader>
            <CardBody className="w-full h-full border-none bg-[#F5F8FF] self-center shadow-lg">
              <div className="space-y-3 mt-4">
                {[1, 2, 3, 4].map((task) => {
                  return <TaskCard key={task} />;
                })}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};
