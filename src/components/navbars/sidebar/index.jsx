import {
  Calendar,
  ChartSpline,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  FileStack,
  Home,
  InfoIcon,
  LayoutTemplate,
  LogOut,
  User,
} from "lucide-react";
import CustomButton from "../../uiComponents/button";
import { useState } from "react";
import Iconwrapper from "../../uiComponents/icon";
import { useHover } from "../../../hooks/useHoverHook";

const SideNavbar = ({ sideNavOpen, setSideNavOpen }) => {
  const [selectedTab, setSelectedTab] = useState("home");
  const [sidebarRef, isHovered] = useHover();

  const sidebarButtons = [
    {
      title: "Home",
      value: "home",
      icon: <Home />,
      roue: "/",
    },
    {
      title: "Tasks",
      value: "tasks",
      icon: <ClipboardList />,
      roue: "/tasks",
    },
    {
      title: "Issues",
      value: "issues",
      icon: <InfoIcon />,
      roue: "/issues",
    },
    {
      title: "Calendar",
      value: "calendar",
      icon: <Calendar />,
      roue: "/calendar",
    },
    {
      title: "Browse Templates",
      value: "borwse-templates",
      icon: <FileStack />,
      roue: "/browse-templates",
    },
    {
      title: "Template Library",
      value: "template-library",
      icon: <LayoutTemplate />,
      roue: "/template-library",
    },
    {
      title: "User Management",
      value: "user-management",
      icon: <User />,
      roue: "/",
    },
    {
      title: "Reports",
      value: "reports",
      icon: <ChartSpline />,
      roue: "/",
    },
    {
      title: "Logout",
      value: "logout",
      icon: <LogOut />,
      roue: null,
    },
  ];

  return (
    <div
      className={` ${
        sideNavOpen ? "w-[250px]" : "w-auto"
      } relative h-full pt-5 flex flex-col items-start justify-between gap-2 p-2 border-r border-border`}
      ref={sidebarRef}
    >
      {isHovered && (
        <div
          onClick={() => setSideNavOpen(!sideNavOpen)}
          className="h-5 w-5 absolute top-6.5 -right-3 cursor-pointer rounded-full border border-border flex items-center justify-center bg-surface hover:bg-primary hover:text-surface transition-all duration-150"
        >
          <Iconwrapper>
            {sideNavOpen ? <ChevronLeft /> : <ChevronRight />}
          </Iconwrapper>
        </div>
      )}
      <div className="w-full h-full flex flex-col items-start justify-start gap-2">
        {sidebarButtons.map((button) => (
          <div className="w-full">
            <CustomButton
              leftIcon={button?.icon}
              variant={`${
                selectedTab === button?.value ? "greenSecondary" : "ghost"
              }`}
              className="w-full start"
              justify="start"
            >
              {sideNavOpen ? button?.title : null}
            </CustomButton>
          </div>
        ))}
      </div>
      <div className="flex gap-2 p-2 bg-secondary-light rounded-lg w-full">
        <div className="h-10 w-10 rounded-full bg-primary text-surface flex items-center justify-center">
          A
        </div>
        {sideNavOpen && (
          <div className="flex flex-col items-start gap-1">
            <span className="text-sm font-bold">Ajay</span>
            <span className="text-xs">Manager</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideNavbar;
