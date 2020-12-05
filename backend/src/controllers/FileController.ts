import { Request, Response } from 'express';
import csvtojson from 'csvtojson';

import knex from '../database/connection';

class ConcluirController {
  async create(request: Request, response: Response) {
    const uploadfile = request.file;

    const data = await csvtojson().fromFile(uploadfile.path);

    if (uploadfile.fieldname === 'conclude') {
      data.map(async (record) => {
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

        await knex('conclude').insert(recordValidated)
      });
    };

    return response.json({ success: true });
  };
};

export default ConcluirController;
