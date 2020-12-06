import { Request, Response } from 'express';
import knex from '../database/connection';

class PromoterController {
  async index(request: Request, response: Response) {
    const data = await knex('conclude')
      .select('promotor_prisma')
      .whereNotNull('promotor_prisma')
      .orderBy('promotor_prisma')
      .distinct('promotor_prisma')

    return response.json(data);
  }

}

export default PromoterController;