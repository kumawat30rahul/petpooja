import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import TopNavbar from "../../navbars/topNavbar";
import NavbarTools from "../../navbars/components/tools";
import SideNavbar from "../../navbars/sidebar";
import { useMediaQuery } from "../../../hooks/useMediaQueryHook";

const DashboardLayout = () => {
  const isLgUp = useMediaQuery("lg");
  const [sideNavOpen, setSideNavOpen] = useState(isLgUp ? true : false);

  return (
    <div className="h-screen w-full flex flex-col">
      <div className="h-15 w-full flex-shrink-0">
        <TopNavbar sideNavOpen={sideNavOpen} setSideNavOpen={setSideNavOpen} />
      </div>
      <div className="block lg:hidden w-full flex-shrink-0">
        <NavbarTools />
      </div>
      <div className="flex-1 flex overflow-hidden">
        {isLgUp ? (
          <SideNavbar
            sideNavOpen={sideNavOpen}
            setSideNavOpen={setSideNavOpen}
          />
        ) : (
          <div
            className={`transition-all absolute  z-50 bottom-0 top-15 ${
              !sideNavOpen
                ? "-translate-x-[250px] w-auto"
                : "translate-x-0 bg-black/20 w-full"
            } duration-300`}
          >
            <SideNavbar
              sideNavOpen={sideNavOpen}
              setSideNavOpen={setSideNavOpen}
            />
          </div>
        )}
        <main className="flex-1 overflow-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
