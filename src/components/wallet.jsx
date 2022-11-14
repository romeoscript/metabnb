import React from "react";
import "../Assets/css/modal.scss";
import metamask from "../Assets/images/image 66.png";
import walletconnet from "../Assets/images/image 69.png";
import { SlArrowRight } from "react-icons/sl";
import { AiOutlineClose } from "react-icons/ai";

const Wallet = (props) => {
 
  return (
    <div className="backdrop">
      <div className="modal">
        <div className="tag">
          <p>Connect Wallet</p>{" "}
          <span onClick={props.tap}>
            <AiOutlineClose />
          </span>
        </div>
        <div className="wallet_container">
          <span>Choose your preferred wallet:</span>
          <div className="aside">
            <span>
              <img src={metamask} alt="" />
              <p>Metamask</p>
            </span>
            <SlArrowRight />
          </div>
          <div className="aside">
            <span>
              <img src={walletconnet} alt="" />
              <p>WalletConnect</p>
            </span>
            <SlArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
