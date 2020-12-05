import React, { useEffect, useState } from 'react';

import api from '../services/api';

import Logo from '../images/logo.svg';
import Line from '../images/line.svg';
import Line2 from '../images/line_2.svg';

import '../styles/pages/search.css';

interface datas {
  id: number;
  razão_social: number;
  uf: string;
  telefone: number;
  tipo_de_pessoa: string;
  data_inclusao: number;
  status_backoffice: string;
};

interface supervisers {
  supervisao_prisma: string;
};

function Search() {
  const [data, setData] = useState<datas[]>([]);
  const [superviser, setSuperviser] = useState<string[]>([]);

  useEffect(() => {
    api.get('conclude').then(response => {
      setData(response.data);
    });
  }, []);

  useEffect(() => {
    api.get<supervisers[]>('conclude').then((response) => {
      const supervisersList = response.data.map((supervisers) => supervisers.supervisao_prisma);

      setSuperviser(supervisersList);
    });
  }, []);

  return (
    <div id="search-page">
      <img src={Logo} alt="Logo"/>

      <div className="search">
        <div className="inputs">
          <div className="input">
            <div className="superviserSelection">
              <label htmlFor="superviser">Supervisor</label><br />
              
              <select className="superviser">
                {superviser.map((supervisers) => {
                  return (
                    <option 
                      key={supervisers} 
                      value={supervisers}>{supervisers}
                    </option>
                  )
                })}
                
                <input type="hidden" name="superviser" />
              </select>
            </div>
          </div>

          <div className="input">
            <div className="districtAttorneySelection">
              <label htmlFor="districtAttorney">Promotor</label><br />
              
              <select className="districtAttorney">
                {superviser.map((supervisers) => {
                  return (
                    <option 
                      key={supervisers} 
                      value={supervisers}>{supervisers}
                    </option>
                  )
                })}
                
                <input type="hidden" name="districtAttorney" />
              </select>
            </div>
          </div>

          <div className="button">
            <button>Buscar</button>
          </div>
        </div>
      </div>

      <img src={Line} alt="Line" />

      <div className="table">
        <div className="text">
          <div className="textOne">
            <h3>Razão social</h3>
          </div>

          <div className="textTwo">
            <h3>UF</h3>
          </div>

          <div className="textThree">
            <h3>Telefone</h3>
          </div>

          <div className="textFour">
            <h3>Tipo de Pessoa</h3>
          </div>

          <div className="textFive">
            <h3>Data de Inclusão</h3>
          </div>

          <div className="textSix">
            <h3>BackOffice</h3>
          </div>
        </div>

        <div className="registers">
          <div className="firstColor">
            <div className="socialReason">
              <p>Nenhuma</p>
              <img src={Line2} alt="A white line to separete the informations"/>
            </div>

            <div className="uf">
              <p>PA</p>
              <img src={Line2} alt="A white line to separete the informations"/>
            </div>

            <div className="phoneNumber">
              <p>(91) 9 4002-8922</p>
              <img src={Line2} alt="A white line to separete the informations"/>
            </div>

            <div className="personType">
              <p>Uma bem doida</p>
              <img src={Line2} alt="A white line to separete the informations"/>
            </div>

            <div className="inclusionDate">
              <p>Nenhuma</p>
              <img src={Line2} alt="A white line to separete the informations"/>
            </div>

            <div className="backOffice">
              <p>O que é isso?</p>
            </div>
          </div>

          <div className="secondColor">
            <div className="socialReason">
              <p>Nenhuma</p>
              <img src={Line2} alt="A white line to separete the informations"/>
            </div>

            <div className="uf">
              <p>PA</p>
              <img src={Line2} alt="A white line to separete the informations"/>
            </div>

            <div className="phoneNumber">
              <p>(91) 9 4002-8922</p>
              <img src={Line2} alt="A white line to separete the informations"/>
            </div>

            <div className="personType">
              <p>Uma bem doida</p>
              <img src={Line2} alt="A white line to separete the informations"/>
            </div>

            <div className="inclusionDate">
              <p>Nenhuma</p>
              <img src={Line2} alt="A white line to separete the informations"/>
            </div>

            <div className="backOffice">
              <p>O que é isso?</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
};

export default Search;
