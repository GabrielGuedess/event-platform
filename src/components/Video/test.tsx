import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Video } from '.';
import { mocks } from './mock';

jest.mock('@vime/react', () => ({
  __esModule: true,
  Player: function Player() {
    return (
      <div data-testid="Player">
        <div data-testid="Youtube" />
        <div data-testid="DefaultUi" />
      </div>
    );
  },
  Youtube: function Youtube(): React.ReactNode {
    return <div data-testid="Youtube" />;
  },
  DefaultUi: function DefaultUi() {
    return <div data-testid="DefaultUi" />;
  },
}));

describe('<Video />', () => {
  it('should render the player', async () => {
    render(
      <MockedProvider mocks={mocks}>
        <BrowserRouter>
          <Video lessonSlug="abertura-do-evento-ignite-lab" />
        </BrowserRouter>
      </MockedProvider>,
    );

    expect(await screen.findByTestId(/Player/i)).toBeInTheDocument();

    expect(await screen.findByTestId(/Youtube/i)).toBeInTheDocument();

    expect(await screen.findByTestId(/DefaultUi/i)).toBeInTheDocument();
  });
});
