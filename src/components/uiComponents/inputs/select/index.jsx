import { ChevronDown } from "lucide-react";
import CustomButton from "../../button";
import Iconwrapper from "../../icon";
import CommonTypography from "../../typography";

const CustomSelect = ({ leftIcon, label, className }) => {
  return (
    <div
      className={`flex items-center bg-secondary h-8 w-50 rounded-lg pl-2 ${className}`}
    >
      {leftIcon && <Iconwrapper>{leftIcon}</Iconwrapper>}
      <CustomButton
        justify="between"
        variant="ghost"
        rightIcon={<ChevronDown />}
        className="w-full"
      >
        <CommonTypography size="sm" weight="normal">
          {label}
        </CommonTypography>
      </CustomButton>
    </div>
  );
};

export default CustomSelect;
