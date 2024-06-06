import React, { useEffect, useState } from 'react';
import './Home.scss';
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
    // Você pode adicionar a lógica de busca aqui
  };

  return (
    <>
      <div className="screen-wrapper">
        <div className="home-container">
          <header className="home-header">
            <img src={imgTitle} alt="Star Wars Title" className="home-title" />
          </header>
          <main className="home-content">
            <CardDefault onSearch={handleSearch} />
          </main>
        </div>
        <footer className="home-footer">
          <img
            src={isMobile ? imgFooterMobile : imgFooter}
            alt="Footer Logo Mark"
            className="footer-image"
          />
        </footer>
      </div>
    </>
  );
};

export default Home;
