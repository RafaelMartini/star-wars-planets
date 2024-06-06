import React from 'react';
import './Home.scss';
import imgTitle from '../assets/images/star-wars-title.png';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <img src={imgTitle} alt="Star Wars Title" className="home-title" />
      </header>
      <main className="home-content"></main>
      <footer className="home-footer">
        <p>© 2023 Star Wars Planets. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
