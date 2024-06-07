import React, { useEffect, useState } from 'react';
import {
  ScreenWrapper,
  HomeContainer,
  HomeHeader,
  HomeTitle,
  HomeContent,
  HomeFooter,
  FooterImage,
} from './Home.styles';
import GlobalStyle from '../styles/GlobalStyles'; // Import the global styles
import imgTitle from '../assets/images/star-wars-title.png';
import imgFooter from '../assets/images/img-mark-footer.png';
import imgFooterMobile from '../assets/images/img-mark-change-footer.png';
import CardDefault from '../components/CardDefault/CardDefault';

const Home: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleSearch = (query: string) => {
    console.log('Search query:', query);
  };

  return (
    <>
      <GlobalStyle /> {/* Apply global styles */}
      <ScreenWrapper>
        <HomeContainer>
          <HomeHeader>
            <HomeTitle src={imgTitle} alt="Star Wars Title" />
          </HomeHeader>
          <HomeContent>
            <CardDefault onSearch={handleSearch} />
          </HomeContent>
        </HomeContainer>
        <HomeFooter>
          <FooterImage
            src={isMobile ? imgFooterMobile : imgFooter}
            alt="Footer Logo Mark"
          />
        </HomeFooter>
      </ScreenWrapper>
    </>
  );
};

export default Home;
