import { screen } from '@testing-library/react';
import { render } from '@test-utils';
import { Welcome } from './Welcome';

it('displays welcome text', () => {
  render(<Welcome />);
  expect(screen.getByText('Application header')).toBeInTheDocument();
});
