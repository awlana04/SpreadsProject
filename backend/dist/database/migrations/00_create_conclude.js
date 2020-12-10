"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.up = up;
exports.down = down;

async function up(knex) {
  return knex.schema.createTable('conclude', table => {
    table.increments('id').primary();
    table.date('data_inclusao');
    table.bigInteger('chave_cliente_eps');
    table.string('tipo_de_pessoa');
    table.string('agnt');
    table.string('nm_indicado');
    table.string('gerente');
    table.string('uf');
    table.string('status_backoffice');
    table.string('id_emp');
    table.string('mes');
    table.string('razao_social');
    table.string('telefone');
    table.string('promotor_prisma');
    table.string('supervisao_prisma');
    table.string('coordenador_prisma');
    table.string('gerente_prisma');
    table.string('observacoes');
    table.string('opcoes');
  });
}

;

async function down(knex) {
  knex.schema.dropTable('conclude');
}

;