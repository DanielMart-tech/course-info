const Header = ({ name }) => {
  return <h1>{name}</h1>;
};

const Part = ({ topics, exercises }) => {
  return (
    <p>
      {topics} {exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => {
        return (
          <Part topics={part.name} exercises={part.exercises} key={part.id} />
        );
      })}
    </>
  );
};

const Total = ({ sum }) => {
  let total = sum.reduce((acc, cur) => ({
    exercises: acc.exercises + cur.exercises,
  }));

  return (
    <p>
      <strong>total of {total.exercises} exercises</strong>
    </p>
  );
};

const Course = ({ courses }) => {
  return (
    <>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <Header name={course.name} />
            <Content parts={course.parts} />
            <Total sum={course.parts} />
          </div>
        );
      })}
    </>
  );
};

export default Course;
