import { GET_LESSONS_QUERY } from '../../graphql/queries/lessons';

export const mocks = [
  {
    request: {
      query: GET_LESSONS_QUERY,
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
