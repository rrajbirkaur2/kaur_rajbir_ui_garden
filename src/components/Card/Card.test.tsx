import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Card } from './Card';

test('card renders title and description', () => {
  render(<Card title="Test Title" description="Test Description" />);
  expect(screen.getByText('Test Title')).toBeVisible();
  expect(screen.getByText('Test Description')).toBeVisible();
});

test('card renders custom background color', () => {
  render(<Card title="Color Test" description="Desc" backgroundColor="red" />);

  // Use 'getByRole' or 'getByText' with closest container query
  // Here we assume the card has role="region" for accessibility
  const card = screen.getByRole('region', { name: /Color Test/i });

  expect(card).toHaveStyle({ backgroundColor: 'red' });
});
