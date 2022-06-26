import { render, screen } from '@testing-library/react';

import { Logo } from '.';

describe('<Logo />', () => {
  it('should render the heading', () => {
    const { container } = render(<Logo />);

    expect(screen.getByLabelText('Logo')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
