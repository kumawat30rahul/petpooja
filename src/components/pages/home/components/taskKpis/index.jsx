import { Apple, BookText, ClipboardList, Info, Sparkles } from "lucide-react";
import KpiCard from "../../../../cards/kpiCard";
import { AIIcon } from "../../../../icons/icons";

const TasksKpis = () => {
  const tasksApiData = [
    {
      title: "22 Ai Review",
      icon: AIIcon("white", false),
      iconVariant: "default",
      data: [
        {
          title: "Manually Approve",
          value: 2,
          color: "text-red-500",
          background: "bg-red-500/10",
        },
        {
          title: "Completed",
          value: 10,
          color: "text-green-500",
          background: "bg-green-500/10",
        },
        {
          title: "Rejected by Ai",
          value: 10,
          color: "text-orange-500",
          background: "bg-orange-500/10",
        },
      ],
    },
    {
      title: "22 Tasks",
      icon: <ClipboardList />,
      iconVariant: "blue",

      data: [
        {
          title: "Ongoing",
          value: 10,
          color: "text-orange-500",
          background: "bg-orange-500/10",
        },
        {
          title: "Overdue",
          value: 2,
          color: "text-red-500",
          background: "bg-red-500/10",
        },
        {
          title: "Completed",
          value: 10,
          color: "text-green-500",
          background: "bg-green-500/10",
        },
        {
          title: "Scheduled",
          value: 0,
          color: "text-blue-500",
          background: "bg-blue-500/10",
        },
      ],
    },
    {
      title: "22 Issues",
      icon: <Info />,
      iconVariant: "red",
      data: [
        {
          title: "Ignored",
          value: 2,
          color: "text-red-500",
          background: "bg-red-500/10",
        },
        {
          title: "Resolved",
          value: 10,
          color: "text-green-500",
          background: "bg-green-500/10",
        },
        {
          title: "Open",
          value: 10,
          color: "text-orange-500",
          background: "bg-orange-500/10",
        },
      ],
    },
    {
      title: "20 Forms",
      icon: <BookText />,
      iconVariant: "blue",

      data: [
        {
          title: "Open Resources",
          value: 2,
          color: "text-red-500",
          background: "bg-red-500/10",
        },
        {
          title: "Submitted",
          value: 10,
          color: "text-green-500",
          background: "bg-green-500/10",
        },
        {
          title: "Pending",
          value: 8,
          color: "text-orange-500",
          background: "bg-orange-500/10",
        },
      ],
    },
  ];
  return (
    <div className="flex items-center gap-4 w-full overflow-x-scroll">
      {tasksApiData?.map((item, index) => (
        <KpiCard data={item} index={index} />
      ))}
    </div>
  );
};

export default TasksKpis;
