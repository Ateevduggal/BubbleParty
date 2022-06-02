import React from "react";
import ninIcon from "../images/nin-icon.png";
import "../style/welcome1.css";
import cross from "../images/cross.png";
import orange from "../images/Bobble Orange.png";

import "../style/myTeam.css";
export const MyTeam = ({ bottom, setBottom }) => {
  const NoShow = () => {
    setBottom(false)
  }
  return (
    <>
      <div className={bottom ? " screen hide" : "no-hide"}>
        <div className="bg-abstract">
          <div className="bg-white orange-shadow">
            <button className="welcome1-btn orange-shadow heading-btn">
              Who’s on my team?
            </button>
            <button onClick={NoShow}>
            <img src={cross} alt="cross" className="cross-btn" />
            </button>
            <div className="players">
              <div className="ninjazzy">
                <p>Ninjazzy</p>
                <img src={ninIcon} alt="" />
              </div>
              <div className="player-btn you-btn">
                <p>Batman</p>
                <img className="sticker" src={orange} alt="" />
                <p className="you">You</p>
              </div>
              <button className="player-btn">Hamburgler</button>
              <button className="player-btn">Morty</button>
              <button className="player-btn">John Wick</button>
              <button className="player-btn">Kirby</button>
              <button className="player-btn">Zesus</button>
              <button className="player-btn">Kim possible</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
