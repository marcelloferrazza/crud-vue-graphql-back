export default{
    client: "pg",
    connection: {
      host: "localhost",
      port: 5431,
      user: "postgres",
      password: "a1b2c3d4",
      database: "crudmovies",
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: {
      directory: "./seeds",
    },
  };