var express = require("express");
var express_graphql = require("express-graphql");
var { buildSchema } = require("graphql");
// GraphQL schema
var schema = buildSchema(`
    type Query {
        message: String,
        getjoke(index:Int):String 
    }
`);

var jokes = [
  `How many programmers does it take to change a light bulb? none, that's a hardware problem`,
  `Whats the object-oriented way to become wealthy? Inheritance`,
  `Why did the programmer quit his job? Because he didn't get arrays.`
];
console.log("jokes: ", jokes.length);
// Root resolver
var root = {
  message: () => "Hello",
  getjoke: ({ index }) => {
    return jokes[index];
  }
};
// Create an express server and a GraphQL endpoint
var app = express();
app.use(
  "/library",
  express_graphql({
    schema: schema,
    rootValue: root,
    // graphiql: true
  })
);
app.listen(4000, () =>
  console.log("Express GraphQL Server Now Running On localhost:4000/library")
);
