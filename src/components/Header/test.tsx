import { render, screen } from '@testing-library/react';

import { Header } from '.';

jest.mock('../Logo', () => ({
  __esModule: true,
  Logo: function Logo() {
    return <div data-testid="Logo" />;
  },
}));

describe('<Header />', () => {
  it('should render the heading', () => {
    render(<Header />);

    expect(screen.getByTestId('Logo')).toBeInTheDocument();
  });
});
