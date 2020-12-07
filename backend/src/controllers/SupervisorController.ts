import { Request, Response } from 'express';
import knex from '../database/connection';

class SupervisorController {
  async index(request: Request, response: Response) {
    const promotor: any = request.query.promotor

    if (promotor) {
      const data = await knex('conclude')
        .select('supervisao_prisma')
        .whereNotNull('supervisao_prisma')
        .where('promotor_prisma', promotor)
        .orderBy('supervisao_prisma')
        .distinct('supervisao_prisma')

      return response.json(data);
    }
    else {
      const data = await knex('conclude')
        .select('supervisao_prisma')
        .whereNotNull('supervisao_prisma')
        .orderBy('supervisao_prisma')
        .distinct('supervisao_prisma')

      return response.json(data);
    }
  }

}

export default SupervisorController;
