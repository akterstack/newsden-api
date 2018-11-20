import fs from "fs";
import path from 'path';
import {
  fetchSources,
  fetchArticles
} from './repository'
import {
  ApolloServer
} from 'apollo-server'

const typeDefs = [fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8")]

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    sources: async () => fetchSources(),
    articles: async () => fetchArticles()
  },
  Article: {
    body: (article) => {
      let body = ''
      for (let i = 0; i < 10; i++)
        body += article.content + '<br/>'
      return body
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({
  url
}) => {
  console.log(`🚀 Server ready at ${url}`)
});
