import React from "react";
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const MyTitle = styled`
  strong {
    font-size: 1.25em;
  }
  div {
    color: white;

    text-shadow: 0px 2px 5px white;
    font-weight: 100;
    letter-spacing: 7px;

    .main {
      font-size: 50px;
    }

    .text {
      font-size: 28px;
      letter-spacing: 1px;
    }
  }
`;

const Title = () => (
  <MyTitle>
    <div className="title">
      <div className="heading">
        <div className="main">
          Hi, I am
          <br />
          <span>
            <strong>Amin Mochtar Rosydi</strong>
          </span>
        </div>
        <div className="text">
          <Typewriter
            options={{
              strings: ["Web Developer", "Mobile Developer", "Teacher"],
              autoStart: true,
              loop: true,
              delay: 50
            }}
          />
        </div>
      </div>
    </div>
  </MyTitle>
);

export default Title;
