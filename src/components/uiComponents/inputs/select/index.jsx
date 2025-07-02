import { ChevronDown, ChevronUp, Search, X } from "lucide-react";
import CustomButton from "../../button";
import Iconwrapper from "../../icon";
import CommonTypography from "../../typography";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

// Move DropdownContent outside the component to prevent remounting on every render
const DropdownContent = ({
  dropdownRef,
  dropdownPosition,
  searchable,
  searchInputRef,
  searchTerm,
  handleSearchChange,
  handleSearchKeyDown,
  handleSearchInputClick,
  clearSearch,
  filteredOptions,
  selectedValue,
  handleOptionSelect,
  searchPlaceholder,
}) => (
  <div
    ref={dropdownRef}
    className="bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-hidden z-[9999]"
    style={{
      position: "fixed",
      top: `${dropdownPosition.top}px`,
      left: `${dropdownPosition.left}px`,
      width: `${dropdownPosition.width}px`,
      minWidth: "200px",
    }}
  >
    {/* Search Bar */}
    {searchable && (
      <div className="p-2 border-b border-gray-100 bg-gray-50">
        <div className="relative">
          <Search
            size={16}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
          />
          <input
            ref={searchInputRef}
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleSearchKeyDown}
            onClick={handleSearchInputClick}
            placeholder={searchPlaceholder}
            className="w-full pl-9 pr-8 py-2 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
          />
          {searchTerm && (
            <button
              type="button"
              onClick={clearSearch}
              onMouseDown={(e) => e.preventDefault()} // Prevent focus loss
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <X size={16} />
            </button>
          )}
        </div>
      </div>
    )}

    {/* Options List */}
    <div className="max-h-48 overflow-y-auto">
      {filteredOptions.length === 0 ? (
        <div className="px-3 py-2 text-gray-500 text-sm">
          {searchTerm
            ? `No results for "${searchTerm}"`
            : "No options available"}
        </div>
      ) : (
        filteredOptions.map((option, index) => (
          <div
            key={option.value || index}
            className={`px-3 py-2 cursor-pointer transition-colors hover:bg-gray-50 flex items-center ${
              selectedValue === option.value
                ? "bg-blue-50 text-blue-700"
                : "text-gray-700"
            } ${
              index !== filteredOptions.length - 1
                ? "border-b border-gray-100"
                : ""
            }`}
            onClick={() => handleOptionSelect(option)}
            onMouseDown={(e) => e.preventDefault()} // Prevent focus loss from input
          >
            {option.icon && (
              <span className="mr-2 flex items-center">{option.icon}</span>
            )}
            <CommonTypography size="sm" weight="normal">
              {option.label}
            </CommonTypography>
            {selectedValue === option.value && (
              <span className="ml-auto text-blue-600">✓</span>
            )}
          </div>
        ))
      )}
    </div>
  </div>
);

const CustomSelect = ({
  leftIcon,
  label,
  className,
  options = [],
  value,
  onChange,
  placeholder = "Select an option...",
  searchable = true,
  searchPlaceholder = "Search options...",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || "");
  const [searchTerm, setSearchTerm] = useState("");
  const [dropdownPosition, setDropdownPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  });
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);
  const searchInputRef = useRef(null);

  // Calculate dropdown position
  const updateDropdownPosition = () => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + window.scrollY + 4,
        left: rect.left + window.scrollX,
        width: rect.width,
      });
    }
  };

  // Handle clicking outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
        setSearchTerm(""); // Clear search when closing
      }
    };

    const handleScroll = () => {
      if (isOpen) {
        updateDropdownPosition();
      }
    };

    const handleResize = () => {
      if (isOpen) {
        updateDropdownPosition();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside, true);
      document.addEventListener("touchstart", handleClickOutside, true);
      window.addEventListener("scroll", handleScroll, true);
      window.addEventListener("resize", handleResize);
      updateDropdownPosition();
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
      document.removeEventListener("touchstart", handleClickOutside, true);
      window.removeEventListener("scroll", handleScroll, true);
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);

  // Auto-focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && searchable && searchInputRef.current) {
      const timeoutId = setTimeout(() => {
        searchInputRef.current?.focus();
      }, 150);
      return () => clearTimeout(timeoutId);
    }
  }, [isOpen, searchable]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionSelect = (option) => {
    setSelectedValue(option.value);
    setIsOpen(false);
    setSearchTerm(""); // Clear search when selecting
    if (onChange) {
      onChange(option);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setTimeout(() => {
      searchInputRef.current?.focus();
    }, 10);
  };

  const handleSearchInputClick = (e) => {
    e.stopPropagation();
  };

  const handleSearchKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
    if (e.key === "Escape") {
      setIsOpen(false);
    }
  };

  // Filter options based on search term
  const filteredOptions = searchTerm
    ? options.filter(
        (option) =>
          option.label.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (option.value &&
            option.value.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    : options;

  const displayLabel = selectedValue
    ? options.find((opt) => opt.value === selectedValue)?.label || selectedValue
    : placeholder;

  return (
    <div className="relative">
      <div
        className={`flex items-center bg-secondary-2 h-8 min-w-48 rounded-lg sm:pl-2 cursor-pointer ${className}`}
        ref={buttonRef}
      >
        {leftIcon && <Iconwrapper>{leftIcon}</Iconwrapper>}
        <CustomButton
          justify="between"
          variant="ghost"
          rightIcon={
            isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />
          }
          className="w-full h-full"
          onClick={handleToggle}
        >
          <CommonTypography size="xs" weight="normal">
            {displayLabel}
          </CommonTypography>
        </CustomButton>
      </div>

      {/* Render dropdown using portal */}
      {isOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <DropdownContent
            dropdownRef={dropdownRef}
            dropdownPosition={dropdownPosition}
            searchable={searchable}
            searchInputRef={searchInputRef}
            searchTerm={searchTerm}
            handleSearchChange={handleSearchChange}
            handleSearchKeyDown={handleSearchKeyDown}
            handleSearchInputClick={handleSearchInputClick}
            clearSearch={clearSearch}
            filteredOptions={filteredOptions}
            selectedValue={selectedValue}
            handleOptionSelect={handleOptionSelect}
            searchPlaceholder={searchPlaceholder}
          />,
          document.body
        )}
    </div>
  );
};

export default CustomSelect;
