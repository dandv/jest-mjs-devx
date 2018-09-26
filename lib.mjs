import graphQLTools from 'graphql-tools';
export const makeSchema = graphQLTools.makeExecutableSchema({
  typeDefs: 'type Foo { bar: Int! }',
  resolvers: {},
});
