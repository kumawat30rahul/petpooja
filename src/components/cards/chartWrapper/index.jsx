import { Ellipsis, ExternalLink } from "lucide-react";
import CardLayout from "../../layouts/card";
import CustomButton from "../../uiComponents/button";
import CommonTypography from "../../uiComponents/typography";
import TabButton from "../../uiComponents/tabs";
import { useState } from "react";

const ChartWrapper = ({ label, children, tabs, childrenHeight }) => {
  const [selectedTab, setSelectedTab] = useState(tabs?.[0]?.value || "");

  return (
    <CardLayout className="flex flex-col w-full h-auto !p-0">
      <div className="w-full border-b border-border h-auto p-4">
        <div className="flex items-center justify-between">
          <CommonTypography weight="bold">{label}</CommonTypography>
          <div className="flex">
            <CustomButton leftIcon={<ExternalLink />} variant="ghost" />
            <CustomButton leftIcon={<Ellipsis />} variant="ghost" />
          </div>
        </div>
        <div className="-mb-4 flex items-center gap-0" hidden={!tabs}>
          {tabs?.map((item) => (
            <TabButton isActive={item.value === selectedTab} tab={item} />
          ))}
        </div>
      </div>
      <div
        hidden={!children}
        className={`p-4 ${childrenHeight ? "overflow-y-scroll" : ""}`}
        style={{
          height: childrenHeight,
        }}
      >
        {children}
      </div>
    </CardLayout>
  );
};

export default ChartWrapper;
