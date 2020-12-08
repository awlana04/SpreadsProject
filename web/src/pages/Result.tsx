import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { useParams } from 'react-router-dom';

import api from '../services/api';

import '../styles/pages/result.css'

interface data {
  id: number,
  razao_social: string;
  uf: string;
  telefone: number;
  tipo_de_pessoa: string;
  data_inclusao: number;
  status_backoffice: string;
  supervisao_prisma: string;
  promotor_prisma: string;
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
    });
  }, [id]);

  return (
    <div id="pageContainer">

      <div className="tableContainer">
        <Table className="table">
          <Thead>
            <Tr>
              <Th>Razão social</Th>
              <Th>UF</Th>
              <Th>Telefone</Th>
              <Th>Tipo de Pessoa</Th>
              <Th>Data de Inclusão</Th>
              <Th>Status BackOffice</Th>
              <Th>Supervisor</Th>
            </Tr>
          </Thead>

          <Tbody>
            {data.map(item => (
              <Tr key={item.id}>
                <Td>{item.razao_social}</Td>
                <Td>{item.uf}</Td>
                <Td>{item.telefone}</Td>
                <Td>{item.tipo_de_pessoa}</Td>
                <Td>{item.data_inclusao}</Td>
                <Td>{item.status_backoffice}</Td>
                <Td>{item.supervisao_prisma}</Td>
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
