import React, { FC } from 'react';
import classNames from 'classnames';

import styles from './Button.module.css';

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  active?: boolean;
}

const Button: FC<ButtonProps> = ({
  children = 'Default button',
  onClick = () => {},
  className = '',
  disabled = false,
  active = false,
  ...attrs
}) => {
  const buttonClasses = classNames('btn', styles.button, className, {
    active,
  });

  return (
    <button {...attrs} className={buttonClasses} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
