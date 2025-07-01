import { LayoutTemplate } from "lucide-react";
import CustomButton from "../../uiComponents/button";
import TasksKpis from "./components/taskKpis";

const HomePage = () => {
  return (
    <div className="w-full h-auto flex flex-col p-2">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Good Evening! Ajay.
        </h1>
        <CustomButton leftIcon={<LayoutTemplate />} variant="outline">
          Add Widget
        </CustomButton>
      </div>
      <TasksKpis />
    </div>
  );
};

export default HomePage;
