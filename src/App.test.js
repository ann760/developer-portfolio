import { createRoot, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  createRoot(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
