<<<<<<< HEAD
import React, { ChangeEvent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
=======
import React, { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios'
>>>>>>> 7f2441a7dc441c640c280899ad446d4692a950ad
import $ from 'jquery';

import api from '../services/api';

import Logo from '../images/logo.svg';
import Line from '../images/line.svg';
import Line2 from '../images/line_2.svg';

import '../styles/pages/search.css';

interface datas {
  id: number;
  razao_social: string;
  uf: string;
  telefone: number;
  tipo_de_pessoa: string;
  data_inclusao: number;
  status_backoffice: string;
<<<<<<< HEAD
  supervisao_prisma: string;
  promotor_prisma: string;
=======
};

interface supervisers {
  id: number;
  supervisao_prisma: string[];
>>>>>>> 7f2441a7dc441c640c280899ad446d4692a950ad
};

function Search() {
  const [data, setData] = useState<datas[]>([]);
<<<<<<< HEAD
  const [superviser, setSuperviser] = useState<string[]>([]);
  const [districtAttorney, setDistrictAttorney] = useState<string[]>([]);
=======
  const [superviserList, setSuperviserList] = useState<string[]>([]);
  const [id, setId] = useState<number[]>([])
>>>>>>> 7f2441a7dc441c640c280899ad446d4692a950ad

  const [superviserSelected, setSuperviserSelected] = useState('0');
  const [districtAttorneySelected, setDistrictAttorneySelected] = useState('0');

  useEffect(() => {
    api.get('conclude').then(response => {
      setData(response.data)
<<<<<<< HEAD
    });
  }, []);
  
  useEffect(()=> {
    api.get(`promoter?supervisor=${superviserSelected}`).then(response => {
      const districtAttorneyList = response.data.map((districtAttorney: any) => districtAttorney.promotor_prisma);
  
      setDistrictAttorney(districtAttorneyList);
    });
  }, [superviserSelected])

  useEffect(()=> {
    api.get(`supervisor?promotor=${districtAttorneySelected}`).then(response => {
      const superviserList = response.data.map((superviser: any) => superviser.supervisao_prisma);

      setSuperviser(superviserList);
    });
  }, [districtAttorneySelected]);

  function handleSuperviserOrDistrictAttorneyOption(event: ChangeEvent<HTMLSelectElement>) {
    const superviserOption = event.target.value;
    const districtAttorneyOption = event.target.value;

    setSuperviserSelected(superviserOption);
    setDistrictAttorneySelected(districtAttorneyOption);
  }
  
  function handleSubmit() {
    api.get(`conclude?supervisor=${superviserSelected}&promotor=${districtAttorneySelected}`)
      .then(response => {
        setData(response.data)
      }); 
  }
=======
    })

    api.get('supervisor').then(response => {
      const supervisores = response.data.map((supervisor: any) => supervisor.supervisao_prisma)
      setSuperviserList(supervisores)
    })
  }, []);

  function getOnlySupervisorOrPromoterData(supervisor, promotor) {
    api.get(`conclude?supervisor=${name}&promotor=${promotor}`).then(response => {
      setData(response.data)
    })
  }


  // useEffect(() => {
  //   api.get<supervisers[]>('conclude').then((response) => {
  //     const supervisersList = response.data.map((supervisers) => supervisers.supervisao_prisma);
  //     const idList = response.data.map((ids) => ids.id);

  //     setSuperviser(supervisersList);
  //     setId(idList);
  //   });
  // }, []);

  console.log(data)
  console.log(superviserList)
