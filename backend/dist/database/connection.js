"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _knex = _interopRequireDefault(require("knex"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const connection = (0, _knex.default)({
  // client: 'sqlite3',
  // connection: {
  //   filename: path.resolve(__dirname, 'database.sqlite'),
  // },
  client: 'pg',
  connection: {
    host: 'spreads-master.cqzjqsedeu8t.sa-east-1.rds.amazonaws.com',
    user: 'postgres',
    password: 'Pr1sm45pr3ds',
    database: 'postgres'
  },
  useNullAsDefault: true
});
var _default = connection;
exports.default = _default;