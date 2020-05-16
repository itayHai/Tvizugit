import { URL } from "./globalConsts";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: URL,
});

export default client;
