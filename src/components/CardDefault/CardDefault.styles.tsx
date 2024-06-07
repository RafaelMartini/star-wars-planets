import styled from 'styled-components';

export const CardDefaultContainer = styled.div`
  display: flex;
  width: 33.33%;
  margin: 0 auto;
  //   border-radius: 8px;
  overflow: visible;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 82%;
    margin: 0 auto;
    padding: 10px;
    height: 78%;
  }
`;

export const CardLeft = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    border-radius: 8px 8px 0 0;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px 0 0 8px;

  @media (max-width: 768px) {
    border-radius: 8px 8px 0 0;
    height: 200px;
    width: 100%;
  }
`;

export const SpaceshipIcon = styled.img`
  position: absolute;
  bottom: -80px;
  left: -5rem;
  width: 16rem;

  @media (max-width: 768px) {
    bottom: 13rem;
    left: -5rem;
    transform: translate(50%, 50%);
    width: 20rem;
  }
`;

export const CardRight = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 11px;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 0 8px 8px 0;
  color: white;
  text-align: center;

  @media (max-width: 768px) {
    border-radius: 0 0 8px 8px;
    padding: 8px;
  }
`;

export const CardText = styled.p`
  font-size: 18px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 15px;
  }
`;

export const CardInput = styled.input`
  width: 92.5%;
  height: 26px;
  padding: 10px;
  font-size: 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
  text-align: center;

  @media (max-width: 768px) {
    width: 94%;
    height: 26px;
    padding: 8px;
    font-size: 14px;
    margin-bottom: 8px;
  }
`;

export const CardButton = styled.button`
  display: flex;
  height: 44px;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 12px;
  background-color: red;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 10px;

  &:hover {
    background-color: darkred;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    height: 44px;
    font-size: 14px;
    margin-bottom: 8px;
  }
`;

export const LupaIcon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;

  @media (max-width: 768px) {
    width: 16px;
    height: 16px;
    margin-right: 5px;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    margin-bottom: 2rem;
    margin-top: 2rem;
    margin-left: 3rem;
  }
`;

export const LineImage = styled.img`
  width: 1rem;
  height: auto;
  margin-right: 10px;

  @media (max-width: 768px) {
    width: 0.8rem;
    margin-right: 5px;
  }
`;

export const DropdownWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;

  @media (max-width: 768px) {
    margin-right: 5px;
  }
`;

export const IconSeta = styled.img`
  margin-right: 5px;
`;

export const TextFilter = styled.div`
  font-family: 'Lato', sans-serif;
  font-weight: 900;
  font-size: 14px;
  margin-right: 1rem;
`;

export const FilterDropdown = styled.select`
  padding: 0;
  font-size: 12px;
  border: none;
  background: none;
  color: white;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;

  @media (max-width: 768px) {
    font-size: 14px;
  }

  & option {
    color: black;
    background: white;
  }
`;
