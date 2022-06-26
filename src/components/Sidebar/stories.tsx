import { MockedProvider } from '@apollo/client/testing';
import { Story, Meta } from '@storybook/react/types-6-0';

import { Sidebar } from '.';
import { mocks } from './mock';

export default {
  title: 'Sidebar',
  component: Sidebar,
} as Meta;

export const Default: Story = () => (
  <MockedProvider mocks={mocks}>
    <Sidebar />
  </MockedProvider>
);

Default.parameters = {
  apolloClient: {
    mocks,
  },
};
