import React, { InputHTMLAttributes, MouseEventHandler, useMemo } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: JSX.Element;
  helpText?: string;
  isValid?: boolean;
  touched?: boolean;
  onIconClick?: MouseEventHandler<HTMLButtonElement>;
}

export const Input = ({
  id,
  name,
  label,
  icon,
  helpText,
  isValid = true,
  touched,
  onIconClick,
  ...props
}: InputProps) => {
  const validStyle = useMemo(
    () => (isValid ? (touched ? 'input__success' : '') : 'input__error'),
    [isValid, touched]
  );

  return (
    <>
      {label && (
        <label
          className="input__label"
          htmlFor={name}
          data-testid="input-label"
        >
          {label}
        </label>
      )}
      <div className={`input__wrapper ${validStyle}`}>
        <input name={name} className={`input ${validStyle}`} {...props} />
        {icon && onIconClick && (
          <button
            className={`button ${validStyle}`}
            onClick={onIconClick}
            data-testid="input-button"
          >
            {icon}
          </button>
        )}
      </div>
      {helpText && (
        <p className={`input__help-text ${validStyle}`}>{helpText}</p>
      )}
    </>
  );
};
