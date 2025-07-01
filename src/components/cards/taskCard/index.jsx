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
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Iconwrapper className={`h-3 w-3`}>
            <ChevronUp />
          </Iconwrapper>
          <CommonTypography size="xs" color="secondary">
            ID #{data?.id}
          </CommonTypography>
        </div>

        <div className="flex items-center gap-1 text-gray-400">
          <Iconwrapper>
            <MessageCircle />
          </Iconwrapper>
          <span className="text-sm font-medium">14</span>
        </div>
      </div>

      {/* Title */}
      <CommonTypography size="sm" weight="semibold">
        {data?.title}
      </CommonTypography>

      {/* Date and Time */}
      <div className="flex  items-center justify-between gap-4 text-sm text-gray-600">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Iconwrapper>
              <Calendar />
            </Iconwrapper>
            <span>22 June, 2024</span>
          </div>

          <div className="flex items-center gap-2">
            <Iconwrapper>
              <Clock />
            </Iconwrapper>
            <span>11:00 am</span>
          </div>
        </div>
        <div className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold bg-green-500 text-white">
          A
        </div>
      </div>

      {/* Status and Category Row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Iconwrapper>
            <Notebook />
          </Iconwrapper>
          <span className="px-2 py-1 rounded-md text-xs font-medium bg-orange-100 text-orange-700">
            Ongoing
          </span>
        </div>

        <div className="flex items-center gap-3 bg-secondary-light rounded-full px-2 py-1">
          <div className="flex items-center gap-2">
            <Iconwrapper>
              <BriefcaseBusiness />
            </Iconwrapper>
            <CommonTypography size="xs" color="secondary">
              Inventory
            </CommonTypography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
