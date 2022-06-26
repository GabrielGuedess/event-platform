import { Story, Meta } from '@storybook/react/types-6-0';

import { ILessonProps, Lesson } from '.';

export default {
  title: 'Lesson',
  component: Lesson,
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
