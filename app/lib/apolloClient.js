// lib/apolloClient.js
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost/blog_backend/graphql', // Replace with your GraphQL endpoint
  cache: new InMemoryCache(),
});

export default client;
