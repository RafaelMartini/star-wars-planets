import React, { useState, useEffect } from 'react';
import imgCardLeft from '../../assets/images/mask-group-left.png';
import imgVetor from '../../assets/images/vetor-img.png';
import imgIconSeta from '../../assets/images/icon-seta.png';
import imgLupaFilter from '../../assets/images/lupa-filter.png';
import imgSpaceship from '../../assets/images/spaceship.png';
import { usePlanets } from '../../hooks/usePlanet';
import { usePlanetByName } from '../../hooks/usePlanetByName';
import PlanetModal from '../Modal/PlanetModal';
import {
  CardDefaultContainer,
  CardLeft,
  CardImage,
  SpaceshipIcon,
  CardRight,
  CardText,
  CardInput,
  CardButton,
  LupaIcon,
  FilterContainer,
  LineImage,
  DropdownWrapper,
  IconSeta,
  TextFilter,
  FilterDropdown,
} from './CardDefault.styles';

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
  const [isCardVisible, setIsCardVisible] = useState(true);

  const { data: planetsData, isError: isErrorPlanets } = usePlanets();
  const {
    data: planetData,
    error: planetError,
    refetch: refetchPlanet,
  } = usePlanetByName(query);

  useEffect(() => {
    if (planetData) {
      setSelectedPlanet(planetData);
    }
  }, [planetData]);

  useEffect(() => {
    if (query.length > 0 && planetsData) {
      const match = planetsData.results.find((planet: Planet) =>
        planet.name.toLowerCase().startsWith(query.toLowerCase()),
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
      const match = planetsData.results.find(
        (planet: Planet) => planet.name === nameFilter,
      );
      if (match) {
        setQuery(match.name);
        setPopulationFilter(match.population);
      }
    }
  }, [nameFilter, planetsData]);

  useEffect(() => {
    if (populationFilter && planetsData) {
      const match = planetsData.results.find(
        (planet: Planet) => planet.population === populationFilter,
      );
      if (match) {
        setQuery(match.name);
        setNameFilter(match.name);
      }
    }
  }, [populationFilter, planetsData]);

  const handleSearch = () => {
    refetchPlanet();
    setModalIsOpen(true);
    setIsCardVisible(false);
    onSearch(query);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <>
      {isCardVisible && (
        <CardDefaultContainer>
          <CardLeft>
            <CardImage src={imgCardLeft} alt="Example" />
          </CardLeft>
          <CardRight>
            <CardText>
              Discover all the information about Planets of the Star Wars Saga
            </CardText>
            <div>
              <CardInput
                type="text"
                value={query}
                onChange={handleInputChange}
                placeholder="Enter the name of the planet"
              />
              {suggestion &&
                suggestion.toLowerCase() !== query.toLowerCase() && (
                  <div>
                    {query}
                    <span>{suggestion.slice(query.length)}</span>
                  </div>
                )}
            </div>
            <CardButton onClick={handleSearch}>
              <LupaIcon src={imgLupaFilter} alt="Lupa Icon" />
              Search
            </CardButton>
            <FilterContainer>
              <LineImage src={imgVetor} alt="Line" />
              <TextFilter>Filter:</TextFilter>
              <DropdownWrapper>
                <IconSeta src={imgIconSeta} alt="Seta Icon" />
                <FilterDropdown
                  value={nameFilter}
                  onChange={e => setNameFilter(e.target.value)}
                >
                  <option value="">Name</option>
                  {planetsData?.results?.map((planet: Planet) => (
                    <option key={planet.name} value={planet.name}>
                      {planet.name}
                    </option>
                  ))}
                </FilterDropdown>
              </DropdownWrapper>
              <DropdownWrapper>
                <IconSeta src={imgIconSeta} alt="Seta Icon" />
                <FilterDropdown
                  value={populationFilter}
                  onChange={e => setPopulationFilter(e.target.value)}
                >
                  <option value="">Population</option>
                  {planetsData?.results?.map((planet: Planet) => (
                    <option key={planet.population} value={planet.population}>
                      {planet.population}
                    </option>
                  ))}
                </FilterDropdown>
              </DropdownWrapper>
            </FilterContainer>
          </CardRight>
          <SpaceshipIcon src={imgSpaceship} alt="Spaceship" />
        </CardDefaultContainer>
      )}
      <PlanetModal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
          setIsCardVisible(true);
        }}
        planet={selectedPlanet}
      />
      {planetError && <p>Error: {planetError.message}</p>}
      {isErrorPlanets && <p>Error loading planets data</p>}
    </>
  );
};

export default CardDefault;
