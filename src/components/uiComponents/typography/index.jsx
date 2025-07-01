const CommonTypography = ({
  children,
  variant = "body",
  size = "md",
  weight = "normal",
  color = "default",
  align = "left",
  transform = "none",
  decoration = "none",
  element = "span",
  className = "",
  ...props
}) => {
  // Base styles
  const baseStyles = `
    transition-colors duration-200
  `;

  // Size variants
  const sizeStyles = {
    xs: "text-xs leading-4", // 12px
    sm: "text-sm leading-5", // 14px
    md: "text-base leading-6", // 16px
    lg: "text-lg leading-7", // 18px
    xl: "text-xl leading-7", // 20px
    "2xl": "text-2xl leading-8", // 24px
    "3xl": "text-3xl leading-9", // 30px
    "4xl": "text-4xl leading-10", // 36px
    "5xl": "text-5xl leading-none", // 48px
    "6xl": "text-6xl leading-none", // 60px
  };

  // Variant styles (semantic typography)
  const variantStyles = {
    h1: "text-4xl font-bold leading-tight",
    h2: "text-3xl font-bold leading-tight",
    h3: "text-2xl font-semibold leading-tight",
    h4: "text-xl font-semibold leading-tight",
    h5: "text-lg font-medium leading-tight",
    h6: "text-base font-medium leading-tight",
    body: "text-base leading-relaxed",
    caption: "text-sm leading-normal",
    overline: "text-xs font-medium uppercase tracking-wide leading-normal",
    subtitle1: "text-base font-medium leading-relaxed",
    subtitle2: "text-sm font-medium leading-normal",
    button: "text-sm font-medium leading-normal",
    code: "text-sm font-mono leading-normal",
  };

  // Weight variants
  const weightStyles = {
    thin: "font-thin",
    extralight: "font-extralight",
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
    black: "font-black",
  };

  // Color variants
  const colorStyles = {
    default: "text-gray-900",
    primary: "text-blue-600",
    secondary: "text-gray-600",
    success: "text-green-600",
    warning: "text-orange-500",
    danger: "text-red-600",
    info: "text-blue-500",
    muted: "text-gray-500",
    white: "text-white",
    black: "text-black",
    inherit: "text-inherit",
  };

  // Text alignment
  const alignStyles = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
    justify: "text-justify",
  };

  // Text transform
  const transformStyles = {
    none: "",
    uppercase: "uppercase",
    lowercase: "lowercase",
    capitalize: "capitalize",
  };

  // Text decoration
  const decorationStyles = {
    none: "",
    underline: "underline",
    "line-through": "line-through",
    overline: "overline",
  };

  // Element mapping for semantic variants
  const elementMapping = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    body: "p",
    caption: "span",
    overline: "span",
    subtitle1: "p",
    subtitle2: "p",
    button: "span",
    code: "code",
  };

  // Determine the HTML element to use
  const Component =
    element !== "span" ? element : elementMapping[variant] || "span";

  // Combine all styles
  const typographyClasses = [
    baseStyles,
    // Use variant styles if no custom size is provided, otherwise use size styles
    variant !== "body" || size === "md"
      ? variantStyles[variant]
      : sizeStyles[size],
    // Override with size if explicitly provided and different from default
    size !== "md" && variant === "body" ? sizeStyles[size] : "",
    // Override weight if provided and variant doesn't already set it
    !variantStyles[variant]?.includes("font-") ? weightStyles[weight] : "",
    colorStyles[color],
    alignStyles[align],
    transformStyles[transform],
    decorationStyles[decoration],
    className,
  ]
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();

  return (
    <Component className={typographyClasses} {...props}>
      {children}
    </Component>
  );
};

export default CommonTypography;
