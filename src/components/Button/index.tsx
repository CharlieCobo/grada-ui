import React, { ButtonHTMLAttributes, useMemo } from 'react';

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: boolean;
  small?: boolean;
}

export const Button = ({ label, variant, small, ...props }: Props) => {
  const styles = useMemo(
    () =>
      [small ? 'is-small' : '', variant ? 'btn-secondary' : 'btn-primary'].join(
        ' '
      ),
    [variant, small]
  );
  return (
    <button className={styles} {...props}>
      {label}
    </button>
  );
};
