const CardLayout = ({ children, className }) => {
  return (
    <div
      className={`w-auto h-auto p-4 border border-border rounded-xl ${className}`}
    >
      {children}
    </div>
  );
};

export default CardLayout;
