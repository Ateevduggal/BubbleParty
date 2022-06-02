import React from "react";
import cross from "../images/cross.png";
import Dog from "../images/Dog.png";
import Glasses from "../images/Glasses.png";
import Bow from "../images/Bow.png";
import Sleepy from "../images/Sleepy.png";
import Fire from "../images/Fire.png";
import Trip from "../images/Trip.png";
import "../style/mini-games.css";

export const MiniGamesType = ({games, setGames}) => {
  const NoShow = () => {
    setGames(false);
  }
  return (
    <>
      <div className={games ? "screen hide" : "no-hide"}>
        <div className="bg-abstract">
          <div className="bg-white blue-shadow">
            <button className="welcome1-btn purple-shadow heading-btn">
              Mini Games Type
            </button>
            <button onClick={NoShow}>
            <img src={cross} alt="cross" className="cross-btn" />
            </button>
            <div className="rules-wrapper">
              <div className="rule4 rule mt-2">
                <div className="rule5 rule">
                  <div className="rule-descs">
                    <div className="rule-small"></div>
                  </div>
                  <div className="img-absolute rule-desc-1">
                    <p
                      className="img-absolute"
                      style={{
                        color: "black",
                        top: 4,
                        fontSize: "10px",
                        fontWeight: "bolder",
                      }}
                    >
                      Answer in the majority
                    </p>
                  </div>
                  <img
                    src={Dog}
                    alt="dog"
                    className="img-absolute dog"
                    style={{
                      left: "-70px",
                      bottom: "0px",
                    }}
                  />
                  <div
                    className="img-absolute "
                    style={{ left: "57px", top: "50px" }}
                  >
                    <p
                      className="img-absolute rule-desc-1"
                      style={{ color: "black" }}
                    >
                      Guess what happen next
                    </p>
                  </div>
                  <img
                    src={Glasses}
                    alt="glasses"
                    style={{ left: "195px", top: "55px" }}
                    className="img-absolute glasses"
                  />
                </div>
              </div>
              {/* new tile */}

              <div className="rule6 rule mt-2">
                <div className="rule7 rule">
                  <div className="text-center svg">
                    <svg
                      width="80px"
                      height="80px"
                      viewBox="0 0 59 59"
                      fill="none"
                    >
                      <path
                        d="M33.9524 10.6019L28.7143 2L24 11.3839L4.88095 6.69194L11.1667 25.4597L2 30.4123L11.1667 35.3649L6.19048 53.6114L24.7857 48.1374L30.2857 57L35 48.1374L54.381 52.8294L47.8333 34.0616L57 28.8483L47.8333 23.8957L52.8095 5.12796L33.9524 10.6019Z"
                        fill="white"
                        stroke="black"
                        strokeWidth="1.68116"
                      />
                    </svg>
                  </div>
                  <div id="svg" className="text-center">
                    <svg
                      width="60px"
                      height="60px"
                      viewBox="0 0 59 59"
                      fill="none"
                    >
                      <path
                        d="M33.9524 10.6019L28.7143 2L24 11.3839L4.88095 6.69194L11.1667 25.4597L2 30.4123L11.1667 35.3649L6.19048 53.6114L24.7857 48.1374L30.2857 57L35 48.1374L54.381 52.8294L47.8333 34.0616L57 28.8483L47.8333 23.8957L52.8095 5.12796L33.9524 10.6019Z"
                        fill="white"
                        stroke="black"
                        strokeWidth="1.68116"
                      />
                    </svg>
                  </div>

                  <div className="img-absolute rule-desc-1">
                    <p
                      className="img-absolute"
                      style={{
                        color: "black",
                        top: 4,
                        fontSize: "10px",
                        fontWeight: "bolder",
                      }}
                    >
                      Fast tap app games
                    </p>
                  </div>
                  <img
                    src={Bow}
                    alt="dog"
                    className="img-absolute dog"
                    style={{
                      left: "-70px",
                      bottom: "0px",
                    }}
                  />
                  <div
                    className="img-absolute "
                    style={{ left: "57px", top: "50px" }}
                  >
                    <p
                      className="img-absolute rule-desc-1"
                      style={{ color: "black" }}
                    >
                      Find something, quick!
                    </p>
                  </div>
                  <img
                    src={Sleepy}
                    alt="glasses"
                    style={{ left: "195px", top: "55px" }}
                    className="img-absolute glasses"
                  />
                </div>
              </div>

              {/* new tile */}

              <div className="rule8 rule">
                <div className="rule9 rule">
                  <div className="text-center svg1">
                    <svg
                      width="80"
                      height="69"
                      viewBox="0 0 70 49"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M55.2692 1H15.2212L1 25.0674L15.2212 47.6067H55.2692L69 25.0674L55.2692 1Z"
                        fill="white"
                        stroke="black"
                        strokeWidth="2.54545"
                      />
                    </svg>
                  </div>
                  <div id="svg1" className="text-center">
                    <svg
                      width="60"
                      height="59"
                      viewBox="0 0 70 49"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M55.2692 1H15.2212L1 25.0674L15.2212 47.6067H55.2692L69 25.0674L55.2692 1Z"
                        fill="white"
                        stroke="black"
                        strokeWidth="2.54545"
                      />
                    </svg>
                  </div>

                  <div className="img-absolute rule-desc-1">
                    <p
                      className="img-absolute"
                      style={{
                        color: "black",
                        top: 4,
                        fontSize: "10px",
                        fontWeight: "bolder",
                      }}
                    >
                      Do it for the laugh
                    </p>
                  </div>
                  <img
                    src={Fire}
                    alt="dog"
                    className="img-absolute dog"
                    style={{
                      left: "-70px",
                    }}
                  />
                  <div
                    className="img-absolute "
                    style={{ left: "57px", top: "50px" }}
                  >
                    <p
                      className="img-absolute rule-desc-1"
                      style={{ color: "black" }}
                    >
                      Find something, quick!
                    </p>
                  </div>
                  <img
                    src={Trip}
                    alt="glasses"
                    style={{ left: "195px", top: "45px" }}
                    className="img-absolute glasses"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MiniGamesType;
