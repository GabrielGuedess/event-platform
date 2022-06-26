import { render, screen } from '@testing-library/react';

import { Video } from '.';

describe('<Video />', () => {
  it('should render the heading', () => {
    const { container } = render(<Video />);

    expect(screen.getByText(/video/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
