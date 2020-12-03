import React from 'react';

import Logo from '../images/logo.svg';
import Line from '../images/line.svg';

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

      </div>
    </div>
  )
};

export default Search;
