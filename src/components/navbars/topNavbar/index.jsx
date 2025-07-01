import { Menu, Plus } from "lucide-react";
import PET_POOJA_LOGO from "../../../assets/petPoojaLogo.png";
import { useMediaQuery } from "../../../hooks/useMediaQueryHook";
import CustomButton from "../../uiComponents/button";
import CustomDivider from "../../uiComponents/divider";
import NavbarTools from "../components/tools";

const TopNavbar = () => {
  const isMdUp = useMediaQuery("md");
  return (
    <div className="w-full h-15 border border-border flex items-center justify-between p-3">
      {!isMdUp && <CustomButton leftIcon={<Menu />} variant="ghost" />}
      <div className="h-8 w-auto md:w-50">
        <img
          src={PET_POOJA_LOGO}
          alt="petPoojaLogo"
          className="h-full w-auto"
        />
      </div>
      <div className="w-full hidden md:block">
        <NavbarTools />
      </div>
      <div className="flex item-center justify-end gap-4 h-full">
        {isMdUp && <CustomDivider orientation="vertical" />}
        <CustomButton leftIcon={<Plus className="text-white" />}>
          {isMdUp ? "Create" : null}
        </CustomButton>
      </div>
    </div>
  );
};

export default TopNavbar;
