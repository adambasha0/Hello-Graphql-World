var { graphql, buildSchema } = require('graphql');
 
// Construct a schema, using GraphQL schema language
var mySchema = buildSchema(`
  type Query {
    tuturiol: String
  }
`);
 
// The root pro vides a resolver function for each API endpoint
var root = {
  tuturiol: () => {
    return 'Hello Graphql world!:)';
  },
};
 
// Run the GraphQL query '{ hello }' and print out the response
graphql(mySchema, '{ tuturiol }', root).then((response) => {
  console.log(response);
});