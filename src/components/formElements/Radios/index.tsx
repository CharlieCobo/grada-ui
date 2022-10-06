import React, { HTMLAttributes, InputHTMLAttributes } from 'react';

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  id: string;
  label: string;
}

export const Radio = ({ name, id, label, ...props }: RadioProps) => {
  return (
    <>
      <label className="radio__label" htmlFor={id}>
        <input type="radio" name={name} className="radio" id={id} {...props} />
        {label}
      </label>
    </>
  );
};

export interface RadioGroupProps extends HTMLAttributes<HTMLDivElement> {
  radioOpts: RadioProps[];
  label: string;
}

export const RadioGroup = ({ radioOpts, label }: RadioGroupProps) => {
  return (
    <div className="radio-group">
      <label className="radio-group__label">{label}</label>
      <div className="radio-group__wrapper">
        {radioOpts.map((el, idx) => (
          <Radio key={`${idx} - ${el.id}`} {...el} />
        ))}
      </div>
    </div>
  );
};
