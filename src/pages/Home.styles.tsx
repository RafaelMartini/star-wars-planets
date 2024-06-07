import styled from 'styled-components';
import wallpaper from '../assets/images/wallpaper-star-wars.jpg';

export const ScreenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
`;

export const HomeContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-image: url(${wallpaper});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
`;

export const HomeHeader = styled.header`
  height: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 768px) {
    height: 25%;
  }
`;

export const HomeTitle = styled.img`
  width: 18rem;
  height: auto;
  margin-top: 1rem;
`;

export const HomeContent = styled.main`
  height: 62%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    height: 69%;
  }
`;

export const HomeFooter = styled.footer`
  height: 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;

export const FooterImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const Error = styled.div`
  color: red;
  margin-top: 10px;
`;
