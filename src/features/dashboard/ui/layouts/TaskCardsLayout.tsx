import { IconWithTitle, TodoIcon, AddIcon, TaskCard } from "../components";

export const TaskCardsLayout = () => {
  return (
    <div className="row-span-3 justify-self-center self-center card-layout w-full h-[95%]">
      <section className="flex justify-between w-full">
        <IconWithTitle>
          <TodoIcon />
          <p className="text-primary text-sm">To-do</p>
        </IconWithTitle>
        <IconWithTitle>
          <AddIcon />
          <p className="text-sm text-gray-400">Add task</p>
        </IconWithTitle>
      </section>
      {/* Ajuste del overflow en el segundo section */}
      <section className="space-y-3 mt-4 h-[90%] overflow-auto">
        {[1, 2, 3, 4].map((task) => {
          return <TaskCard key={task} />;
        })}
      </section>
    </div>
  );
};
