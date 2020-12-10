"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _connection = _interopRequireDefault(require("../database/connection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class SupervisorController {
  async index(request, response) {
    const promotor = request.query.promotor;

    if (promotor) {
      const data = await (0, _connection.default)('conclude').select('supervisao_prisma').whereNotNull('supervisao_prisma').where('promotor_prisma', promotor).orderBy('supervisao_prisma').distinct('supervisao_prisma');
      return response.json(data);
    } else {
      const data = await (0, _connection.default)('conclude').select('supervisao_prisma').whereNotNull('supervisao_prisma').orderBy('supervisao_prisma').distinct('supervisao_prisma');
      return response.json(data);
    }
  }

}

var _default = SupervisorController;
exports.default = _default;