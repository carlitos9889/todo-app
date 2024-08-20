import { Card, CardBody, CircularProgress } from "@nextui-org/react";
import { FC } from "react";

enum Indicator {
  Completed = "completed",
  InProgress = "in-progress",
  NotStarted = "not-started",
}

interface PropsCircleProgressBar {
  status: Indicator;
  valueLable: string;
  value: number;
}

const statusColors = {
  [Indicator.Completed]: {
    circle: "stroke-[#04C400]",
    dot: "bg-[#04C400]",
  },
  [Indicator.InProgress]: {
    circle: "stroke-[#0225FF]",
    dot: "bg-[#0225FF]",
  },
  [Indicator.NotStarted]: {
    circle: "stroke-[#F21E1E]",
    dot: "bg-[#F21E1E]",
  },
};

const CircleProgressBar: FC<PropsCircleProgressBar> = ({
  status,
  valueLable,
  value = 0,
}) => {
  return (
    <div>
      <CircularProgress
        classNames={{
          svg: "w-24 h-24 drop-shadow-md",
          indicator: statusColors[status].circle,
          track: "stroke-black/10",
          value: "text-lg font-semibold text-black",
        }}
        value={value}
        strokeWidth={4}
        showValueLabel={true}
      />
      <div className="flex items-center justify-center space-x-2">
        <div className={`w-2 h-2 rounded-full ${statusColors[status].dot}`} />
        <p>{valueLable}</p>
      </div>
    </div>
  );
};

export const CardShowProgressBar = () => {
  return (
    <Card className="w-full h-[85%] border-none bg-[#F5F8FF] self-center">
      <CardBody className="flex-row justify-evenly items-center pb-0">
        <CircleProgressBar
          status={Indicator.Completed}
          valueLable={"Completed"}
          value={10}
        />
        <CircleProgressBar
          status={Indicator.InProgress}
          valueLable={"In Progress"}
          value={20}
        />
        <CircleProgressBar
          status={Indicator.NotStarted}
          valueLable={"No Started"}
          value={30}
        />
      </CardBody>
    </Card>
  );
};
