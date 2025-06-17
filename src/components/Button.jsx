export const Button = ({ label, onClick, className = '' }) => {
  return (
    <button
      onClick={onClick}
      className={`py-3 text-lg rounded-md bg-gray-100 hover:bg-gray-200 transition ${className}`}
      aria-label={`Button ${label}`}
    >
      {label}
    </button>
  );
};

export default Button;
