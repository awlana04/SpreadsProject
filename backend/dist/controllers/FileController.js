"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _csvtojson = _interopRequireDefault(require("csvtojson"));

var _connection = _interopRequireDefault(require("../database/connection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ConcluirController {
  async create(request, response) {
    const uploadfile = request.file;
    const data = await (0, _csvtojson.default)().fromFile(uploadfile.path);

    if (uploadfile.fieldname === 'conclude') {
      data.map(async record => {
        const {
          data_inclusao,
          chave_cliente_eps,
          tipo_de_pessoa,
          agnt,
          nm_indicado,
          gerente,
          uf,
          status_backoffice,
          id_emp,
          mes,
          razao_social,
          telefone,
          supervisao_prisma,
          coordenador_prisma,
          gerente_prisma
        } = record;
        const date = data_inclusao.split('/');
        const dateFormat = `${date[2]}-${date[1]}-${date[0]}`;
        const recordValidated = {
          data_inclusao: dateFormat,
          chave_cliente_eps,
          tipo_de_pessoa,
          agnt,
          nm_indicado,
          gerente,
          uf,
          status_backoffice,
          id_emp,
          mes,
          razao_social,
          telefone,
          supervisao_prisma,
          coordenador_prisma,
          gerente_prisma
        };
        await (0, _connection.default)('conclude').insert(recordValidated);
      });
    }

    ;
    return response.json({
      success: true
    });
  }

}

;
var _default = ConcluirController;
exports.default = _default;