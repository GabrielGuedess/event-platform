import { Story, Meta } from '@storybook/react/types-6-0';
import { withRouter } from 'storybook-addon-react-router-v6';

import { ILessonProps, Lesson } from '.';

export default {
  title: 'Lesson',
  component: Lesson,
  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/lesson/:lessonSlug',
      routeParams: { lessonSlug: 'abertura-do-evento-ignite-lab' },
    },
  },
  args: {
    slug: 'abertura-do-evento-ignite-lab',
    title: 'Abertura do evento Ignite Lab',
    availableAt: new Date(),
    lessonType: 'live',
  },
} as Meta;

export const Default: Story<ILessonProps> = args => (
  <div className="w-[348px]">
    <Lesson {...args} />
  </div>
);
