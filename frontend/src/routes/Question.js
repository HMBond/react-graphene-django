import { useQuery } from 'urql';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const ChoicesForQuestionQuery = (id) => `
  query {
    choicesByQuestionId(id: ${id}) {
        id
        choiceText
        votes
    }
  }
`;

const Question = ({ props }) => {
  // eslint-disable-next-line
  const [result, reexecuteQuery] = useQuery({
    query: ChoicesForQuestionQuery(useParams().questionId),
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Link to="/questions">⬅️ Back to question list</Link>
    </>
  );
};

export default Question;
