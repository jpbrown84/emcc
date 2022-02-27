import React, { useContext } from "react";
import stylingConfig from "src/stylingConfig";
// eslint-disable-next-line import/no-extraneous-dependencies
import css from "styled-jsx/css";

const styles = css`
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  .wrapper {
    display: flex;
  }
  .dot {
    height: 12px;
    width: 12px;
    border-radius: 12px;
    animation: pulse 1.5s infinite;
    background-color: ${stylingConfig.ebonyClay}
  }
  .dot:nth-child(2) {
    animation-delay: 0.5s;
  }
  .dot:nth-child(3) {
    animation-delay: 1s;
  }
  .center {
    margin: 0 6px;
  }
`;

const EllipsisLoader = () => {

  return (
    <div
      className="wrapper"
      data-testid="ellipsisLoader"
    >
      <div className="dot" />
      <div className="dot center" />
      <div className="dot" />
      <style jsx>{styles}</style>
    </div>
  );
};

export default EllipsisLoader;
