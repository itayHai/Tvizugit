import { URL } from "./globalConsts";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: URL,
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  }
});

export default client;
