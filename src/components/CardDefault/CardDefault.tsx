import React, { useState, useEffect } from 'react';
import './style.scss';
import imgCardLeft from '../../assets/images/mask-group-left.png';
import imgVetor from '../../assets/images/vetor-img.png';
import imgIconSeta from '../../assets/images/icon-seta.png';
import imgLupaFilter from '../../assets/images/lupa-filter.png';
import imgSpaceship from '../../assets/images/spaceship.png';
import { usePlanets } from '../../hooks/usePlanet';
import { usePlanetByName } from '../../hooks/usePlanetByName';
import PlanetModal from '../Modal/PlanetModal';

interface CardDefaultProps {
  onSearch: (query: string) => void;
}

interface Planet {
  name: string;
  climate: string;
  terrain: string;
  population: string;
  films: string[];
  residents: string[];
}

const CardDefault: React.FC<CardDefaultProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const [nameFilter, setNameFilter] = useState('');
  const [populationFilter, setPopulationFilter] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPlanet, setSelectedPlanet] = useState<Planet | null>(null);
  const [suggestion, setSuggestion] = useState('');

  const { data: planetsData, isLoading: isLoadingPlanets, isError: isErrorPlanets } = usePlanets();
  const { data: planetData, error: planetError, refetch: refetchPlanet } = usePlanetByName(query);

  useEffect(() => {
    if (planetData) {
      setSelectedPlanet(planetData);
    }
  }, [planetData]);

  useEffect(() => {
    if (query.length > 0 && planetsData) {
      const match = planetsData.results.find((planet: Planet) =>
        planet.name.toLowerCase().startsWith(query.toLowerCase())
      );
      if (match) {
        setSuggestion(match.name);
        setNameFilter(match.name);
        setPopulationFilter(match.population);
      } else {
        setSuggestion('');
        setNameFilter('');
        setPopulationFilter('');
      }
    } else {
      setSuggestion('');
      setNameFilter('');
      setPopulationFilter('');
    }
  }, [query, planetsData]);

  useEffect(() => {
    if (nameFilter && planetsData) {
      const match = planetsData.results.find((planet: Planet) => planet.name === nameFilter);
      if (match) {
        setQuery(match.name);
        setPopulationFilter(match.population);
      }
    }
  }, [nameFilter, planetsData]);

  useEffect(() => {
    if (populationFilter && planetsData) {
      const match = planetsData.results.find((planet: Planet) => planet.population === populationFilter);
      if (match) {
        setQuery(match.name);
        setNameFilter(match.name);
      }
    }
  }, [populationFilter, planetsData]);

  const handleSearch = () => {
    refetchPlanet();
    setModalIsOpen(true);
    onSearch(query);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <div className="card-default">
        <div className="card-left">
          <img src={imgCardLeft} alt="Example" className="card-image" />
        </div>
        <div className="card-right">
          <p>
            Discover all the information about Planets of the Star Wars Saga
          </p>
          <div className="input-wrapper">
            <input
              type="text"
              value={query}
              onChange={handleInputChange}
              placeholder="Enter the name of the planet"
              className="card-input"
            />
            {suggestion && suggestion.toLowerCase() !== query.toLowerCase() && (
              <div className="suggestion">
                {query}
                <span className="suggestion-rest">{suggestion.slice(query.length)}</span>
              </div>
            )}
          </div>
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
                onChange={(e) => setNameFilter(e.target.value)}
                className="filter-dropdown"
              >
                <option value="">Name</option>
                {planetsData?.results?.map((planet: Planet) => (
                  <option key={planet.name} value={planet.name}>
                    {planet.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="dropdown-wrapper">
              <img src={imgIconSeta} alt="Seta Icon" className="icon-seta" />
              <select
                value={populationFilter}
                onChange={(e) => setPopulationFilter(e.target.value)}
                className="filter-dropdown"
              >
                <option value="">Population</option>
                {planetsData?.results?.map((planet: Planet) => (
                  <option key={planet.population} value={planet.population}>
                    {planet.population}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <img src={imgSpaceship} alt="Spaceship" className="spaceship-icon" />
      </div>
      <PlanetModal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        planet={selectedPlanet}
      />
      {planetError && <p>Error: {planetError.message}</p>}
      {isErrorPlanets && <p>Error loading planets data</p>}
    </>
  );
};

export default CardDefault;
