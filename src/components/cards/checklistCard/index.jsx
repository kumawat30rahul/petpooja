import { useState } from "react";
import CommonTypography from "../../uiComponents/typography";

const ChecklistCard = ({ data }) => {
  const [isEditing, setIsEditing] = useState(false);
  return (
    <div
      key={`${data?.title}-${data?.id}`}
      className={`flex items-start gap-4 p-4 hover:bg-secondary-2 cursor-pointer rounded-lg ${
        isEditing ? "bg-secondary-2" : ""
      }`}
      onClick={() => setIsEditing(true)}
    >
      <div className="h-6 w-6 min-w-6 border border-black rounded-full" />
      {!isEditing ? (
        <div className="flex flex-col gap-2">
          <CommonTypography size="xs" weight="semibold">
            {data?.title}
          </CommonTypography>
          <CommonTypography size="xs">
            {data?.description || "NA"}
          </CommonTypography>
        </div>
      ) : (
        <div className="flex flex-col gap-2 w-full">
          <input
            value={data?.title}
            className="bg-white outline-none rounded-lg w-full px-2 py-0.5 text-sm"
          />
          <textarea
            multiline
            rows={2}
            type="text"
            className="bg-white outline-none rounded-lg w-full px-2 py-0.5 h-15 flex items-start break-words text-sm"
            value={data?.description}
          />
        </div>
      )}
    </div>
  );
};

export default ChecklistCard;
