import React from "react";
import "../Assets/css/Homecontent.scss";
import frame from "../Assets/images/Frame 151 (1).png";
import { AiFillStar } from 'react-icons/ai'

const HomeContent = () => {
  return (
    <div className="home__content">
      <h2>Inspiration for your next adventure</h2>
      {/* image items */}
      <div className="home__content-grid">
        <aside>
          <div className="image_cont">
            <img src={frame} alt="" />
          </div>
          <div className="text_content-grid">
            <p>Desert king</p>
            <p>1MBT per night</p>
            <p>2345km away</p>
            <p>available for 2weeks stay</p>
          </div>
          <span><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></span>
        </aside>
      </div>
      {/* image items end */}
    </div>
  );
};

export default HomeContent;
