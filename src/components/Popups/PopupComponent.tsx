import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import Button from '../Buttons/ButtonComponent'
import '../../index.scss';


interface PopupProps {
  title: string;
  content: string;
  buttonComponent: React.ReactNode;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ title, content, buttonComponent, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96">
        <div className="flex justify-between items-center">
          <FaInfoCircle className="text-blue-500 text-2xl" />
          <Button onClick={onClose}
            label='x'
            styleType='close'
          ></Button>
        </div>
        <h2 className="text-xl font-semibold mt-4">{title}</h2>
        <p className="mt-2">{content}</p>
        <div className="mt-4">
          {buttonComponent}
        </div>
      </div>
    </div>
  );
};

export default Popup;
