import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Text, TextProps } from '../../src';

const Person = (
  <svg
    width="46"
    height="46"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M16.125 6.75c-.184 2.478-2.063 4.5-4.125 4.5-2.063 0-3.945-2.021-4.125-4.5-.188-2.578 1.64-4.5 4.125-4.5 2.484 0 4.312 1.969 4.125 4.5Z"></path>
    <path d="M12 14.25c-4.078 0-8.217 2.25-8.983 6.497-.092.512.197 1.003.733 1.003h16.5c.536 0 .826-.491.734-1.003C20.217 16.5 16.078 14.25 12 14.25Z"></path>
  </svg>
);

describe('<Text />', () => {
  const initProps: TextProps = {
    label: 'Test Button',
    placeholder: 'Enter Text',
    onChange: jest.fn(),
    role: 'textbox',
    icon: Person,
    onIconClick: jest.fn(),
  };

  afterEach(cleanup);

  test('Shoul be match with snapshot', () => {
    const { baseElement } = render(<Text {...initProps} />);

    expect(baseElement).toMatchSnapshot();
  });

  test('Shoul be change the value', async () => {
    render(<Text {...initProps} />);

    const InputComponent = screen.getByRole('textbox');

    await userEvent.type(InputComponent, 'new value');

    expect(InputComponent).toHaveValue('new value');
    expect(initProps.onChange).toBeCalled();
  });
});
