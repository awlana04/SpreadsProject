"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _connection = _interopRequireDefault(require("../database/connection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PromoterController {
  async index(request, response) {
    const supervisor = request.query.supervisor;
    const promotor = request.query.promotor;

    if (supervisor) {
      const data = await (0, _connection.default)('conclude').select('promotor_prisma').where('supervisao_prisma', supervisor).whereNotNull('promotor_prisma').orderBy('promotor_prisma').distinct('promotor_prisma');
      return response.json(data);
    } else {
      const data = await (0, _connection.default)('conclude').select('promotor_prisma').whereNotNull('promotor_prisma').orderBy('promotor_prisma').distinct('promotor_prisma');
      return response.json(data);
    }
  }

}

var _default = PromoterController;
exports.default = _default;