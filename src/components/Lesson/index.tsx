/* eslint-disable quotes */
import classNames from 'classnames';
import { isPast, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { CheckCircle, Lock } from 'phosphor-react';
import { Link, useParams } from 'react-router-dom';

export interface ILessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  lessonType: 'live' | 'class';
}

export function Lesson({ title, slug, availableAt, lessonType }: ILessonProps) {
  const { slug: slugUrl } = useParams<{ slug: string }>();

  const isLessonAvailable = isPast(availableAt);
  const availableDateFormatted = format(
    availableAt,
    "EEEE' • 'd' de 'MMMM' • 'k'h'mm",
    {
      locale: ptBR,
    },
  );

  const isActiveLesson = slugUrl === slug;

  return (
    <Link to={`/event/lesson/${slug}`} className="group">
      <span className="text-gray-300">{availableDateFormatted}</span>

      <div
        className={classNames(
          'rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500 transition-colors',
          {
            'bg-green-500': isActiveLesson,
          },
        )}
      >
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span
              className={classNames(
                'flex items-center gap-2 text-sm text-blue-500 font-medium',
                {
                  'text-white': isActiveLesson,
                },
              )}
            >
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="flex items-center gap-2 text-sm text-orange-500 font-medium">
              <Lock size={20} />
              Em breve
            </span>
          )}

          <span
            className={classNames(
              'text-xs rounded px-2 py-[0.125rem] text-white border border-green-300 font-bold',
              {
                'border-white': isActiveLesson,
              },
            )}
          >
            {lessonType === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>

        <strong
          className={classNames('text-gray-200 mt-5 block', {
            'text-white': isActiveLesson,
          })}
        >
          {title}
        </strong>
      </div>
    </Link>
  );
}
