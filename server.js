import { ApolloServer } from "apollo-server";
import typeDefs from "./schema/schema.js";
import resolvers from "./resolvers/resolvers.js";
import knex from "knex";
import config from "./knexfile.js";

const db = knex(config); // Cria a instância do Knex com o config

const server = new ApolloServer({
  typeDefs,
  resolvers,
  cors: {
    origin: "*",
    credentials: true,
  },
  context: () => ({ db }), // Passa o Knex para o contexto
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
