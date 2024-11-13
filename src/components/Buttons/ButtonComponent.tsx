import React from 'react';
import '../../index.scss';

interface ButtonProps {
  label: string;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  styleType?: 'primary' | 'secondary' | 'sucess' | 'canceled' | 'inhours' | 'delayed'| 'close';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button', styleType = 'primary', disabled = false }) => {
const getButtonClass = () => {
  const baseClasses = 'mt-4 py-2 px-4 font-bold rounded-md ';
 
  switch (styleType) {
    case 'primary':
      return `${baseClasses} bg-primaryBlue text-white hover:bg-secondaryBlue`;
    case 'secondary':
      return `${baseClasses} bg-gray-200 text-gray-700 hover:bg-gray-300`;
    case 'inhours':
      return `${baseClasses} bg-primaryGreen text-white hover:bg-green-600`;
    case 'canceled':
      return `${baseClasses} bg-primaryRed text-white hover:bg-red-600`;
    case 'delayed':
      return `${baseClasses} bg-primaryYellow text-white hover:bg-yellow-600`;
      case 'close':
      return `${baseClasses} text-gray-500 hover:text-gray-700`
    default:
      return `${baseClasses} bg-red-500 text-white hover:bg-blue-600`;
  }
};


  return (
    <button type={type} onClick={onClick} className={getButtonClass()} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;


