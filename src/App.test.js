import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavBar from './components/Navbar';

test('renders the portfolio navigation links', () => {
  render(
    <MemoryRouter>
      <NavBar />
    </MemoryRouter>
  );
  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(screen.getByText(/home/i)).toBeInTheDocument();
  expect(screen.getByText(/projects/i)).toBeInTheDocument();
});
