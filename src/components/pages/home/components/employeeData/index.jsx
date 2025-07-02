import { Eye, UserPlus } from "lucide-react";
import ChartWrapper from "../../../../cards/chartWrapper";
import ChecklistCard from "../../../../cards/checklistCard";
import TaskCard from "../../../../cards/taskCard";
import WorkFlowCard from "../../../../cards/workflowCard";
import BarChart from "../../../../charts/barChart";
import DynamicDataTable from "../../../../uiComponents/dataTable";
import Iconwrapper from "../../../../uiComponents/icon";

const EmployeeData = () => {
  const workAllocatedTabs = [
    {
      label: "Tasks",
      value: "tasks",
      count: 10,
    },
    {
      label: "Issues",
      value: "issues",
      count: 10,
    },
    {
      label: "Forms",
      value: "forms",
      count: 10,
    },
  ];

  const barChartTabs = [
    {
      label: "Tasks",
      value: "tasks",
    },
    {
      label: "Issues",
      value: "issues",
    },
    {
      label: "Forms",
      value: "forms",
    },
  ];

  const employeeProgressTabs = [
    {
      label: "Tasks",
      value: "tasks",
      count: 10,
    },
    {
      label: "Issues",
      value: "issues",
      count: 10,
    },
    {
      label: "Workflows",
      value: "workflows",
      count: 10,
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

  const employeeWorkProgressColumns = [
    { key: "name", label: "Name", align: "left" },
    { key: "department", label: "Department", align: "left" },
    { key: "assigned", label: "Assigned", align: "center" },
    { key: "ongoing", label: "Ongoing", align: "center" },
    { key: "overdue", label: "Overdue", align: "center" },
    { key: "completed", label: "Completed", align: "center" },
  ];

  const employeeWorkProgressData = [
    {
      name: "Anita",
      department: "IT Services",
      assigned: 90,
      ongoing: 90,
      overdue: 90,
      completed: "90%",
    },
    {
      name: "Rahul",
      department: "Human Resources",
      assigned: 31,
      ongoing: 31,
      overdue: 31,
      completed: "31%",
    },
    {
      name: "Priya",
      department: "Sales Division",
      assigned: 45,
      ongoing: 45,
      overdue: 45,
      completed: "45%",
    },
    {
      name: "Vikram",
      department: "Research and Development",
      assigned: 79,
      ongoing: 79,
      overdue: 79,
      completed: "79%",
    },
    {
      name: "Sita",
      department: "Marketing Team",
      assigned: 52,
      ongoing: 52,
      overdue: 52,
      completed: "52%",
    },
    {
      name: "Ravi",
      department: "Finance Department",
      assigned: 64,
      ongoing: 64,
      overdue: 64,
      completed: "64%",
    },
    {
      name: "Kiran",
      department: "Customer Support",
      assigned: 87,
      ongoing: 87,
      overdue: 87,
      completed: "87%",
    },
  ];

  const workflowsData = [
    {
      title: "Stock Control Strategies",
      icon: <Eye />,
      data: [
        { title: "Responses", value: 47 },
        { title: "Tasks", value: 22 },
      ],
    },
    {
      title: "How to Handle Inventory",
      icon: <Eye />,
      data: [
        { title: "Responses", value: 23 },
        { title: "Tasks", value: 15 },
      ],
    },
    {
      title: "Inventory Management Tips",
      icon: <Eye />,
      data: [
        { title: "Responses", value: 56 },
        { title: "Tasks", value: 30 },
      ],
    },
    {
      title: "Managing Your Stock Effectively",
      icon: <Eye />,
      data: [
        { title: "Responses", value: 89 },
        { title: "Tasks", value: 5 },
      ],
    },
    {
      title: "Optimizing Your Inventory",
      icon: <Eye />,
      data: [
        { title: "Responses", value: 78 },
        { title: "Tasks", value: 12 },
      ],
    },
    {
      title: "Stock Management Techniques",
      icon: <Eye />,
      data: [
        { title: "Responses", value: 34 },
        { title: "Tasks", value: 8 },
      ],
    },
  ];

  const checklistCardData = [
    {
      title: "Make Shift and Assign",
      description:
        "Assign Individuals to specific shifts based on availability and role requirements",
    },
    {
      title: "Menu Creation",
      description:
        "Update the menu to show the dishes and their ingredients clearly. Point out any new cooking methods or dietary options.",
    },
  ];

  const overdueTasksColumns = [
    {
      key: "name",
      label: "Task Name",
      align: "left",
      ellipsis: true,
      minWidth: "100px", // Task names need more space
      maxWidth: "150px", // But limit to prevent too wide
    },
    {
      key: "assigned",
      label: "Assigned To",
      align: "left",
      minWidth: "80px",
      maxWidth: "100px",
    },
    {
      key: "status",
      label: "Status",
      align: "center",
      minWidth: "100px",
      renderCell: (row) => {
        return (
          <span className="leading-[1em] text-xs bg-red-600/8 px-1 py-0.5 rounded-lg border border-red-600 text-red-600">
            {row?.status}
          </span>
        );
      },
    },
    {
      key: "dueDate",
      label: "Due Date",
      align: "center",
      minWidth: "120px",
    },
    {
      key: "reassign",
      label: "Reassign",
      align: "center",
      minWidth: "80px", // Icon column can be smaller
      width: "80px", // Fixed width for icon column
      renderCell: () => {
        return (
          <div className="flex items-center justify-center">
            <Iconwrapper>
              <UserPlus />
            </Iconwrapper>
          </div>
        );
      },
    },
  ];

  const overdueTasksData = [
    {
      name: "Menu Plannig",
      assigned: "Ajay",
      status: "Ongoing",
      dueDate: "12-07-2024",
      reassign: "Jhon",
    },
    {
      name: "Staff Scheduling",
      assigned: "Niraj",
      status: "Ongoing",
      dueDate: "13-06-2024",
      reassign: "Jhon",
    },
    {
      name: "Inventory Management",
      assigned: "Vijay",
      status: "Ongoing",
      dueDate: "01-02-2023",
      reassign: "Jhon",
    },
    {
      name: "Customer Feedback Analysis",
      assigned: "Arvind",
      status: "Ongoing",
      dueDate: "12-02-2023",
      reassign: "Jhon",
    },
    {
      name: "Budget Forecasting",
      assigned: "Priya",
      status: "Overdue",
      dueDate: "04-11-2020",
      reassign: "Jhon",
    },
    {
      name: "Marketing Strategy Development",
      assigned: "Suresh",
      status: "Overdue",
      dueDate: "10-05-2026",
      reassign: "Jhon",
    },
    {
      name: "Quality Assurance Testing",
      assigned: "Fatima",
      status: "Overdue",
      dueDate: "03-10-2021",
      reassign: "Jhon",
    },
  ];

  return (
    <>
      <ChartWrapper
        label={"Work Allocated"}
        tabs={workAllocatedTabs}
        childrenHeight="250px"
        selectLabel={"Select Employee"}
        customSelectRequired={true}
        linkRequired={false}
        selectPlaceholder={"Select Employee"}
        selectOption={[
          { label: "Jhon Doe", value: "jhonDoe" },
          { label: "Jane Alex", value: "janeAlex" },
        ]}
      >
        <div className="grid grid-cols-6 gap-4 p-4">
          {workAllocatedData.map((item, index) => (
            <div
              className={`col-span-6 sm:col-span-3 ${
                index >= workAllocatedData.length - 2
                  ? "xl:col-span-3"
                  : "xl:col-span-2"
              }`}
              key={item.value}
            >
              <TaskCard data={item} />
            </div>
          ))}
        </div>
      </ChartWrapper>
      <ChartWrapper
        label={"Employee Wise Progress"}
        tabs={employeeProgressTabs}
        childrenHeight="250px"
        selectLabel={"Select Employee"}
        customSelectRequired={true}
        selectPlaceholder={"Select Employee"}
        selectOption={[
          { label: "Jhon Doe", value: "jhonDoe" },
          { label: "Jane Alex", value: "janeAlex" },
        ]}
      >
        <DynamicDataTable
          columns={employeeWorkProgressColumns}
          rows={employeeWorkProgressData}
        />
      </ChartWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ChartWrapper label={"Personal Notepad"} childrenHeight="300px">
          <div className="flex flex-col gap-4 p-4">
            {checklistCardData.map((item, index) => (
              <ChecklistCard data={item} />
            ))}
          </div>
        </ChartWrapper>
        <ChartWrapper
          label={"Department wise allocation"}
          childrenHeight="300px"
          tabs={barChartTabs}
        >
          <div className="p-4 h-full w-full">
            <BarChart />
          </div>
        </ChartWrapper>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <ChartWrapper label={"Overdue Tasks"} childrenHeight="250px">
          <DynamicDataTable
            columns={overdueTasksColumns}
            rows={overdueTasksData}
          />
        </ChartWrapper>
        <ChartWrapper label={"Workflows"} childrenHeight="250px">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 p-4">
            {workflowsData.map((item, index) => (
              <div key={item.value}>
                <WorkFlowCard data={item} />
              </div>
            ))}
          </div>
        </ChartWrapper>
      </div>
    </>
  );
};

export default EmployeeData;
