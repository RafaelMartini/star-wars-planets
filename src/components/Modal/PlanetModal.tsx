import React from 'react';
import Modal from 'react-modal';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './style.scss';

import imgClimate from '../../assets/images/climate.png';
import imgTerrain from '../../assets/images/terrain.png';
import imgPopulation from '../../assets/images/population.png';
import imgResidents from '../../assets/images/residents.png';
import imgFilms from '../../assets/images/films.png';

interface PlanetModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  planet: any;
}

const planetImages: { [key: string]: string } = {
  Tatooine: 'https://cryptospro.com.br/planetas/planeta_0000_tatooine.png',
  Naboo: 'https://cryptospro.com.br/planetas/planeta_0001_naboo.png',
  Mustafar: 'https://cryptospro.com.br/planetas/planeta_0002_mustafar.png',
  Kashyyyk: 'https://cryptospro.com.br/planetas/planeta_0003_kashyyyk.png',
  Hoth: 'https://cryptospro.com.br/planetas/planeta_0004_hoth.png',
  Endor: 'https://cryptospro.com.br/planetas/planeta_0005_endor.png',
  Dagobah: 'https://cryptospro.com.br/planetas/planeta_0006_dagobah.png',
  Coruscant: 'https://cryptospro.com.br/planetas/planeta_0007_coruscant.png',
  Bespin: 'https://cryptospro.com.br/planetas/planeta_0008_bespin.png',
  Alderaan: 'https://cryptospro.com.br/planetas/planeta_0009_alderaan.png',
};

const PlanetModal: React.FC<PlanetModalProps> = ({ isOpen, onRequestClose, planet }) => {
  if (!planet) {
    return null;
  }

  const planetImage = planetImages[planet.name];

  return (
    <>
      <Modal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Planet Details"
        className="planet-modal"
        overlayClassName="planet-modal-overlay"
      >
        <div className="modal-content">
          <div className="modal-left">
            {planetImage && <LazyLoadImage src={planetImage} alt={planet.name} effect="blur" className="planet-image" />}
            <div className="planet-name-container">
              <span className="planet-label">Planet:</span>
              <h2 className="planet-name">{planet.name}</h2>
            </div>
          </div>
          <div className="modal-right">
            <div className="planet-info-row">
              <img src={imgClimate} alt="Climate Icon" className="info-icon" />
              <span className="planet-info-label">Climate:</span> {planet.climate}
            </div>
            <div className="planet-info-row">
              <img src={imgTerrain} alt="Terrain Icon" className="info-icon" />
              <span className="planet-info-label">Terrain:</span> {planet.terrain}
            </div>
            <div className="planet-info-row">
              <img src={imgPopulation} alt="Population Icon" className="info-icon" />
              <span className="planet-info-label">Population:</span> {planet.population}
            </div>
          </div>
        </div>
        <div className="planet-section">
          <h3 className="section-title">
            <img src={imgResidents} alt="Residents Icon" className="section-icon" />
            Residents:
          </h3>
          <div className="section-content">
            {planet.residents && planet.residents.length > 0 ? (
              planet.residents.map((resident: any, index: number) => (
                <span key={index} className="resident-name">
                  {resident.name}
                  {index < planet.residents.length - 1 ? ',' : '.'}
                </span>
              ))
            ) : (
              <span>No residents available.</span>
            )}
          </div>
        </div>
        <div className="planet-section">
          <h3 className="section-title">
            <img src={imgFilms} alt="Films Icon" className="section-icon" />
            Films ({planet.films.length}):
          </h3>
          <div className="section-content">
            {planet.films && planet.films.length > 0 ? (
              planet.films.map((film: any, index: number) => (
                <span key={index} className="film-title">
                  {film.title}
                  {index < planet.films.length - 1 ? ',' : '.'}
                </span>
              ))
            ) : (
              <span>No films available.</span>
            )}
          </div>
        </div>
      </Modal>
      {isOpen && <button onClick={onRequestClose} className="back-button">&lt; Voltar</button>}
    </>
  );
};

export default PlanetModal;
