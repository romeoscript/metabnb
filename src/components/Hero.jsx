import React from "react";
import "../Assets/css/hero.scss";
import heroimage from '../Assets/images/Group 4028.png'
const Hero = () => {
  return (
    <div className="hero__section">
      <div className="hero__section-text">
        <h2>
          Rent a <span>Place</span> away from <span>Home</span> in the{" "}
          <span>Metaverse</span>
        </h2>
        <p>
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>
        <aside className="hero__section-input">
        <input type="text" placeholder="search for image"/>
        <button>search</button>
        </aside>
      </div>
      <div className="hero__section-image">
        <img src={heroimage} alt="" />
      </div>
    </div>
  );
};

export default Hero;
