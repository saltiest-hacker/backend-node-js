// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,

    connection: {
      filename: "./data/saltyTables.sqlite3",
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: { directory: "./data/seeds" },
  },

  //! add testing and production
  //* video in slack web_32
};
