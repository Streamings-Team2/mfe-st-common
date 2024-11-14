import React, { forwardRef, ReactNode, SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode; 
}

const SelectComponent = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const { children, ...restProps } = props; 

  return (
    <select ref={ref} {...restProps}>
      {children} 
    </select>
  );
});

export default SelectComponent;
