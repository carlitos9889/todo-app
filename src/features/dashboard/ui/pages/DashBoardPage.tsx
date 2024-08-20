import { Card, CardBody, CircularProgress } from "@nextui-org/react";
import { TaskCardsLayout } from "../layouts";
import { CardShowProgressBar } from "../components";

export const DashBoardPage = (): JSX.Element => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-start">
      <header className="py-5">
        <h1 className="text-4xl">Welcome back, Carlos</h1>
      </header>
      <div className="h-5/6 w-[90%] max-h-[640px] rounded-md border-1 shadow-sm border-[#A1A3AB] grid grid-cols-2 gap-x-3 gap-y-5 grid-rows-3 px-4">
        <TaskCardsLayout />
        <div className="row-span-1 flex justify-center">
          <CardShowProgressBar />
        </div>
        <div className="row-span-2 flex justify-center">
          <Card className="w-full h-full border-none bg-[#F5F8FF]">
            <CardBody className="flex-row justify-center items-center pb-0">
              <CircularProgress
                color="success"
                classNames={{
                  svg: "w-32 h-32 drop-shadow-md",
                  indicator: "stroke-[#04C400]",
                  track: "stroke-white/10",
                  value: "text-3xl font-semibold text-white",
                }}
                value={70}
                strokeWidth={4}
                showValueLabel={true}
              />
              <CircularProgress
                classNames={{
                  svg: "w-32 h-32 drop-shadow-md",
                  indicator: "stroke-[#04C400]",
                  track: "stroke-white/10",
                  value: "text-3xl font-semibold text-white",
                }}
                value={70}
                strokeWidth={4}
                showValueLabel={true}
              />
              <CircularProgress
                label="Speed"
                size="lg"
                value={70}
                color="success"
                formatOptions={{ style: "unit", unit: "kilometer" }}
                showValueLabel={true}
              />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};
