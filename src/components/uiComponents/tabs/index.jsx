const TabButton = ({ tab, index, isActive, onClick, variant, size }) => {
  // Base tab button styles
  const baseStyles = `
    relative flex items-center justify-center gap-2 px-4 py-2 font-medium
    transition-all duration-200 cursor-pointer border-b-2 whitespace-nowrap
   
  `;

  // Size-specific styles
  const sizeStyles = {
    small: "px-3 py-1.5 text-xs gap-1.5",
    medium: "px-4 py-2 text-sm gap-2",
    large: "px-6 py-3 text-base gap-2",
  };

  // Variant-specific styles
  const getVariantStyles = () => {
    switch (variant) {
      case "pills":
        return isActive
          ? "bg-white text-green-600 border-none rounded-md shadow-sm"
          : "bg-transparent text-gray-600 border-none rounded-md hover:bg-white hover:text-gray-900";

      case "cards":
        return isActive
          ? "bg-white text-green-600 border-2 border-green-600 border-b-white rounded-t-lg -mb-0.5"
          : "bg-gray-50 text-gray-600 border-2 border-transparent rounded-t-lg hover:bg-gray-100 hover:text-gray-900";

      default:
        return isActive
          ? "text-green-600 border-green-600"
          : "text-gray-600 border-transparent hover:text-gray-900 hover:border-gray-300";
    }
  };

  // Combine all styles
  const buttonClasses = [baseStyles, sizeStyles[size], getVariantStyles()]
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      role="tab"
      aria-selected={isActive}
      aria-controls={`tabpanel-${index}`}
      id={`tab-${index}`}
    >
      {tab.icon && <span className="flex-shrink-0">{tab.icon}</span>}

      <span className="text-sm">{tab.label}</span>

      {tab.count !== undefined && (
        <span
          className={`
          inline-flex items-center justify-center min-w-[1.25rem] h-5 px-0.5 text-xs
          font-medium rounded-full
          ${
            isActive
              ? "bg-green-100 text-green-700 "
              : "bg-gray-100 text-gray-600"
          }
        `}
        >
          {tab.count}
        </span>
      )}

      {tab.badge && (
        <span
          className={`
          inline-flex items-center px-1 py-0.5 text-xs font-medium rounded-full
          ${
            tab.badge.variant === "success"
              ? "bg-green-100 text-green-800"
              : tab.badge.variant === "warning"
              ? "bg-yellow-100 text-yellow-800"
              : tab.badge.variant === "error"
              ? "bg-red-100 text-red-800"
              : "bg-gray-100 text-gray-800"
          }
        `}
        >
          {tab.badge.text}
        </span>
      )}
    </button>
  );
};

export default TabButton;
