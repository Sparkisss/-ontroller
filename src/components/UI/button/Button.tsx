import React, { FC } from 'react';
import classNames from 'classnames';

import classes from './Button.module.css';

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  active?: boolean;
  path?: string;
}

const Button: FC<ButtonProps> = ({
  children = 'Default button',
  onClick = () => {},
  className = '',
  disabled = false,
  active = false,
}) => {
  const buttonClasses = classNames(classes.btn, classes.button, className, {
    [classes.active]: active,
  });

  return (
    <button className={buttonClasses} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
