import fs from "fs";
import path from 'path';

import {
  ApolloServer
} from 'apollo-server'

const typeDefs = [fs.readFileSync(path.join(__dirname, "schema.graphql"), "utf8")]
import NewsRepository from './NewsRepository'

const repository = new NewsRepository()

// A map of functions which return data for the schema.
const resolvers = {
  Query: {
    articles: async () => {

      let data = await repository.fetchArticles()
      //console.log(data);
      return data.articles;
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
