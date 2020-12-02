import path from 'path'

module.exports = {
  client: 'pg',
  connection: {
    host: 'spreads-master.cqzjqsedeu8t.sa-east-1.rds.amazonaws.com',
    user: 'postgres',
    password: 'Pr1sm45pr3ds',
    database: 'postgres'
  },
  migrations: {
    directory: path.resolve(__dirname, 'src', 'database', 'migrations')
  },
  seeds: {
    directory: path.resolve(__dirname, 'src', 'database', 'seeds')
  },
  useNullAsDefault: true,
}