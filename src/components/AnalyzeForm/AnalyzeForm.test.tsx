
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AnalyzeForm from './AnalyzeForm';

describe('<AnalyzeForm />', () => {
  test('it should mount', () => {
    render(<AnalyzeForm />);
    
    const analyzeForm = screen.getByTestId('AnalyzeForm');

    expect(analyzeForm).toBeInTheDocument();
  });
});