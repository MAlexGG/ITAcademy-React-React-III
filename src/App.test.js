import { screen, render } from '@testing-library/react';
import Router from './application/router/router';

test('renders learn react link', () => {
  render(<Router/>);
  const linkElement = screen.getByText(/star wars/i);
  expect(linkElement).toBeInTheDocument();
});
