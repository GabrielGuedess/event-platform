import { GetLessonsDocument } from 'graphql/generated';

export const mocks = [
  {
    request: {
      query: GetLessonsDocument,
    },
    result: {
      data: {
        lessons: [
          {
            __typename: 'Lesson',
            id: 'cl4ql9xnc221g0bkg69dv1p83',
            slug: 'abertura-do-evento-ignite-lab',
            title: 'Abertura do evento Ignite Lab',
            availableAt: new Date(),
            lessonType: 'live',
          },
          {
            __typename: 'Lesson',
            id: 'cl4ql9xnc221g0bkg69dv1p84',
            slug: 'abertura-do-evento-ignite-lab',
            title: 'Abertura do evento Ignite Lab',
            availableAt: new Date(),
            lessonType: 'class',
          },
        ],
      },
    },
  },
];
