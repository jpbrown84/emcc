import React, { useContext } from "react";
import stylingConfig from "src/stylingConfig";
// eslint-disable-next-line import/no-extraneous-dependencies
import css from "styled-jsx/css";

const styles = css`
  h1 {
    padding: 0;
    margin: 0;
    font-size: 34px;
    line-height: 1.04;
    overflow-wrap: break-word;
    word-wrap: break-word;
    hyphens: auto;
    color: ${stylingConfig.white}
  }
  p {
    padding: 10px 0;
    margin: 0;
    font-size: 18px;
    color: ${stylingConfig.white}
  }
`;

const Title = ({
  text,
  subText,
}: {
  text: string;
  subText?: string;
}) => {

  return (
    <div className="wrapper" data-testid="title">
      <h1 data-testid="title-title">{text}</h1>
      {subText && <p data-testid="title-subtitle">{subText}</p>}
      <style jsx>{styles}</style>
    </div>
  );
};

export default Title;
