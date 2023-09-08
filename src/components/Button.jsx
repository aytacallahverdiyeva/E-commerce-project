import { React, isValidElement } from "react";
//? icon
import { GrClose } from 'react-icons/gr';

const Button = ({ type, children, icon, className = '', ...props}) => {

  const iconActive = !props['data-loading'] && isValidElement(icon);

  const classNames = className ? `shofy-button ${className}`: `shofy-button`;
  return (
    <button className={classNames} type={type} data-icon={iconActive ? 'true' : 'false'} btn-text={children ? 'true': 'false'} {...props}>
      {iconActive && <span className="shofy-button-icon">{icon}</span>}
      {props['btn-close'] ? <GrClose/> : children}
    </button>
  );
};

export default Button;