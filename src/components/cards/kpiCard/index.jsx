import React from "react";
import Iconwrapper from "../../uiComponents/icon";
import CardLayout from "../../layouts/card";

const KpiCard = ({ data, index }) => {
  const iconVariants = {
    default: `bg-primary text-white rounded-lg p-1 h-10 w-10`,
    blue: `bg-blue-500/20 text-blue-500 rounded-lg p-1 h-10 w-10`,
    red: `bg-red-500/20 text-red-500 rounded-lg p-1 h-10 w-10`,
  };

  return (
    <CardLayout
      key={`${data?.title}-${index}`}
      className={`flex flex-col gap-2`}
    >
      <div className="flex items-center gap-4">
        <Iconwrapper className={iconVariants?.[data?.iconVariant]}>
          {data?.icon}
        </Iconwrapper>
        <span className="font-semibold">{data?.title}</span>
      </div>
      <div className="flex gap-2 items-center">
        {data?.data?.map((item, idx) => (
          <div
            key={`${item?.title}-${idx}`}
            className={`text-xs min-w-max flex items-center gap-2`}
          >
            <span className="text-secondary">{item?.title}</span>
            <span
              className={`${item?.color} ${item?.background} rounded-full h-5 w-5 p-3 flex items-center justify-center font-semibold`}
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
