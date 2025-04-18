import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client';
import {setContext} from '@apollo/client/link/context';
const space = process.env.CONTENTFUL_SPACE_ID;
const nodeEnv = process.env.NODE_ENV;

const httpLink = createHttpLink({
  uri: `https://graphql.contentful.com/content/v1/spaces/${space}/environments/stage`,
});

const authLink = setContext((_, {headers}) => {
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${accessToken}`,
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
