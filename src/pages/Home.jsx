import React from "react";
import Footer from "../components/Footer";
import FooterHero from "../components/FooterHero";
import Hero from "../components/Hero";
import HomeContent from "../components/HomeContent";
import Marquee from "../components/Marquee";
import Wallet from "../components/wallet";

const Home = (props) => {

  return (
    <div>
      <div className="wrapper">
      <Hero  />
      </div>
      <Marquee/>
      <HomeContent />
      {props.modal &&<Wallet tap={props.ontlick} modal={props.modal}/>}
      <FooterHero />
      <Footer />
    </div>
  );
};

export default Home;
