"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _connection = _interopRequireDefault(require("../database/connection"));

var _knexPaginate = require("knex-paginate");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _knexPaginate.attachPaginate)();

class ConcludeController {
  async index(request, response) {
    const supervisor = request.query.supervisor;
    const promotor = request.query.promotor;
    const page = request.query.page;
    const perpage = request.query.perpage;

    if (supervisor || promotor) {
      const data = await (0, _connection.default)('conclude').select('*').where('supervisao_prisma', supervisor).orWhere('promotor_prisma', promotor).paginate({
        perPage: perpage,
        currentPage: page
      });
      return response.json(data);
    } else {
      const data = await (0, _connection.default)('conclude').select('*').paginate({
        perPage: perpage,
        currentPage: page
      });
      return response.json(data);
    }
  }

  async show(request, response) {
    const {
      id
    } = request.params;
    const data = await (0, _connection.default)('conclude').select('*').where('id', id);
    return response.json(data);
  }

  async update(request, response) {
    const {
      id
    } = request.params;
    const form = request.body;
    const data = await (0, _connection.default)('conclude').where('id', id).update(form).then(() => {
      return (0, _connection.default)('conclude').where('id', id);
    });
    return response.json(data);
  }

}

;
var _default = ConcludeController;
exports.default = _default;