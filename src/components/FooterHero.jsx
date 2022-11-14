import React from "react";
import "../Assets/css/FooterHero.scss";
import footerhero from '../Assets/images/Frame 59546 (1).png'

const FooterHero = () => {
  return (
    <div className="footer__hero">
      <div className="footer__hero-text">
        <h2>Metabnb NFTs</h2>
        <p>
          Discover our NFT gift cards collection. Loyal customers gets amazing
          gift cards which are traded as NFTs. These NFTs gives our cutomer
          access to loads of our exclusive services.
        </p>
        <button>Learn more</button>
      </div>
      <div className="footer__hero-image">
        <img src={footerhero} alt="" />
      </div>
    </div>
  );
};

export default FooterHero;
