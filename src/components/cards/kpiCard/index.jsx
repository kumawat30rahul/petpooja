import React from "react";
import Iconwrapper from "../../uiComponents/icon";
import CardLayout from "../../layouts/card";
import CommonTypography from "../../uiComponents/typography";

const KpiCard = ({ data, index }) => {
  const iconVariants = {
    default: `bg-primary text-white rounded-lg p-1 h-9 w-9`,
    blue: `bg-blue-400/20 text-blue-500 rounded-lg p-1 h-9 w-9`,
    red: `bg-light-red text-red-500 rounded-lg p-1 h-9 w-9`,
  };

  return (
    <CardLayout
      key={`${data?.title}-${index}`}
      className={`flex flex-col gap-2`}
      delay={index * 100}
    >
      <div className="flex items-center gap-4">
        <Iconwrapper className={`${iconVariants?.[data?.iconVariant]}`}>
          {data?.icon}
        </Iconwrapper>
        <CommonTypography weight="semibold">{data?.title}</CommonTypography>
      </div>
      <div className="flex gap-2 items-center">
        {data?.data?.map((item, idx) => (
          <div
            key={`${item?.title}-${idx}`}
            className={`text-xs min-w-max flex items-center gap-2`}
          >
            <span className="text-secondary-light-2 font-normal leading-[1em]">
              {item?.title}
            </span>
            <span
              className={`${item?.color} ${item?.background} rounded-full h-5 w-5 p-2 flex items-center justify-center font-semibold leading-[1em]`}
            >
              {item?.value}
            </span>
          </div>
        ))}
      </div>
    </CardLayout>
  );
};

export default KpiCard;
