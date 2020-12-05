import { Request, Response } from 'express';
import knex from '../database/connection';

class ConcludeController {
  async index(request: Request, response: Response) {
    const data = await knex('conclude').select('*');

    return response.json(data);
  };
};

export default ConcludeController;
