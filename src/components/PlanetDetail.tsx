import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PlanetDetails.scss';

interface PlanetDetailsProps {
  planet: any;
}

const PlanetDetails: React.FC<PlanetDetailsProps> = ({ planet }) => {
  const [planetName, setPlanetName] = useState(planet.name);
  const [films, setFilms] = useState<string[]>([]);
  const [residents, setResidents] = useState<string[]>([]);

  useEffect(() => {
    const fetchFilms = async () => {
      const filmTitles = await Promise.all(
        planet.films.map((film: string) =>
          axios.get(film).then(res => res.data.title),
        ),
      );
      setFilms(filmTitles);
    };

    const fetchResidents = async () => {
      const residentNames = await Promise.all(
        planet.residents.map((resident: string) =>
          axios.get(resident).then(res => res.data.name),
        ),
      );
      setResidents(residentNames);
    };

    fetchFilms();
    fetchResidents();
  }, [planet]);

  return (
    <div className="details-container">
      <img
        src={`https://cryptospro.com.br/planetas/planeta_000${planet.id}_${planet.name.toLowerCase()}.png`}
        alt={planet.name}
        className="planet-image"
      />
      <h1
        contentEditable
        suppressContentEditableWarning
        onBlur={e => setPlanetName(e.target.innerText)}
        className="editable-name"
      >
        {planetName}
      </h1>
      <p>
        <strong>Climate:</strong> {planet.climate}
      </p>
      <p>
        <strong>Terrain:</strong> {planet.terrain}
      </p>
      <p>
        <strong>Population:</strong> {planet.population}
      </p>
      <p>
        <strong>Films:</strong> {films.join(', ')}
      </p>
      <p>
        <strong>Residents:</strong> {residents.join(', ')}
      </p>
    </div>
  );
};

export default PlanetDetails;
