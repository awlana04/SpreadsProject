import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { useParams } from 'react-router-dom';

import api from '../services/api';

import '../styles/pages/result.css'

interface data {
  id: number;
  razao_social: string;
  uf: string;
  telefone: number;
  tipo_de_pessoa: string;
  data_inclusao: number;
  status_backoffice: string;
  supervisao_prisma: string;
  promotor_prisma: string;
  chave_cliente_eps: number;
  agnt: string;
  nm_indicado: string;
  opcoes: string;
  gerente: string;
  observacoes: string;
}

interface dataParams {
  id: string;
};

function Result() {
  const { id } = useParams<dataParams>();

  const [data, setData] = useState<data[]>([]);

  useEffect(() => {
    api.get(`conclude/${id}`).then(response => {
      setData(response.data);
      console.log(response.data)
    });
  }, []);

  return (
    <div id="pageContainer">

      <div className="tableContainer">
        <Table className="table">
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Razão social</Th>
              <Th>Telefone</Th>
              <Th>Tipo Pessoa</Th>
              <Th>Data Inclusão</Th>
              <Th>Chave EPS</Th>
              <Th>Agente</Th>
              <Th>Nome Indicado</Th>
              <Th>Gerente</Th>
              <Th>UF</Th>
              <Th>Status Bko</Th>
              <Th>Supervisor</Th>
              <Th>Promotor</Th>
              <Th>Status</Th>
              <Th>Observações</Th>
            </Tr>
          </Thead>

          <Tbody>
            {data.map(item => (
              <Tr key={item.id}>
                <Td>{item.id ? item.id : 'NÃO INFORMADO'}</Td>
                <Td>{item.razao_social ? item.razao_social : 'NÃO INFORMADO'}</Td>
                <Td>{item.telefone ? item.telefone : 'NÃO INFORMADO'}</Td>
                <Td>{item.tipo_de_pessoa ? item.tipo_de_pessoa : 'NÃO INFORMADO'}</Td>
                <Td>{item.data_inclusao ? item.data_inclusao : 'NÃO INFORMADO'}</Td>
                <Td>{item.chave_cliente_eps ? item.chave_cliente_eps : 'NÃO INFORMADO'}</Td>
                <Td>{item.agnt ? item.agnt : 'NÃO INFORMADO'}</Td>
                <Td>{item.nm_indicado ? item.nm_indicado : 'NÃO INFORMADO'}</Td>
                <Td>{item.gerente ? item.gerente : 'NÃO INFORMADO'}</Td>
                <Td>{item.uf ? item.uf : 'NÃO INFORMADO'}</Td>
                <Td>{item.status_backoffice ? item.status_backoffice : 'NÃO INFORMADO'}</Td>
                <Td>{item.supervisao_prisma ? item.supervisao_prisma : 'NÃO INFORMADO'}</Td>
                <Td>{item.promotor_prisma ? item.promotor_prisma : <p className="empty">SEM ATRIBUIÇÃO</p>}</Td>
                <Td>{item.opcoes ? item.opcoes : <p className="empty">SEM TRATATIVA</p>}</Td>
                <Td>{item.observacoes ? item.observacoes : 'SEM OBSERVAÇÕES'}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>

        <div className="updateContainer">
          <input type="text" placeholder="DIGITE O NOME DO PROMOTOR" className="textInput" />
          <textarea className="textArea" placeholder="OBSERVAÇÕES" />

          <select className="selectBox" placeholder="STATUS" onChange={() => { }}>
            <option value=""></option>
            <option value="CLIENTE DESISTIU">CLIENTE DESISTIU</option>
            <option value="CLIENTE RECEBEU A MAQUINA">CLIENTE RECEBEU A MAQUINA</option>
            <option value="CLIENTE SEM INTERESSE">CLIENTE SEM INTERESSE</option>
            <option value="INSUCESSO NA TENTATIVA DE CONTATO">INSUCESSO NA TENTATIVA DE CONTATO</option>
            <option value="VENDA CONCLUIDA COM SUCESSO">VENDA CONCLUIDA COM SUCESSO</option>
          </select>
        </div>
      </div>
    </div>
  )
};

export default Result;
