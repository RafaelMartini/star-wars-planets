import styled from 'styled-components';
import Modal from 'react-modal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const StyledModal = styled(Modal)`
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  max-width: 600px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
  outline: none;
  margin-top: 8%;

  @media (max-width: 768px) {
    width: 80%;
    height: 55%;
    margin-top: 5rem;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent !important;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const ModalLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: normal;
    margin-left: 1rem;
  }
`;

export const PlanetImage = styled(LazyLoadImage)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const PlanetNameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PlanetLabel = styled.span`
  font-size: 14px;
  color: #555;
`;

export const PlanetName = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 24px;
  margin: 0;
`;

export const ModalRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
    margin-left: 8rem;
  }
`;

export const PlanetInfoRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const InfoIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const PlanetInfoLabel = styled.span`
  font-weight: bold;
  margin-right: 5px;
`;

export const PlanetSection = styled.div`
  background: #f4f4f4;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

export const SectionTitle = styled.h3`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const SectionIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

export const SectionContent = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ResidentName = styled.span`
  margin-right: 10px;
  font-size: 14px;
`;

export const FilmTitle = styled.span`
  margin-right: 10px;
  font-size: 14px;
`;

export const Divider = styled.div`
  width: calc(100% - 10px);
  height: 1px;
  background-color: #ccc;
  margin: 10px auto;
`;

export const BackButton = styled.button`
  display: block;
  position: absolute;
  bottom: 6.5rem;
  right: 40rem;
  padding: 10px 20px;
  background: none;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  text-decoration: none;

  @media (max-width: 768px) {
    bottom: 6rem;
    right: 2rem;
    font-size: 14px;
  }

  &:hover {
    color: #ccc;
    cursor: pointer;
  }
`;
