const env = process.env;
//freemysqlhosting.net
//email: monomo3575@dukeoo.com
//pass: PDGpwCNZoeArmzn
/* Server: sql4.freemysqlhosting.net
Name: sql4450162
Username: sql4450162
Password: jl2KKZkBtR
Port number: 3306 */

const config = {
  db: { /* don't expose password or any sensitive info, done only for demo */
    host: env.DB_HOST || 'sql4.freemysqlhosting.net',
    user: env.DB_USER || 'sql4450162',
    password: env.DB_PASSWORD || 'jl2KKZkBtR',
    database: env.DB_NAME || 'sql4450162',
  },
  listPerPage: env.LIST_PER_PAGE || 10,
};


module.exports = config;