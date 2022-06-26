import { gql } from '@apollo/client';

export const GET_LESSONS_QUERY = gql`
  query lessons {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      slug
      title
      availableAt
      lessonType
    }
  }
`;
