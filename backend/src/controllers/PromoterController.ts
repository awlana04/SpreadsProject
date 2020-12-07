import { Request, Response } from 'express';
import knex from '../database/connection';

class PromoterController {
  async index(request: Request, response: Response) {
    const supervisor: any = request.query.supervisor
    const promotor: any = request.query.promotor

    if (supervisor) {
      const data = await knex('conclude')
        .select('promotor_prisma')
        .where('supervisao_prisma', supervisor)
        .whereNotNull('promotor_prisma')
        .orderBy('promotor_prisma')
        .distinct('promotor_prisma')

      return response.json(data);
    }
    else {
      const data = await knex('conclude')
        .select('promotor_prisma')
        .whereNotNull('promotor_prisma')
        .orderBy('promotor_prisma')
        .distinct('promotor_prisma')

      return response.json(data);
    }

  }

}

export default PromoterController;