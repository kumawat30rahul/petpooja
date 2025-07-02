import { Calendar } from "lucide-react";
import Iconwrapper from "../../icon";
import CommonTypography from "../../typography";

const CustomDateInput = () => {
  return (
    <div className="flex items-center justify-between w-40 h-8  py-1 px-3 rounded-lg bg-secondary">
      <CommonTypography size="sm">24-03-2021</CommonTypography>
      <Iconwrapper>
        <Calendar />
      </Iconwrapper>
    </div>
  );
};

export default CustomDateInput;
