import React from "react";

const CustomButton = ({
  children,
  variant = "primary",
  size = "medium",
  justify = "center",
  leftIcon,
  rightIcon,
  disabled = false,
  onClick,
  className = "",
  type = "button",
  ...props
}) => {
  // Base styles
  const baseStyles = `
    flex items-center font-medium rounded-lg transition-all duration-200 leading-[1em]
    focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer
  `;

  // Size variants
  const sizeStyles = {
    small: "px-3 py-1.5 text-sm gap-1.5",
    medium: "px-2.5 py-1.5 text-sm gap-1.5",
    large: "px-3 py-2.5 text-sm gap-2.5",
  };

  // Variant styles
  const variantStyles = {
    primary: `
      bg-primary text-surface border border-primary
      hover:bg-primary-hover hover:border-primary-hover
      active:bg-green-800
    `,
    secondary: `
      bg-background text-white border border-blue-600
      hover:bg-blue-700 hover:border-blue-700
      active:bg-blue-800
    `,
    greenSecondary: `
      bg-primary-light/50 text-primary
      hover:text-primary-hover
    `,
    outline: `
      bg-transparent text-black-600 border border-border
      hover:bg-black/10 hover:text-black
    `,
    ghost: `
      bg-transparent text-gray-700 border border-transparent
      hover:bg-gray-100 hover:text-gray-900
      active:bg-gray-200
    `,
    danger: `
      bg-red-600 text-white border border-red-600
      hover:bg-red-700 hover:border-red-700
      active:bg-red-800
    `,
    success: `
      bg-green-600 text-white border border-green-600
      hover:bg-green-700 hover:border-green-700
      active:bg-green-800
    `,
    warning: `
      bg-orange-500 text-white border border-orange-500
      hover:bg-orange-600 hover:border-orange-600
      active:bg-orange-700
    `,
    info: `
      bg-blue-600 text-white border border-blue-600
      hover:bg-blue-700 hover:border-blue-700
      active:bg-blue-800
    `,
  };

  // Justify content styles
  const justifyStyles = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
  };

  // Combine all styles
  const buttonClasses = [
    baseStyles,
    sizeStyles[size],
    variantStyles[variant],
    justifyStyles[justify],
    className,
  ]
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  return (
    <button
      type={type}
      className={`group ${buttonClasses}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {leftIcon && (
        <div className="flex-shrink-0 flex items-center justify-center w-5 h-5 text-secondary-light-2 group-hover:text-black transition-colors duration-200">
          {leftIcon}
        </div>
      )}

      {children && <span className="min-w-max">{children}</span>}

      {rightIcon && (
        <div className="flex-shrink-0 flex items-center justify-center w-5 h-5 text-secondary-light-2 group-hover:text-black transition-colors duration-200">
          {rightIcon}
        </div>
      )}
    </button>
  );
};

export default CustomButton;
