import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Ciclomatica from './Ciclomatica';

describe('<Ciclomatica />', () => {
  test('it should mount', () => {
    render(<Ciclomatica />);
    
    const ciclomatica = screen.getByTestId('Ciclomatica');

    expect(ciclomatica).toBeInTheDocument();
  });
});