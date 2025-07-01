import { Calendar } from "lucide-react";
import Iconwrapper from "../../icon";

const CustomDateInput = () => {
  return (
    <div className="flex items-center justify-between w-40 bg-secondary-2 border border-secondary-light py-1 px-3 rounded-lg">
      <span>2024-05-12</span>
      <Iconwrapper>
        <Calendar />
      </Iconwrapper>
    </div>
  );
};

export default CustomDateInput;
