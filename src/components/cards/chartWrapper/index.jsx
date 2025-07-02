import { Ellipsis, ExternalLink } from "lucide-react";
import CardLayout from "../../layouts/card";
import CustomButton from "../../uiComponents/button";
import CommonTypography from "../../uiComponents/typography";
import TabButton from "../../uiComponents/tabs";
import { useState } from "react";
import CustomSelect from "../../uiComponents/inputs/select";

const ChartWrapper = ({
  label,
  children,
  tabs,
  childrenHeight,
  selectLabel,
  customSelectRequired = false,
  linkRequired = true,
}) => {
  const [selectedTab, setSelectedTab] = useState(tabs?.[0]?.value || "");

  return (
    <CardLayout className="flex flex-col w-full h-auto !p-0" delay={300}>
      <div className="w-full border-b border-border h-auto p-4">
        <div className="flex items-center justify-between">
          <CommonTypography weight="semibold">{label}</CommonTypography>
          <div className="flex">
            {customSelectRequired && (
              <CustomSelect label={selectLabel} className="mr-4" />
            )}
            {linkRequired && (
              <CustomButton leftIcon={<ExternalLink />} variant="ghost" />
            )}
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
        className={`${
          childrenHeight ? "overflow-y-scroll" : "overflow-hidden"
        }`}
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
