import { Menu, Plus } from "lucide-react";
import PET_POOJA_LOGO from "../../../assets/petPoojaLogo.png";
import { useMediaQuery } from "../../../hooks/useMediaQueryHook";
import CustomButton from "../../uiComponents/button";
import CustomDivider from "../../uiComponents/divider";
import NavbarTools from "../components/tools";

const TopNavbar = ({ sideNavOpen, setSideNavOpen }) => {
  const isLgUp = useMediaQuery("lg");
  return (
    <div className="w-full h-full border border-border flex items-center justify-between p-3">
      {!isLgUp && (
        <CustomButton
          leftIcon={<Menu />}
          variant="ghost"
          onClick={() => setSideNavOpen(!sideNavOpen)}
        />
      )}
      <div className="h-8 w-auto lg:w-50">
        <img
          src={PET_POOJA_LOGO}
          alt="petPoojaLogo"
          className="h-full w-auto"
        />
      </div>
      <div className="w-full hidden lg:block">
        <NavbarTools />
      </div>
      <div className="flex item-center justify-end gap-4 h-full">
        {isLgUp && <CustomDivider orientation="vertical" />}
        <CustomButton leftIcon={<Plus className="text-white" />}>
          {isLgUp ? "Create" : null}
        </CustomButton>
      </div>
    </div>
  );
};

export default TopNavbar;
