import React from "react";

const DynamicDataTable = ({ columns = [], rows = [], className = "" }) => {
  // Default data if no props provided

  return (
    <div className={`w-full h-full ${className}`}>
      <div className="bg-white overflow-y-auto  rounded-lg overflow-hidden h-full">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200 sticky top-0">
            <tr className="sticky top-0">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className={`px-6 py-4 text-sm font-medium text-gray-900 sticky top-0 ${
                    column.align === "center"
                      ? "text-center"
                      : column.align === "right"
                      ? "text-right"
                      : "text-left"
                  }`}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50 transition-colors">
                {columns.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className={`px-6 py-4 text-sm text-gray-900 ${
                      column.align === "center"
                        ? "text-center"
                        : column.align === "right"
                        ? "text-right"
                        : "text-left"
                    } ${colIndex === 0 ? "font-medium" : ""}`}
                  >
                    {row[column.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DynamicDataTable;
