import { Story, Meta } from '@storybook/react/types-6-0';

import { Video } from '.';

export default {
  title: 'Video',
  component: Video,
} as Meta;

export const Default: Story = () => <Video />;
