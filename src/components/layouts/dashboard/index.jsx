import React, { useState } from "react";
import TopNavbar from "../../navbars/topNavbar";
import NavbarTools from "../../navbars/components/tools";
import SideNavbar from "../../navbars/sidebar";

const DashboardLayout = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  return (
    <div className="h-screen w-full flex flex-col">
      <div className="h-15 w-full flex-shrink-0">
        <TopNavbar />
      </div>
      <div className="block md:hidden w-full">
        <NavbarTools />
      </div>
      <div className="flex-1">
        <SideNavbar sideNavOpen={sideNavOpen} setSideNavOpen={setSideNavOpen} />
      </div>
    </div>
  );
};

export default DashboardLayout;
