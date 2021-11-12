import { createClient, dedupExchange, fetchExchange, Provider } from 'urql';
import { cacheExchange } from '@urql/exchange-graphcache';

const client = createClient({
  url: 'http://localhost:8000/graphql/',
  exchanges: [dedupExchange, cacheExchange({}), fetchExchange],
  requestPolicy: 'cache-and-network',
});

function App({ children }) {
  return <Provider value={client}>{children}</Provider>;
}

export default App;
