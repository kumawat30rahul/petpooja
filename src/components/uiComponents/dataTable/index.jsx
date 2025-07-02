const DynamicDataTable = ({ columns = [], rows = [], className = "" }) => {
  return (
    <div className={`w-full h-full flex flex-col ${className}`}>
      <div className="bg-white rounded-lg overflow-hidden flex-1 min-h-0 flex flex-col">
        <div className="overflow-y-auto overflow-x-auto flex-1">
          <table className="w-full min-w-max">
            <thead className="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
              <tr>
                {columns.map((column, index) => (
                  <th
                    key={index}
                    className={`px-5 py-3 text-sm font-medium text-gray-900 bg-gray-50 min-w-32 ${
                      column.align === "center"
                        ? "text-center"
                        : column.align === "right"
                        ? "text-right"
                        : "text-left"
                    }`}
                    style={{ minWidth: column.minWidth || "128px" }}
                  >
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {rows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="hover:bg-gray-50 transition-colors"
                >
                  {columns.map((column, colIndex) => (
                    <td
                      key={colIndex}
                      className={`px-5 py-3 text-sm text-gray-900 min-w-32 ${
                        column.align === "center"
                          ? "text-center"
                          : column.align === "right"
                          ? "text-right"
                          : "text-left"
                      } ${column.ellipsis ? "truncate" : ""}`}
                      style={{
                        minWidth: column.minWidth || "128px",
                        maxWidth: column.maxWidth || "200px",
                      }}
                    >
                      {column.renderCell
                        ? column.renderCell(row, rowIndex, column)
                        : row[column.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DynamicDataTable;
