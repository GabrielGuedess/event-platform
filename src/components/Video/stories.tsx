import { MockedProvider } from '@apollo/client/testing';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Video } from '.';
import { mocks } from './mock';

export default {
  title: 'Video',
  component: Video,
} as Meta;

export const Default: Story = () => (
  <MockedProvider mocks={mocks}>
    <Video lessonSlug="Exg8YBHB02s" />
  </MockedProvider>
);
