import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { useParams } from 'react-router-dom';

import api from '../services/api';

interface data {
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
  const params = useParams<dataParams>();

  const [data, setData] = useState<data[]>([]);
  
  useEffect(() => {
    api.get(`conclude/${params.id}`).then(response => {
      setData(response.data);
    });
  }, [params.id]);

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
          
          {/* <Tbody>
            <Tr key={data.id}>
                <Td>{data.razao_social}</Td>
                <Td>{data.uf}</Td>
                <Td>{data.telefone}</Td>
                <Td>{data.tipo_de_pessoa}</Td>
                <Td>{data.data_inclusao}</Td>
                <Td>{data.status_backoffice}</Td>
                <Td>{data.supervisao_prisma}</Td>
              </Tr>
          </Tbody> */}
        </Table>
      </div>
    </div>
  )
};

export default Result;
