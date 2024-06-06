import React from 'react';
import Modal from 'react-modal';

interface PlanetModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  planet: any;
}

const PlanetModal: React.FC<PlanetModalProps> = ({
  isOpen,
  onRequestClose,
  planet,
}) => {
  if (!planet) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Planet Details"
    >
      <h2>{planet.name}</h2>
      <p>Climate: {planet.climate}</p>
      <p>Terrain: {planet.terrain}</p>
      <p>Population: {planet.population}</p>
      <p>Films: {planet.films.length}</p>
      <ul>
        {planet.films.map((film: string, index: number) => (
          <li key={index}>{film}</li>
        ))}
      </ul>
      <p>Residents: {planet.residents.length}</p>
      <ul>
        {planet.residents.map((resident: string, index: number) => (
          <li key={index}>{resident}</li>
        ))}
      </ul>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default PlanetModal;
