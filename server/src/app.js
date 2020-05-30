import express from "express";
import mongoose from "mongoose";
import graphqlHTTP from "express-graphql";
import { rootQueries, rootMutations } from "./models";
import { GraphQLSchema, GraphQLObjectType } from "graphql";
import cors from "cors";

const app = express();
const port = 8000;

const schema = new GraphQLSchema({
  query: rootQueries,
  mutation: rootMutations,
});
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema, // Must be provided
    graphiql: true, // Enable GraphiQL when server endpoint is accessed in browser,
  })
);

app.get("/", (req, res) => res.send("Hello World!!"));

mongoose
  .connect(
    "mongodb+srv://Idoperlman:Ido9101995@cluster0-aliz5.mongodb.net/test?retryWrites=true&w=majority"
  )
  .then(app.listen(port, () => console.log(`Server is served on port ${port}`)))
  .catch((err) => console.log(err));
