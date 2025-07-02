import { Apple, BellIcon, Building2, Home, Sparkles } from "lucide-react";
import CustomButton from "../../../uiComponents/button";
import CustomDateInput from "../../../uiComponents/inputs/date";
import CustomSelect from "../../../uiComponents/inputs/select";

const NavbarTools = () => {
  return (
    <div className="flex items-center gap-4 md:justify-between overflow-x-auto md:overflow-hidden border-b border-border md:border-none py-2 px-4 md:py-0">
      <CustomButton variant="ghost" leftIcon={<Home />}>
        Home
      </CustomButton>
      <div className="flex items-center justify-end">
        <div className="mr-4 hidden md:flex  items-center justify-end">
          <CustomButton variant="ghost" leftIcon={<Sparkles />} />
          <CustomButton variant="ghost" leftIcon={<BellIcon />} />
        </div>
        <div className="flex items-center gap-4">
          <CustomDateInput />
          <CustomSelect leftIcon={<Building2 />} label={"Outlet Name"} />
        </div>
        <div className="ml-4 flex items-center justify-end md:hidden">
          <CustomButton variant="ghost" leftIcon={<Apple />} />
          <CustomButton variant="ghost" leftIcon={<BellIcon />} />
        </div>
      </div>
    </div>
  );
};

export default NavbarTools;
