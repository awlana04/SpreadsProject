import knex from 'knex'
import path from 'path'

const connection = knex({
  // client: 'sqlite3',
  // connection: {
  //   filename: path.resolve(__dirname, 'database.sqlite'),
  // },
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'postgres',
    password: 'Pr1sm45pr3ds',
    database: 'postgres'
  },
  useNullAsDefault: true,
})

export default connection;