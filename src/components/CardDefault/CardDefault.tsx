import React, { useState } from 'react';
import './style.scss';
import imgCardLeft from '../../assets/images/mask-group-left.png';
import imgVetor from '../../assets/images/vetor-img.png';
import imgIconSeta from '../../assets/images/icon-seta.png';
import imgLupaFilter from '../../assets/images/lupa-filter.png';
import imgSpaceship from '../../assets/images/spaceship.png';

interface CardDefaultProps {
  onSearch: (query: string) => void;
}

const CardDefault: React.FC<CardDefaultProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [populationFilter, setPopulationFilter] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="card-default">
      <div className="card-left">
        <img src={imgCardLeft} alt="Example" className="card-image" />
      </div>
      <div className="card-right">
        <p>Discover all the information about Planets of the Star Wars Saga</p>
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Enter the name of the planet"
          className="card-input"
        />
        <button onClick={handleSearch} className="card-button">
          <img src={imgLupaFilter} alt="Lupa Icon" className="lupa-icon" />
          Search
        </button>
        <div className="filter-container">
          <img src={imgVetor} alt="Line" className="line-image" />
          <div className="dropdown-wrapper">
            <img src={imgIconSeta} alt="Seta Icon" className="icon-seta" />
            <select
              value={nameFilter}
              onChange={e => setNameFilter(e.target.value)}
              className="filter-dropdown"
            >
              <option value="">Name</option>
            </select>
          </div>
          <div className="dropdown-wrapper">
            <img src={imgIconSeta} alt="Seta Icon" className="icon-seta" />
            <select
              value={populationFilter}
              onChange={e => setPopulationFilter(e.target.value)}
              className="filter-dropdown"
            >
              <option value="">Population</option>
            </select>
          </div>
        </div>
      </div>
      <img src={imgSpaceship} alt="Spaceship" className="spaceship-icon" />
    </div>
  );
};

export default CardDefault;
