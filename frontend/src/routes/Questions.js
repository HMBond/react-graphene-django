import { useQuery } from 'urql';
import { Link } from 'react-router-dom';

const AllQuestionsQuery = `
  query {
    allQuestions{
      id
      pubDate
      questionText
      choiceSet{
        id
        choiceText
        votes
      }
    }
  }
`;

const Questions = ({ props }) => {
  // eslint-disable-next-line
  const [result, reexecuteQuery] = useQuery({
    query: AllQuestionsQuery,
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;

  return (
    <>
      <ul>
        {data.allQuestions.map((question) => (
          <li key={question.id}>
            <Link to={`/questions/${question.id}`} key={question.id}>
              {question.questionText}
            </Link>
          </li>
        ))}
      </ul>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default Questions;
