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
    const status: any = request.query.status

    if (!supervisor && !promotor && !status) {
      const data = await knex('conclude')
        .select('*')
        .paginate({ isLengthAware: true, perPage: perpage, currentPage: page });

      return response.json(data);
    }
    if (supervisor && !promotor && !status) {
      const data = await knex('conclude')
        .select('*')
        .where('supervisao_prisma', supervisor)
        .paginate({ isLengthAware: true, perPage: perpage, currentPage: page });

      return response.json(data);
    }
    if (!supervisor && promotor && !status) {
      const data = await knex('conclude')
        .select('*')
        .where('promotor_prisma', promotor)
        .paginate({ isLengthAware: true, perPage: perpage, currentPage: page });

      return response.json(data);
    }
    if (supervisor && promotor && !status) {
      const data = await knex('conclude')
        .select('*')
        .where('supervisao_prisma', supervisor)
        .andWhere('promotor_prisma', promotor)
        .paginate({ isLengthAware: true, perPage: perpage, currentPage: page });

      return response.json(data);
    }
    if (!supervisor && !promotor && status) {
      const data = await knex('conclude')
      .select('*')
      .where('opcoes', status)
      .paginate({ isLengthAware: true, perPage: perpage, currentPage: page });

    return response.json(data);
    }
    if (supervisor && !promotor && status) {
      const data = await knex('conclude')
      .select('*')
      .where('supervisao_prisma', supervisor)
      .andWhere('opcoes', status)
      .paginate({ isLengthAware: true, perPage: perpage, currentPage: page });

    return response.json(data);
    }
    if (!supervisor && promotor && status) {
      const data = await knex('conclude')
      .select('*')
      .where('opcoes', status)
      .andWhere('promotor_prisma', promotor)
      .paginate({ isLengthAware: true, perPage: perpage, currentPage: page });

    return response.json(data);
    }
    if (supervisor && promotor && status) {
      const data = await knex('conclude')
      .select('*')
      .where('supervisao_prisma', supervisor)
      .andWhere('promotor_prisma', promotor)
      .andWhere('opcoes', status)
      .paginate({ isLengthAware: true, perPage: perpage, currentPage: page });

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
