import React, { ComponentPropsWithRef } from 'react';

import './styles.css';

export interface ButtonProps extends ComponentPropsWithRef<'button'> {}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className="grada-button">
      {children}
    </button>
  );
};
