import React from 'react';
import './Home.css';

const Home = () => {
  const handleClick = () => {
    window.open('https://dexscreener.com/solana/g3tbrxolvzbptw2zeicpcbadgfun6funztmxspamh6gg', '_blank'); // Opens the trading widget in a new tab
  };

  return (
    <div id="home" className="home">
      <div className="text-container">
        <h1>Welcome to UCIT.Shop</h1>
        <p>Welcome to UCIT.Shop, Home to Chef PePe & your ultimate destination for exclusive NFTs and meme coins on the Solana blockchain. Dive into a world where digital art meets functionality, and secure your piece of the digital future with us.</p>
        <p>Chef Pepe is now available on MOONSHOT!!</p>
        <button onClick={handleClick}>Buy Chef Pepe Today!!</button>
      </div>
      <img src="/images/Home.png" alt="Chef Pepe" className="logo" />
    </div>
  );
};

export default Home;