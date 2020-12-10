import { Request, Response } from 'express';
import knex from '../database/connection';

class StatusController {
  async index(request: Request, response: Response) {
    const supervisor: any = request.query.supervisor;
    const promotor: any = request.query.promotor;

    if (promotor && supervisor) {
      const data = await knex('conclude')
        .select('opcoes')
        .where('promotor_prisma', promotor)
        .andWhere('supervisao_prisma', supervisor)
        .orderBy('opcoes')
        .whereNotNull('opcoes')
        .distinct('opcoes')

        return response.json(data);
    }  if (!promotor && supervisor ) {
      const data = await knex('conclude')
        .select('opcoes')
        .where('supervisao_prisma', supervisor)
        .orderBy('opcoes')
        .whereNotNull('opcoes')
        .distinct('opcoes')

        return response.json(data);
    }  if (promotor && !supervisor) {
      const data = await knex('conclude')
        .select('opcoes')
        .where('promotor_prisma', promotor)
        .orderBy('opcoes')
        .whereNotNull('opcoes')
        .distinct('opcoes')
    }  if (promotor) {
      const data = await knex('conclude')
      .select('opcoes')
      .where('promotor_prisma', promotor)
      .orderBy('opcoes')
      .whereNotNull('opcoes')
      .distinct('opcoes')
    } if (supervisor) {
      const data = await knex('conclude')
      .select('opcoes')
      .where('supervisao_prisma', supervisor)
      .orderBy('opcoes')
      .whereNotNull('opcoes')
      .distinct('opcoes')
    } else {
      const data = await knex('conclude')
      .select('opcoes')
        .orderBy('opcoes')
        .whereNotNull('opcoes')
        .distinct('opcoes')

        return response.json(data);
    }
  };
};

export default StatusController;
