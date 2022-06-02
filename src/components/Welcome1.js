import React, { useState } from "react";
import { Heading } from "./Heading";
import ninIcon from "../images/nin-icon.png";
import "../style/welcome1.css";
import { MyTeam } from "./MyTeam";
import { Scoreboard } from "./Scoreboard";
import { Rules } from "./Rules";
import {MiniGamesType} from "./MiniGamesType";

export const Welcome1 = () => {
  const [bottom, setBottom] = useState(false);
  const [top, setTop] = useState(false);
  const [navigate, setNavigate] = useState(false);
  const [games, setGames] = useState(false);

  const Team = (e) => {
    setBottom(!bottom);
  };
  const Score = (e) => {
    setTop(!top);
  };
  const Rule = (e) => {
    setNavigate(!navigate);
  };
  const Games = () => {
    setGames(!games);
  }

  return (
    <>
      <div className="screen-one">
        <div className="bg-abstract">
          <div className="bg-transparent">
            <div className="heading-one">
              <Heading />
            </div>
            <h3>Welcome to the party</h3>
            <button className="btn orange-btn">Batman</button>
            <button className="btn-nin">Ninjazzy</button>
            <div className="nin-icon-wrapper">
              <img src={ninIcon} alt="" />
            </div>
            <div className="welcome1-btns">
              <button className="welcome1-btn orange-shadow" onClick={Team}>
                Who’s on my team?
              </button>
              <button className="welcome1-btn green-shadow" onClick={Score}>
                Scoreboard
              </button>
              <button className="welcome1-btn blue-shadow" onClick={Rule}>
                Rules
              </button>
              <button
                className="welcome1-btn purple-shadow"
                onClick={Games}
              >
                Mini Game Types
              </button>
            </div>
          </div>
        </div>
      </div>
      <MyTeam bottom={bottom} setBottom={setBottom} />
      <Scoreboard top={top} setTop={setTop} />
      <Rules navigate={navigate} setNavigate={setNavigate} />
      <MiniGamesType games={games} setGames={setGames} />
    </>
  );
};
