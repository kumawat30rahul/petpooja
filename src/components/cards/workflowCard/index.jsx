import CardLayout from "../../layouts/card";
import CustomDivider from "../../uiComponents/divider";
import Iconwrapper from "../../uiComponents/icon";
import CommonTypography from "../../uiComponents/typography";

const WorkFlowCard = ({ data }) => {
  return (
    <CardLayout
      className={`flex flex-col gap-4 justify-between h-full hover:shadow-sm transition-all duration-200 cursor-pointer`}
    >
      <div className="flex items-center justify-between ">
        <CommonTypography size="xs" weight="semibold">
          {data?.title}
        </CommonTypography>
        <Iconwrapper className={`bg-secondary-2 p-1 h-6 w-6 rounded-lg`}>
          {data?.icon}
        </Iconwrapper>
      </div>
      <div className="flex items-center justify-between h-full">
        <div className="flex items-center h-full">
          {data?.data?.map((item, index) => (
            <div
              className={`flex items-center gap-4  ${
                index < data?.data?.length - 1
                  ? "border-r border-gray-200 pr-2"
                  : "pl-2"
              }`}
              key={`${item?.title}-${index}`}
            >
              <div className="flex items-center gap-1">
                <CommonTypography size="xs" color="secondary">
                  {item?.title}
                </CommonTypography>
                <CommonTypography size="xs" weight="semibold">
                  {item?.value}
                </CommonTypography>
              </div>
            </div>
          ))}
        </div>
        <div className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold bg-green-500 text-white">
          A
        </div>
      </div>
    </CardLayout>
  );
};

export default WorkFlowCard;
