/* eslint-disable quotes */

import { GetLessonBySlugDocument } from 'graphql/generated';

export const mocks = [
  {
    request: {
      query: GetLessonBySlugDocument,
      variables: {
        slug: 'abertura-do-evento-ignite-lab',
      },
    },
    result: {
      data: {
        lesson: {
          __typename: 'Lesson',
          title: 'Abertura do evento Ignite Lab',
          videoId: 'SO4-izct7Mc',
          description:
            'Nessa aula vamos dar início ao projeto criando a estrutura base da aplicação utilizando ReactJS, Vite e TailwindCSS. Vamos também realizar o setup do nosso projeto no GraphCMS criando as entidades da aplicação e integrando a API GraphQL gerada pela plataforma no nosso front-end utilizando Apollo Client.',
          teacher: {
            __typename: 'Teacher',
            name: 'Diego Fernandes',
            bio: "CTO at @Rocketseat. Passionate about education and changing people's lives through programming.",
            avatarURL: 'https://avatars.githubusercontent.com/u/2254731?v=4',
          },
        },
      },
    },
  },
];
