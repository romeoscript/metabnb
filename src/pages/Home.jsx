import React from "react";
import Footer from "../components/Footer";
import FooterHero from "../components/FooterHero";
import Hero from "../components/Hero";
import HomeContent from "../components/HomeContent";
import Wallet from "../components/wallet";

const Home = (props) => {

  return (
    <div>
      <Hero />
      <HomeContent />
      {props.modal &&<Wallet tap={props.ontlick} modal={props.modal}/>}
      <FooterHero />
      <Footer />
    </div>
  );
};

export default Home;
