import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import imgClimate from '../../assets/images/climate.png';
import imgTerrain from '../../assets/images/terrain.png';
import imgPopulation from '../../assets/images/population.png';
import imgResidents from '../../assets/images/residents.png';
import imgFilms from '../../assets/images/films.png';

import {
  StyledModal,
  Overlay,
  ModalContent,
  ModalLeft,
  PlanetImage,
  PlanetNameContainer,
  PlanetLabel,
  PlanetName,
  ModalRight,
  PlanetInfoRow,
  InfoIcon,
  PlanetInfoLabel,
  PlanetSection,
  SectionTitle,
  SectionIcon,
  SectionContent,
  ResidentName,
  FilmTitle,
  Divider,
  BackButton,
} from './PlanetModal.styles';

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

const PlanetModal: React.FC<PlanetModalProps> = ({
  isOpen,
  onRequestClose,
  planet,
}) => {
  if (!planet) {
    return null;
  }

  const planetImage = planetImages[planet.name];

  return (
    <>
      <StyledModal
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        contentLabel="Planet Details"
        style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' } }}
      >
        <ModalContent>
          <ModalLeft>
            {planetImage && (
              <PlanetImage src={planetImage} alt={planet.name} effect="blur" />
            )}
            <PlanetNameContainer>
              <PlanetLabel>Planet:</PlanetLabel>
              <PlanetName>{planet.name}</PlanetName>
            </PlanetNameContainer>
          </ModalLeft>
          <ModalRight>
            <PlanetInfoRow>
              <InfoIcon src={imgClimate} alt="Climate Icon" />
              <PlanetInfoLabel>Climate:</PlanetInfoLabel> {planet.climate}
            </PlanetInfoRow>
            <PlanetInfoRow>
              <InfoIcon src={imgTerrain} alt="Terrain Icon" />
              <PlanetInfoLabel>Terrain:</PlanetInfoLabel> {planet.terrain}
            </PlanetInfoRow>
            <PlanetInfoRow>
              <InfoIcon src={imgPopulation} alt="Population Icon" />
              <PlanetInfoLabel>Population:</PlanetInfoLabel> {planet.population}
            </PlanetInfoRow>
          </ModalRight>
        </ModalContent>
        <PlanetSection>
          <SectionTitle>
            <SectionIcon src={imgResidents} alt="Residents Icon" />
            Residents:
          </SectionTitle>
          <Divider />
          <SectionContent>
            {planet.residents && planet.residents.length > 0 ? (
              planet.residents.map((resident: any, index: number) => (
                <ResidentName key={index}>
                  {resident.name}
                  {index < planet.residents.length - 1 ? ',' : '.'}
                </ResidentName>
              ))
            ) : (
              <span>No residents available.</span>
            )}
          </SectionContent>
        </PlanetSection>
        <PlanetSection>
          <SectionTitle>
            <SectionIcon src={imgFilms} alt="Films Icon" />
            Films ({planet.films.length}):
          </SectionTitle>
          <Divider />
          <SectionContent>
            {planet.films && planet.films.length > 0 ? (
              planet.films.map((film: any, index: number) => (
                <FilmTitle key={index}>
                  {film.title}
                  {index < planet.films.length - 1 ? ',' : '.'}
                </FilmTitle>
              ))
            ) : (
              <span>No films available.</span>
            )}
          </SectionContent>
        </PlanetSection>
      </StyledModal>
      {isOpen && <BackButton onClick={onRequestClose}>&lt; Voltar</BackButton>}
    </>
  );
};

export default PlanetModal;
