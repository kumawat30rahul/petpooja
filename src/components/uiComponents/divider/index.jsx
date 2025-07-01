
const CustomDivider = ({
  orientation = 'horizontal', // 'horizontal' | 'vertical'
  thickness = 1, // thickness in pixels
  color = 'lightgray', // default to theme color
  opacity = 1,
  className = '',
  style = {},
  ...props
}) => {
  // Base styles for both orientations
  const baseStyles = `
    flex-shrink-0
    ${orientation === 'horizontal' ? 'w-full' : 'h-full'}
  `;

  // Orientation-specific styles
  const orientationStyles = {
    horizontal: {
      width: '100%',
      height: `${thickness}px`,
      borderTop: `${thickness}px solid ${color}`,
      opacity: opacity
    },
    vertical: {
      height: '100%',
      width: `${thickness}px`,
      borderLeft: `${thickness}px solid ${color}`,
      opacity: opacity
    }
  };

  const dividerStyle = {
    ...orientationStyles[orientation],
    ...style
  };

  return (
    <div
      className={`${baseStyles} ${className}`}
      style={dividerStyle}
      role="separator"
      aria-orientation={orientation}
      {...props}
    />
  );
};

export default CustomDivider