// lib/apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://localhost/blog_backend/graphql', // Replace with your GraphQL endpoint
  }),
  cache: new InMemoryCache()
});

export default client;
