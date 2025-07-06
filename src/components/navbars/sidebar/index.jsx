import {
  Calendar,
  CalendarDays,
  ChartSpline,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Dock,
  FileStack,
  Home,
  InfoIcon,
  LayoutTemplate,
  LogOut,
  MessageCircle,
  MessageCircleMore,
  PanelsLeftBottom,
  User,
  Users,
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
      icon: <CalendarDays />,
      roue: "/calendar",
    },
    {
      title: "Browse Templates",
      value: "borwse-templates",
      icon: <Dock />,
      roue: "/browse-templates",
    },
    {
      title: "Template Library",
      value: "template-library",
      icon: <PanelsLeftBottom />,
      roue: "/template-library",
    },
    {
      title: "User Management",
      value: "user-management",
      icon: <Users />,
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
      className={`${
        sideNavOpen ? "w-[250px]" : "w-[60px]"
      } relative h-full pt-5 flex flex-col items-start justify-between gap-2 p-2 border-r border-border transition-all duration-300 ease-in-out bg-surface z-100`}
      ref={sidebarRef}
    >
      <div
        onClick={() => setSideNavOpen(!sideNavOpen)}
        className={`h-6 w-6 absolute top-7 z-100 cursor-pointer rounded-full border border-border flex items-center justify-center bg-surface hover:bg-primary hover:text-surface transition-all duration-300 ease-in-out ${
          isHovered
            ? sideNavOpen
              ? "-right-3 opacity-100"
              : "-right-3 opacity-100"
            : sideNavOpen
            ? "-right-3 opacity-0"
            : "-right-3 opacity-0"
        }`}
      >
        <Iconwrapper>
          <div className="transition-transform duration-300 ease-in-out">
            {sideNavOpen ? (
              <ChevronLeft size={12} />
            ) : (
              <ChevronRight size={12} />
            )}
          </div>
        </Iconwrapper>
      </div>

      <div className="w-full h-full flex flex-col items-start justify-start gap-2">
        {sidebarButtons.map((button, index) => (
          <div key={button.value} className="w-full">
            <CustomButton
              size="large"
              leftIcon={button?.icon}
              variant={`${
                selectedTab === button?.value ? "greenSecondary" : "ghost"
              }`}
              className="w-full start transition-all duration-200 ease-in-out"
              justify="start"
            >
              <span
                className={`transition-all duration-300 ease-in-out whitespace-nowrap ${
                  sideNavOpen
                    ? "opacity-100 translate-x-0 max-w-full"
                    : "opacity-0 -translate-x-2 max-w-0 overflow-hidden"
                }`}
              >
                {button?.title}
              </span>
            </CustomButton>
          </div>
        ))}
      </div>

      <CustomButton
        leftIcon={<MessageCircleMore />}
        variant="ghost"
        className="w-full mb-2 shadow-sm h-10"
        justify="start"
      >
        {sideNavOpen ? "Chat" : null}
      </CustomButton>

      <div
        className={`flex items-center rounded-lg w-full cursor-pointer transition-all duration-300 ease-in-out ${
          sideNavOpen ? "bg-secondary-2 p-2 gap-2" : "pb-2 justify-center gap-0"
        }`}
      >
        <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-primary text-surface transition-all duration-300">
          A
        </div>
        <div
          className={`flex flex-col items-start gap-1 transition-all duration-300 ease-in-out whitespace-nowrap ${
            sideNavOpen
              ? "opacity-100 translate-x-0 max-w-full"
              : "opacity-0 -translate-x-2 max-w-0 overflow-hidden"
          }`}
        >
          <span className="text-sm font-bold">Ajay</span>
          <span className="text-xs text-secondary-light-2">Manager</span>
        </div>
      </div>
    </div>
  );
};

export default SideNavbar;
