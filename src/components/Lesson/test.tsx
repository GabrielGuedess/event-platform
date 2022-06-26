import { render, screen } from '@testing-library/react';

import { Lesson } from '.';

describe('<Lesson />', () => {
  it('should render the heading in the component', () => {
    const { container } = render(
      <Lesson
        key={1}
        title="Lesson 1"
        slug="lesson-1"
        availableAt={new Date()}
        lessonType="live"
      />,
    );

    expect(screen.getByText(/Lesson 1/i)).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render content status as "Em breve" based on date', () => {
    render(
      <Lesson
        key={1}
        title="Lesson 1"
        slug="lesson-1"
        availableAt={new Date(new Date().setDate(new Date().getFullYear() - 5))}
        lessonType="live"
      />,
    );

    expect(screen.getByText(/Em breve/i)).toBeInTheDocument();
  });

  it('should render content status as "Conteúdo liberado" based on date', () => {
    render(
      <Lesson
        key={1}
        title="Lesson 1"
        slug="lesson-1"
        availableAt={new Date()}
        lessonType="live"
      />,
    );

    expect(screen.getByText('Conteúdo liberado')).toBeInTheDocument();
  });

  it('should render class status as "AO VIVO" based on content type', () => {
    render(
      <Lesson
        key={1}
        title="Lesson 1"
        slug="lesson-1"
        availableAt={new Date()}
        lessonType="live"
      />,
    );

    expect(screen.getByText(/AO VIVO/i)).toBeInTheDocument();
  });

  it('should render class status as "AULA PRÁTICA" based on content type', () => {
    render(
      <Lesson
        key={1}
        title="Lesson 1"
        slug="lesson-1"
        availableAt={new Date()}
        lessonType="class"
      />,
    );

    expect(screen.getByText(/AULA PRÁTICA/i)).toBeInTheDocument();
  });
});
