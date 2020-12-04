import React from 'react';

import Logo from '../images/logo.svg';
import Line from '../images/line.svg';
import Line2 from '../images/line_2.svg';

import '../styles/pages/search.css';

function Search() {
  return (
    <div id="search-page">
      <img src={Logo} alt="Logo"/>

      <div className="search">
        <div className="inputs">
          <div className="superviserSelection">
            <label htmlFor="">Supervisor</label><br />
            
            <select className="superviser" disabled>
              <option value=""></option>
              <input type="hidden" name="superviser" />
            </select>
          </div>

          <div className="districtAttorneySelection">
            <label htmlFor="">Promotor</label><br />
            <select className="districtAttorney" disabled>
              <option value=""></option>
              <input type="hidden" name="districtAttorney" />
            </select>
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
