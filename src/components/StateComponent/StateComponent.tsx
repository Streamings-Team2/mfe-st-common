import React from 'react';
import "./state.css"
// Definimos los posibles valores para el status
type Status = 'CANCELADO' | 'EN HORARIO' | 'RETRASADO';

interface TagProps {
  status: Status;
  text: string;
}

const StateComponent: React.FC<TagProps> = ({ status, text }) => {

  return (
    <span className={"tag " +status }>
      {text}
    </span>
  );
};

export default StateComponent;