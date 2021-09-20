
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from './Nav';

describe('<Nav />', () => {
  test('it should mount', () => {
    render(<Nav />);
    
    const menu = screen.getByTestId('Nav');

    expect(menu).toBeInTheDocument();
  });
});