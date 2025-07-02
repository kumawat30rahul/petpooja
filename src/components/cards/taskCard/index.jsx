import {
  BriefcaseBusiness,
  Calendar,
  ChevronDown,
  ChevronUp,
  Clock,
  MessageCircle,
  Notebook,
} from "lucide-react";
import Iconwrapper from "../../uiComponents/icon";
import CommonTypography from "../../uiComponents/typography";

const TaskCard = ({ data }) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 hover:shadow-sm p-4 transition-all duration-200 flex flex-col gap-1.5">
      {/* Header Row */}
      <div className="flex items-center justify-between text-secondary-light-2">
        <div className="flex items-center gap-2">
          <Iconwrapper className={`h-3 w-3`}>
            <ChevronUp />
          </Iconwrapper>
          <CommonTypography size="xs" color="secondary">
            ID #{data?.id}
          </CommonTypography>
        </div>

        <div className="flex items-center gap-1 text-secondary-light-2">
          <Iconwrapper>
            <MessageCircle />
          </Iconwrapper>
          <span className="text-sm">14</span>
        </div>
      </div>

      {/* Title */}
      <CommonTypography size="sm" weight="semibold">
        {data?.title}
      </CommonTypography>

      {/* Date and Time */}
      <div className="flex  items-center justify-between gap-4 text-xs text-secondary-light-2">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Iconwrapper>
              <Calendar />
            </Iconwrapper>
            <span className="min-w-max">22 June, 2024</span>
          </div>

          <div className="flex items-center gap-2">
            <Iconwrapper>
              <Clock />
            </Iconwrapper>
            <span className="min-w-max">11:00 am</span>
          </div>
        </div>
        <div className="w-5 h-5 rounded-full flex items-center justify-center text-xs  bg-primary text-white">
          A
        </div>
      </div>

      {/* Status and Category Row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Iconwrapper className={`bg-secondary rounded-md p-1 h-6 w-6`}>
            <Notebook />
          </Iconwrapper>
          <span className="px-2 py-1 rounded-md text-xs bg-accent-orange/7 text-accent-orange/80 border border-accent-orange/30 leading-[1em]">
            Ongoing
          </span>
        </div>

        <div className="flex items-center gap-3 bg-secondary rounded-full px-2 py-1">
          <div className="flex items-center gap-2">
            <Iconwrapper className={`text-secondary-light-2`}>
              <BriefcaseBusiness />
            </Iconwrapper>
            <CommonTypography size="xs" color="default">
              Inventory
            </CommonTypography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
