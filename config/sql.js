const sqlConfig = {
    db: {
      /* don't expose password or any sensitive info, done only for demo */
      host: process.env.SQL_HOST,
      user: process.env.SQL_USER,
      password: process.env.SQL_PWD,
      database: process.env.SQL_DATABASE,
    },
    listPerPage: 10,
  };
  module.exports = sqlConfig;