>>>>>>> 7f2441a7dc441c640c280899ad446d4692a950ad

  // $(function () {
  //   $('div.table').hide();

  //   $('button').on("click", function () {
  //     $(this).siblings('div.table').slideDown('slow');
  //   });
  // });

  return (
    < div id="search-page" >
      <img src={Logo} alt="Logo" className="logo" />

      <div className="search">
        <div className="inputs">
          <div className="input">
            <div className="superviserSelection">
              <label htmlFor="superviser">Supervisor</label><br />

<<<<<<< HEAD
              <select className="superviser" onChange={handleSuperviserOrDistrictAttorneyOption}>
                <option value="0"></option>

                {superviser.map((supervisers) => (
                  <option
                    key={supervisers}
                    value={supervisers}>{supervisers}
=======
              <select className="superviser">
                <option value=""></option>

                {superviserList.map((superviser) => (
                  <option
                    key={superviser}
                    value={superviser}>{superviser}
>>>>>>> 7f2441a7dc441c640c280899ad446d4692a950ad
                  </option>
                ))}

                <input type="hidden" name="superviser" />
              </select>
            </div>
          </div>

          <div className="input">
            <div className="districtAttorneySelection">
              <label htmlFor="districtAttorney">Promotor</label><br />

<<<<<<< HEAD
              <select className="districtAttorney" onChange={handleSuperviserOrDistrictAttorneyOption}>
                <option value="0"></option>

                {districtAttorney.map(districtAttorneys => {
                  return (
                    <option
                      key={districtAttorneys}
                      value={districtAttorneys}>{districtAttorneys}
                    </option>
                  )
                })}

=======
              <select className="districtAttorney">
>>>>>>> 7f2441a7dc441c640c280899ad446d4692a950ad
                <input type="hidden" name="districtAttorney" />
              </select>
            </div>
          </div>

          <div className="button">
            <button onClick={handleSubmit}>Buscar</button>


            <div className="table">
              <div className="text">
                <div className="textOne">
                  <h3>Razão social</h3>
                </div>
<<<<<<< HEAD

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

                {data.map((datas) => (
                  <Link to={`/results/${datas.id}`}>
                  <div className="firstColor" key={datas.id}>
                    <div className="socialReason">
                      <p>{datas.razao_social}</p>
                      <img src={Line2} alt="A white line to separete the informations" />
                    </div>

                    <div className="uf">
                      <p>{datas.uf}</p>
                      <img src={Line2} alt="A white line to separete the informations" />
                    </div>

                    <div className="phoneNumber">
                      <p>{datas.telefone}</p>
                      <img src={Line2} alt="A white line to separete the informations" />
                    </div>

                    <div className="personType">
                      <p>{datas.tipo_de_pessoa}</p>
                      <img src={Line2} alt="A white line to separete the informations" />
                    </div>

                    <div className="inclusionDate">
                      <p>{datas.data_inclusao}</p>
                      <img src={Line2} alt="A white line to separete the informations" />
                    </div>

                    <div className="backOffice">
                      <p>{datas.status_backoffice}</p>
                    </div>

                  </div>
                  </Link>
                  ))}
              </div>

=======

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

                  {data.map(item => (
                    <div className="tableRow" key={item.id}>
                      <div className="tableCel, razao_social">
                        <p>{item.razao_social}</p>
                        <img src={Line2} alt="A white line to separete the informations" />
                      </div>

                      <div className="tableCel, uf">
                        <p>{item.uf}</p>
                        <img src={Line2} alt="A white line to separete the informations" />
                      </div>

                      <div className="tableCel, telefone">
                        <p>{item.telefone}</p>
                        <img src={Line2} alt="A white line to separete the informations" />
                      </div>

                      <div className="tableCel, tipo_de_pessoa">
                        <p>{item.tipo_de_pessoa}</p>
                        <img src={Line2} alt="A white line to separete the informations" />
                      </div>

                      <div className="tableCel, data_inclusao">
                        <p>{item.data_inclusao}</p>
                        <img src={Line2} alt="A white line to separete the informations" />
                      </div>

                      <div className="tableCel, status_backoffice">
                        <p>{item.status_backoffice}</p>
                      </div>
                    </div>
                  ))}


                </div>
              </div>

>>>>>>> 7f2441a7dc441c640c280899ad446d4692a950ad
            </div>
          </div>
        </div>

        <img src={Line} alt="Line" className="blackLine" />

      </div>
    </div >
  )
};

export default Search;
