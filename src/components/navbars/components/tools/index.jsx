import { Apple, BellIcon, Building2, Home, Sparkles } from "lucide-react";
import CustomButton from "../../../uiComponents/button";
import CustomDateInput from "../../../uiComponents/inputs/date";
import CustomSelect from "../../../uiComponents/inputs/select";
import { useMediaQuery } from "../../../../hooks/useMediaQueryHook";

const NavbarTools = () => {
  const isLgUp = useMediaQuery("lg");
  return (
    <div className="flex items-center gap-4 lg:justify-between overflow-x-auto lg:overflow-hidden border-b border-border lg:border-none py-2 px-4 lg:py-0">
      <CustomButton variant="ghost" leftIcon={<Home />}>
        Home
      </CustomButton>
      <div className="flex items-center justify-end">
        <div className="mr-4 flex  items-center justify-start gap-4 lg:justify-end">
          <CustomButton variant="ghost" leftIcon={<Sparkles />}>
            {isLgUp ? null : "Ask Ai"}
          </CustomButton>
          <CustomButton variant="ghost" leftIcon={<BellIcon />}>
            {isLgUp ? null : "Notification"}
          </CustomButton>
        </div>
        <div className="flex items-center gap-4">
          <CustomDateInput />
          <CustomSelect leftIcon={<Building2 />} label={"Outlet Name"} />
        </div>
        {/* <div className="ml-4 flex items-center justify-end lg:hidden">
          <CustomButton variant="ghost" leftIcon={<Apple />} />
          <CustomButton variant="ghost" leftIcon={<BellIcon />} />
        </div> */}
      </div>
    </div>
  );
};

export default NavbarTools;
