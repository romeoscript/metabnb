import React from "react";
import "../Assets/css/Homecontent.scss";
import frame from "../Assets/images/Frame 151 (1).png";
import { AiFillStar } from "react-icons/ai";

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
            <span>
              <p>Desert king</p>
              <p> <strong>1MBT per night</strong></p>
            </span>
            <span>
              <p>2345km away</p>
              <p>available for 2weeks stay</p>
            </span>
          </div>
          <span className="span__icons">
            <AiFillStar className="aicons" />
            <AiFillStar className="aicons"/>
            <AiFillStar className="aicons"/>
            <AiFillStar className="aicons"/>
            <AiFillStar className="aicons"/>
          </span>
        </aside>
      </div>
      {/* image items end */}
    </div>
  );
};

export default HomeContent;
