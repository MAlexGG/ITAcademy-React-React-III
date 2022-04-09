import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/star wars/i);
  expect(linkElement).toBeInTheDocument();

  // eslint-disable-next-line testing-library/no-debugging-utils
  screen.debug();
});
