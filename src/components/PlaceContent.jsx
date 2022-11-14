import React from "react";
import "../Assets/css/Homecontent.scss";

import { AiFillStar } from "react-icons/ai";
import datas from './data'



const PlaceContent = (props) => {
    console.log(props.ontlick)
  return (
    <div className="home__content">
      {/* image items */}
     
      <div className="home__content-grid">
        {datas.map(data =>{
            return(
                <aside key={data.id}>
                <div className="image_cont">
                  <img src={data.image} alt="" />
                </div>
                <div className="text_content-grid">
                  <span>
                    <p>{data.text}</p>
                    <p> <strong>{data.ptext}</strong></p>
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
            )
        })}
       
      </div>
      {/* image items end */}
    </div>
  );
};

export default PlaceContent;
