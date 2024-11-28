import React from 'react';

interface OptionProps extends React.OptionHTMLAttributes<HTMLOptionElement> {
  // Aquí puedes agregar otras propiedades personalizadas si las necesitas
}

const OptionComponent: React.FC<OptionProps> = (props) => {
  return <option {...props} />;
};

export default OptionComponent;
