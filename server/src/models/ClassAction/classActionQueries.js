import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLInt,
  GraphQLList,
} from "graphql";

const coursesData = [
  {
    id: 1,
    title: "The Complete Node.js Developer Course",
    author: "Andrew Mead, Rob Percival",
    description:
      "Learn Node.js by building real-world applications with Node, Express, MongoDB, Mocha, and more!",
    topic: "Node.js",
    url: "https://codingthesmartway.com/courses/nodejs/",
  },
  {
    id: 2,
    title: "Node.js, Express & MongoDB Dev to Deployment",
    author: "Brad Traversy",
    description:
      "Learn by example building & deploying real-world Node.js applications from absolute scratch",
    topic: "Node.js",
    url: "https://codingthesmartway.com/courses/nodejs-express-mongodb/",
  },
  {
    id: 3,
    title: "JavaScript: Understanding The Weird Parts",
    author: "Anthony Alicea",
    description:
      "An advanced JavaScript course for everyone! Scope, closures, prototypes, this, build your own framework, and more.",
    topic: "JavaScript",
    url: "https://codingthesmartway.com/courses/understand-javascript/",
  },
];

const ClassActionType = new GraphQLObjectType({
  name: "ClassAction",
  fields: () => ({
    id: {
      type: GraphQLInt,
    },
    title: {
      type: GraphQLString,
    },
    author: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
    topic: {
      type: GraphQLString,
    },
    url: {
      type: GraphQLString,
    },
  }),
});

const ClassActionQueries = new GraphQLObjectType({
  name: "ClassActionQueryType",
  fields: () => ({
    classAction: {
      type: ClassActionType,
      args: {
        id: {
          type: GraphQLInt,
        },
      },
      resolve: (parentValue, { id }) => {
        return coursesData.filter((classAction) => {
          return classAction.id == id;
        })[0];
      },
    },
    classActions: {
      type: new GraphQLList(ClassActionType),
      args: {
        topic: {
          type: GraphQLString,
        },
      },
      resolve: (parentValue, { topic }) => {
        if (topic) {
          return coursesData.filter(
            (classAction) => classAction.topic === topic
          );
        } else {
          return coursesData;
        }
      },
    },
  }),
});

export default ClassActionQueries;
