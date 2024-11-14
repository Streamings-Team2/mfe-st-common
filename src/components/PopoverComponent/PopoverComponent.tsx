import  React, { ReactNode, useEffect, useRef, useState } from "react";

interface Props {
  trigger: ReactNode
  content: ReactNode
}

const PopoverComponent = ({trigger, content}:Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const popoverRef = useRef<any>(null)
    const togglePopover = () => {
      setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event:any) => {
          if (popoverRef.current && !popoverRef.current.contains(event.target)) {
            setIsOpen(false); // Cerrar el popover
          }
        }
    
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        }
      }, []);
  
    return (
      <div className="relative inline-block text-left">
        {/* Botón para abrir el popover */}
        <div
          onClick={togglePopover}
          className="px-4 py-2 bg-blue-500 text-white rounded-md focus:outline-none"
        >
          {trigger}
        </div>
  
        {/* El Popover */}
        {isOpen && (
          <div 
            ref={popoverRef}
            className="absolute z-10 w-64 mt-2 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div
              onClick={togglePopover}
              className="text-blue-500 text-xs px-4 py-1 hover:text-blue-700"
            >
              cerrar
            </div>
            <div className="py-1" >
              {content}
            </div>
          </div>
        )}
      </div>
    );
}

export default PopoverComponent