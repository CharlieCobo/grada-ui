import React from 'react';
import { render } from '@testing-library/react';
import { Button, ButtonProps } from '.';

describe('components/Button', () => {
  const buttonInitProps: ButtonProps = {
    children: 'Click me!',
  };

  it('Should match with snapshot', () => {
    const { container } = render(<Button {...buttonInitProps} />);

    expect(container).toMatchSnapshot();
  });
});
