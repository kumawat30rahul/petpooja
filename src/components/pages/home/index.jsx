import { LayoutTemplate } from "lucide-react";
import CustomButton from "../../uiComponents/button";
import TasksKpis from "./components/taskKpis";
import EmployeeData from "./components/employeeData";

const HomePage = () => {
  return (
    <div className="w-full h-auto flex flex-col gap-4 p-2">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 ">
          Good Evening! Ajay.
        </h1>
        <CustomButton leftIcon={<LayoutTemplate />} variant="outline">
          Add Widget
        </CustomButton>
      </div>
      <TasksKpis />
      <EmployeeData />
    </div>
  );
};

export default HomePage;
