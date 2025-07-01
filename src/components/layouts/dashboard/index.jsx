import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import TopNavbar from "../../navbars/topNavbar";
import NavbarTools from "../../navbars/components/tools";
import SideNavbar from "../../navbars/sidebar";

const DashboardLayout = () => {
  const [sideNavOpen, setSideNavOpen] = useState(true);

  return (
    <div className="h-screen w-full flex flex-col">
      <div className="h-15 w-full flex-shrink-0">
        <TopNavbar />
      </div>
      <div className="block md:hidden w-full flex-shrink-0">
        <NavbarTools />
      </div>
      <div className="flex-1 flex overflow-hidden">
        <SideNavbar sideNavOpen={sideNavOpen} setSideNavOpen={setSideNavOpen} />
        <main className="flex-1 overflow-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
