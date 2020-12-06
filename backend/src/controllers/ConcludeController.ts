import { Request, Response } from 'express';
import knex from '../database/connection';
import { attachPaginate } from 'knex-paginate'

attachPaginate();
interface IPaginateParams {
  perPage: number,
  currentPage: number,
  isFromStart?: boolean,
  isLengthAware?: boolean,
}

interface IWithPagination<T = any> {
  data: T;
  pagination: IPagination;
}

interface IPagination {
  total?: number;
  lastPage?: number;
  currentPage: number;
  perPage: number;
  from: number;
  to: number;
}

class ConcludeController {
  async index(request: Request, response: Response) {
    const supervisor: any = request.query.supervisor
    const promotor: any = request.query.promotor
    const page: any = request.query.page
    const perpage: any = request.query.perpage

    if (supervisor || promotor) {
      const data = await knex('conclude')
        .select('*')
        .where('supervisao_prisma', supervisor)
        .orWhere('promotor_prisma', promotor)
        .paginate({ perPage: perpage, currentPage: page });

      return response.json(data);
    }
    else {
      const data = await knex('conclude')
        .select('*')
        .paginate({ perPage: perpage, currentPage: page });

      return response.json(data);
    }

  }

  async show(request: Request, response: Response) {
    const { id } = request.params

    const data = await knex('conclude')
      .select('*')
      .where('id', id)

    return response.json(data);

  }

  async update(request: Request, response: Response) {
    const { id } = request.params
    const form = request.body

    const data = await knex('conclude')
      .where('id', id)
      .update(form)
      .then(() => {
        return knex('conclude').where('id', id);
      });

    return response.json(data);

  }
};

export default ConcludeController;
