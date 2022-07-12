import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';

import { Sidebar } from '.';
import { mocks } from './mock';

jest.mock('../Lesson', () => ({
  __esModule: true,
  Lesson: function Lesson() {
    return <div data-testid="Lesson" />;
  },
}));

describe('<Sidebar />', () => {
  it('should render the heading', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <Sidebar />
      </MockedProvider>,
    );

    expect(await screen.findAllByTestId('Lesson')).toHaveLength(2);
  });
});
