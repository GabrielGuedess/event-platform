import { useQuery } from '@apollo/client';

import { GET_LESSONS_QUERY } from '../../graphql/queries/lessons';
import { Lesson } from '../Lesson';

interface ILessons {
  lessons: {
    id: string;
    slug: string;
    title: string;
    availableAt: Date;
    lessonType: 'live' | 'class';
  }[];
}

export function Sidebar() {
  const { data } = useQuery<ILessons>(GET_LESSONS_QUERY);

  return (
    <aside className="w-[348px] bg-gray-700 p-6 border-l border-gray-600">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>

      <div className="flex flex-col gap-8">
        {data?.lessons.map(({ id, slug, title, availableAt, lessonType }) => (
          <Lesson
            key={id}
            title={title}
            slug={slug}
            availableAt={new Date(availableAt)}
            lessonType={lessonType}
          />
        ))}
      </div>
    </aside>
  );
}
