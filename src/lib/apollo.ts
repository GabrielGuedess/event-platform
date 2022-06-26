import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4qaybyb3g4m01xnfqls17yc/master',
  cache: new InMemoryCache(),
});
