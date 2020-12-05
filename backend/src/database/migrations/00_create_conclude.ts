import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('conclude', table => {
    table.increments('id').primary();
    table.date('data_inclusao')
    table.bigInteger('chave_cliente_eps')
    table.string('tipo_de_pessoa')
    table.string('agnt')
    table.string('nm_indicado')
    table.string('gerente')
    table.string('uf')
    table.string('status_backoffice')
    table.string('id_emp')
    table.string('mes')
    table.string('razao_social')
    table.string('telefone')
    table.string('supervisao_prisma')
    table.string('coordenador_prisma')
    table.string('gerente_prisma')
  });
};

export async function down(knex: Knex) {
  knex.schema.dropTable('conclude');
};
