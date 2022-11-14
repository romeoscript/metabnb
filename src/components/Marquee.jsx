import React from "react";
import "../Assets/css/mark.scss";
import mb from "../Assets/images/Group 59537.svg";
import meta from "../Assets/images/Group 4040.svg";
import opensea from "../Assets/images/Frame 4041.svg";
const Marquee = () => {
  return (
    <div className="marque">
      <aside>
        <img src={mb} alt="" />
      </aside>
      <aside>
        <img src={meta} alt="" />
      </aside>
      <aside>
        <img src={opensea} alt="" />
      </aside>
    </div>
  );
};

export default Marquee;
