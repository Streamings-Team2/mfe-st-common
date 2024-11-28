import React, { forwardRef, LabelHTMLAttributes, ReactNode } from 'react';

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

const Label = forwardRef<HTMLLabelElement, LabelProps>((props, ref) => {
  const { children, ...restProps } = props; 

  return (
    <label ref={ref} {...restProps}>
      {children} 
    </label>
  );
});

export default Label;
