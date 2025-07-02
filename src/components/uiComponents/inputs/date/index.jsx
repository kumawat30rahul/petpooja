import { useRef, useState } from "react";
import { Calendar } from "lucide-react";
import Iconwrapper from "../../icon";
import CommonTypography from "../../typography";
// import { format } from "date-fns"; // Optional: for formatting

const CustomDateInput = () => {
  const inputRef = useRef(null);
  const [selectedDate, setSelectedDate] = useState("");

  const handleContainerClick = () => {
    inputRef.current?.showPicker(); // ✅ Opens native date picker
  };

  const handleChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return "";
    const [year, month, day] = dateStr.split("-");
    return `${day}-${month}-${year}`;
  };

  return (
    <div
      className="relative flex items-center justify-between w-40 h-8 py-1 px-3 gap-1 rounded-lg bg-secondary cursor-pointer"
      onClick={handleContainerClick}
    >
      <span className="text-xs text-foreground truncate">
        {selectedDate
          ? formatDate(selectedDate) // Optional formatting
          : "08-09-2024"}
      </span>
      <input
        ref={inputRef}
        type="date"
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        onChange={handleChange}
        value={selectedDate}
      />
      <Iconwrapper>
        <Calendar />
      </Iconwrapper>
    </div>
  );
};

export default CustomDateInput;
