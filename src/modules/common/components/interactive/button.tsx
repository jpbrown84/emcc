import React, { useState, useContext } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import css from "styled-jsx/css";
import stylingConfig from "../../../../stylingConfig";
import EllipsisLoader from "./ellipsisLoader";

const styles = css`
  .wrapper {
    display: block;
    height: 50px;
    box-sizing: border-box;
    font-size: 15px;
    line-height: 18px;
    font-weight: 700;
    text-transform: uppercase;
    border: 0;
    outline: 0;
    border-radius: 5px;
    padding: 0 20px;
    transition: all 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    width: 290px;
    background-color: ${stylingConfig.kournikova};
    box-sizing: border-box;
  }
  .wrapper.hovered {
    transform: translateY(-5px);
  }
  .wrapper.hyper {
    width: initial;
    height: initial;
    padding: 0;
    font-size: 12px;
    color: ${stylingConfig.pictonBlue};
    background-color: transparent;
  }
  .wrapper.hyper.hovered {
    transform: none;
    text-decoration: underline;
  }
  .buttonLabel {
    position: relative;
    white-space: nowrap;
    font-weight: 700;
  }
  .focusOutline {
    position: absolute;
    width: calc(100% + 8px);
    height: calc(100% + 8px);
    top: -4px;
    left: -4px;
    border-radius: 9px;
    opacity: 1;
    transition: opacity 0.3s;
    box-sizing: border-box;
  }
  .focusUnderline {
    width: 100%;
    height: 1px;
    opacity: 1;
    transition: opacity 0.3s;
    position: absolute;
    left: 0;
  }
  .invisible {
    opacity: 0;
  }
  .loader {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .wrapper.loading {
    cursor: initial;
  }
`;

const Button = ({
  children,
  purpose = "primary",
  onClick,
  disabled = false,
  loading = false,
}: {
  children: any;
  purpose?: "primary" | "hyper";
  onClick: () => void;
  disabled?: boolean;
  loading?: boolean;
}) => {
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);

  return (
    <button
      type="button"
      data-testid="button"
      className={`wrapper ${purpose} ${disabled ? "disabled" : ""} ${
        focused ? "focused" : ""
      } ${hovered ? "hovered" : ""} ${
        loading ? "loading" : ""
      }`}
      onClick={onClick}
      disabled={disabled || loading}
      onMouseOver={() => {
        setHovered(true);
      }}
      onMouseOut={() => {
        setHovered(false);
      }}
      onFocus={() => {
        setFocused(true);
      }}
      onBlur={() => {
        setFocused(false);
      }}
    >
      {loading &&
        (purpose === "primary") &&
        !disabled && (
          <div className="loader" data-testid="button-loader">
            <EllipsisLoader />
          </div>
        )}
      {purpose !== "hyper" && (
        <div className={`focusOutline ${!focused ? "invisible" : ""}`} />
      )}

      <span
        data-testid="button-label"
        className={`buttonLabel ${
          loading && !disabled && !(purpose === "hyper") ? "invisible" : ""
        }`}
      >
        {children}
        {purpose === "hyper" && (
          <div
            data-testid="button-focusUnderline"
            className={`focusUnderline ${!focused ? "invisible" : ""}`}
          />
        )}
      </span>
      <style jsx>{styles}</style>
    </button>
  );
};

export default Button;
