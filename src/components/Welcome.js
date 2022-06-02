import React, { useState } from "react";
import blue from "../images/Bobble Blue.png";
import greem from "../images/Bobble Green.png";
import orange from "../images/Bobble Orange.png";
import purple from "../images/Bobble Purple.png";
import { Heading } from "./Heading";
export const Welcome = () => {
  const [color, setColor] = useState(false);
  const [size, setSize] = useState(false);
  const [ball, setBall] = useState(false);
  const [bgColor, setBgColor] = useState(false);
  const Color = () => {
    setColor(!color);
  };
  const Size = () => {
    setSize(!size);
  };
  const Ball = () => {
    setBall(!ball);
  };
  const BgColor = () => {
    setBgColor(!bgColor);
  };

  return (
    <div className="screen-one">
      <div className="bg-abstract">
        <div className="bg-transparent">
          <div className="heading-one">
            <Heading />
          </div>
          <h3>Welcome to the party</h3>
          <button className="btn">Batman</button>
          <div className="desc">
            <div className="desc1">
              <p>Want to be particular time?</p>
              <p>Go ahead and click on </p>
              <p>the Bobble color you like</p>
            </div>
            <div className="desc2">
              <p>No guarantees you will be on </p>
              <p>that team but it helps. You will be</p>
              <p>assigned when the game starts</p>
            </div>
          </div>
          <div className="bobbles">
            <buton
              className="bob"
              style={{ backgroundColor: color ? "#31aee4" : "transparent" }}
            >
              <a onClick={Color}>
                <img src={greem} alt="" />
              </a>
            </buton>
            <buton
              className="bob"
              style={{ backgroundColor: size ? "#31aee4" : "transparent" }}
            >
              <a onClick={Size}>
                <img src={orange} alt="" />
              </a>
            </buton>
            <buton
              className="bob"
              style={{ backgroundColor: ball ? "#31aee4" : "transparent" }}
            >
              <a onClick={Ball}>
                <img src={blue} alt="" />
              </a>
            </buton>
            <buton
              className="bob"
              style={{ backgroundColor: bgColor ? "#31aee4" : "transparent" }}
            >
              <a onClick={BgColor}>
                <img src={purple} alt="" />
              </a>
            </buton>
          </div>
        </div>
      </div>
    </div>
  );
};
