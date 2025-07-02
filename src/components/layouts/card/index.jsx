const CardLayout = ({ children, className, delay = 0 }) => {
  return (
    <div
      className={`w-auto h-auto p-4 border border-border rounded-xl 
        animate-slideUp opacity-0 
        ${className}`}
      style={{
        animation: `slideUpFade 0.6s ease-out forwards`,
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
      <style jsx>{`
        @keyframes slideUpFade {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default CardLayout;
