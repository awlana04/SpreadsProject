import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';

import api from '../services/api';

import '../styles/pages/search.css';

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
};

function Search() {
  const [data, setData] = useState<data[]>([]);
  const [supervisors, setSupervisors] = useState<string[]>([]);
  const [promoters, setPromoters] = useState<string[]>([]);

  const [supervisorSelected, setSupervisorSelected] = useState('');
  const [promoterSelected, setPromoterSelected] = useState('');

  useEffect(() => {
    api.get('conclude?perpage=30&page=1').then(response => {
      setData(response.data.data)
      console.log(response.data.pagination)
    })

    api.get('supervisor').then(response => {
      const supervisorList = response.data.map((supervisor: any) =>
        supervisor.supervisao_prisma);

      setSupervisors(supervisorList);
    });

    api.get('promoter').then(response => {
      const promotersList = response.data.map((promoter: any) =>
        promoter.promotor_prisma);

      setPromoters(promotersList);
    });
  }, []);

  function handleSuperviserOrPromoterOption(event: ChangeEvent<HTMLSelectElement>) {
    const supervisorOption = event.target.value;
    const promoterOption = event.target.value;

    setSupervisorSelected(supervisorOption);
    setPromoterSelected(promoterOption);
  };

  function handleSubmit() {
    api.get(`conclude?supervisor=${supervisorSelected}&promotor=${promoterSelected}`).then(response => {
      setData(response.data.data);
    });
  };

  return (
    <div id="pageContainer">
      <div className="formContainer">

        <div className="selectBoxContainer">
          <label htmlFor="superviser">Supervisor</label><br />
          <select className="selectBox" onChange={handleSuperviserOrPromoterOption}>
            <option value="">Selecione o Supervisor</option>
            
            {supervisors.map(supervisor => (
              <option
                key={supervisor}
                value={supervisor}>{supervisor}
              </option>
            ))}
          </select>
        </div>

        <div className="selectBoxContainer">
          <label htmlFor="districtAttorney">Promotor</label><br />
          <select className="selectBox" onChange={handleSuperviserOrPromoterOption}>
            <option value="">Selecione o Promotor</option>
            
            {promoters.map(promoter => (
              <option
                key={promoter}
                value={promoter}>{promoter}
              </option>
            ))}
          </select>
        </div>

        <div className="buttonContainer">
          <button className="formButton" onClick={handleSubmit}>Buscar</button>
        </div>
      </div>

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
      </div>
    </div>
  )
};

export default Search;
