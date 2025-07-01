import ChartWrapper from "../../../../cards/chartWrapper";
import TaskCard from "../../../../cards/taskCard";

const EmployeeData = () => {
  const workAllocatedTabs = [
    {
      label: "Tasks 10",
      value: "tasks",
    },
    {
      label: "Issues 10",
      value: "issues",
    },
    {
      label: "Forms 10",
      value: "forms",
    },
  ];

  const workAllocatedData = [
    {
      title: "How to manage tasks",
      value: 10,
      id: 34526,
    },
    {
      title: "How to manage tasks",
      value: 10,
      id: 34526,
    },
    {
      title: "Tracking Daily Earnings",
      value: 10,
      id: 13423,
    },
    {
      title: "Tool for managing reservations",
      value: 10,
      id: 54346,
    },
    {
      title: "Tool for managing reservations",
      value: 10,
      id: 54346,
    },
    {
      title: "Coordinating Employee Shifts",
      value: 10,
      id: 12343,
    },
    {
      title: "Reviewing Client Happiness",
      value: 10,
      id: 65444,
    },
    {
      title: "Ways to prepare meals",
      value: 10,
      id: 48373,
    },
  ];
  return (
    <div>
      <ChartWrapper
        label={"Work Allocated"}
        tabs={workAllocatedTabs}
        childrenHeight="300px"
      >
        <div className="grid grid-cols-6 gap-4">
          {workAllocatedData.map((item, index) => (
            <div
              className={`col-span-6 sm:col-span-3 ${
                index >= workAllocatedData.length - 2
                  ? "lg:col-span-3"
                  : "lg:col-span-2"
              }`}
              key={item.value}
            >
              <TaskCard data={item} />
            </div>
          ))}
        </div>
      </ChartWrapper>
    </div>
  );
};

export default EmployeeData;
