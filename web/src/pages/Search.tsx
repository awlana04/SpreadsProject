import React, { ChangeEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

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
  chave_cliente_eps: number;
  agnt: string;
  nm_indicado: string;
  opcoes: string;
  gerente: string;
};

function Search() {
  const [data, setData] = useState<data[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [lastPage, setLastPage] = useState<number>(1)
  const [supervisors, setSupervisors] = useState<string[]>([]);
  const [supervisorChanged, setSupervisorChanged] = useState(false)
  const [promoters, setPromoters] = useState<string[]>([]);
  const [promoterChanged, setPromoterChanged] = useState(false)

  const [supervisorSelected, setSupervisorSelected] = useState('');
  const [promoterSelected, setPromoterSelected] = useState('');

  useEffect(() => {
    api.get('conclude?perpage=20').then(response => {
      setData(response.data.data)
      setCurrentPage(Number(response.data.pagination.currentPage))
      setLastPage(Number(response.data.pagination.lastPage))
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

  useEffect(() => {
    api.get(`conclude?perpage=20&page=${currentPage}&supervisor=${supervisorSelected}&promotor=${promoterSelected}`).then(response => {
      setData(response.data.data)
      setCurrentPage(Number(response.data.pagination.currentPage))
      setLastPage(Number(response.data.pagination.lastPage))
    })

    if (promoterChanged) {
      api.get(`supervisor?promotor=${promoterSelected}`).then(response => {
        const supervisorList = response.data.map((supervisor: any) =>
          supervisor.supervisao_prisma);

        setSupervisors(supervisorList);
      });
      setPromoterChanged(false)
    }

    if (supervisorChanged) {
      api.get(`promoter?supervisor=${supervisorSelected}`).then(response => {
        const promotersList = response.data.map((promoter: any) =>
          promoter.promotor_prisma);

        setPromoters(promotersList);
      });
      setSupervisorChanged(false)
    }
  }, [currentPage, supervisorSelected, promoterSelected]);

  function handleSupervisorOption(event: ChangeEvent<HTMLSelectElement>) {
    const supervisorOption = event.target.value;
    setSupervisorSelected(supervisorOption);
    setSupervisorChanged(true)
  };

  function handlePromoterOption(event: ChangeEvent<HTMLSelectElement>) {
    const promoterOption = event.target.value;
    setPromoterSelected(promoterOption);
    setPromoterChanged(true)
  }

  const history = useHistory();

  function handleClick(id: any) {
    history.push(`/result/${id}`);
  };

  function handleNextPage() {
    if (currentPage < lastPage) setCurrentPage(currentPage + 1)
  }

  function handlePrevPage() {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  return (
    <div id="pageContainer">
      <div className="formContainer">

        <div className="selectBoxContainer">
          <select className="selectBox" onChange={handleSupervisorOption}>
            <option value="">SELECIONE O SUPERVISOR</option>

            {supervisors.map(supervisor => (
              <option
                key={supervisor}
                value={supervisor}>{supervisor}
              </option>
            ))}
          </select>
        </div>

        <div className="selectBoxContainer">
          <select className="selectBox" onChange={handlePromoterOption}>
            <option value="">SELECIONE O PROMOTOR</option>

            {promoters.map(promoter => (
              <option
                key={promoter}
                value={promoter}>{promoter}
              </option>
            ))}
          </select>
        </div>

        <div className="buttonContainer">
        </div>
      </div>

      <div className="pagination">
        <button className="prev" onClick={handlePrevPage}><MdNavigateBefore size="24" /></button>
        <div className="numbers">
          <div>{currentPage}</div>
        </div>
        <button className="next" onClick={handleNextPage}><MdNavigateNext size="24" /></button>
      </div>

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
            </Tr>
          </Thead>

          <Tbody>
            {data.map(item => (
              <Tr key={item.id} onClick={() => handleClick(item.id)}>
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
              </Tr>
            ))}
          </Tbody>
        </Table>
      </div>

      <div className="pagination">
        <button className="prev" onClick={handlePrevPage}><MdNavigateBefore size="24" /></button>
        <div className="numbers">
          <div>{currentPage}</div>
        </div>
        <button className="next" onClick={handleNextPage}><MdNavigateNext size="24" /></button>
      </div>
    </div >
  )
};

export default Search;
