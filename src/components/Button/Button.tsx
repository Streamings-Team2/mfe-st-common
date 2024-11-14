import React, { ButtonHTMLAttributes, ForwardedRef, forwardRef } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {

}

const Button = forwardRef<HTMLButtonElement, Props>(({
  children,
  ...props
}, ref: ForwardedRef<HTMLButtonElement> | null) => {
  return (
    <button ref={ref} {...props}>
      {children}
    </button>
  );
});

export default Button