import React from "react";
import CustomButton from "../../button";
import { ArrowDown, Building2, ChevronDown } from "lucide-react";

const CustomSelect = () => {
  return (
    <div className="flex items-center bg-secondary-2 w-40 rounded-lg border border-secondary-light">
      <CustomButton leftIcon={<Building2 />} variant="ghost" />
      <CustomButton justify="start" variant="ghost" rightIcon={<ChevronDown />} className="flex-1">
        Outlet Name
      </CustomButton>
    </div>
  );
};

export default CustomSelect;
