import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Button Component', () => {
  it('renders without crashing', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('displays the correct text', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toHaveTextContent('Button');
  });

  it('has the correct class name', () => {
    render(<Button />);
    expect(screen.getByRole('button')).toHaveClass('button');
  });
});
