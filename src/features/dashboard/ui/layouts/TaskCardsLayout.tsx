import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { IconWithTitle, TodoIcon, AddIcon, TaskCard } from "../components";

export const TaskCardsLayout = () => {
  return (
    <Card className="row-span-3 w-full h-full border-none bg-[#F5F8FF] self-center shadow-lg">
      <CardHeader>
        <div className="flex justify-between w-full">
          <IconWithTitle>
            <TodoIcon />
            <p className="text-primary text-sm">To-do</p>
          </IconWithTitle>
          <IconWithTitle>
            <AddIcon />
            <p className="text-sm text-gray-400">Add task</p>
          </IconWithTitle>
        </div>
      </CardHeader>
      <CardBody>
        <div className="space-y-3 mt-4">
          {[1, 2, 3, 4].map((task) => {
            return <TaskCard key={task} />;
          })}
        </div>
      </CardBody>
    </Card>
  );
};
