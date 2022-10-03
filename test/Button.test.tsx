import React from 'react';
import { render, screen } from '@testing-library/react';
import { Button, ButtonProps } from '../src';

describe('<Button />', () => {
  const initProps: ButtonProps = {
    label: 'Test Button',
    role: 'button',
  };

  test('Shoul be match with snapshot', () => {
    render(<Button {...initProps} />);

    const component = screen.getByRole('button');

    expect(component).toMatchSnapshot();
  });
});
