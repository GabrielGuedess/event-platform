import { MockedProvider } from '@apollo/client/testing';
import { Story, Meta } from '@storybook/react/types-6-0';
import { withRouter } from 'storybook-addon-react-router-v6';

import { Sidebar } from '.';
import { mocks } from './mock';

export default {
  title: 'Sidebar',
  component: Sidebar,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/lesson/:lessonSlug',
      routeParams: { lessonSlug: 'abertura-do-evento-ignite-lab' },
    },
  },
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
