import React, { useState } from "react";
import css from "styled-jsx/css";
import stylingConfig from "../../../../stylingConfig";

const styles = css`
  .wrapper {
    width: 290px;
    margin-top: 10px;
  }
  .inputWrapper {
    position: relative;
    width: 100%;
  }
  .label {
    margin-bottom: 8px;
    font-size: 13px;
    font-weight: 400;
    color: ${stylingConfig.white}
  }
  input {
    height: 50px;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 0 20px;
    width: 100%;
    margin: 0;
    border: 0;
    box-shadow: none;
    background-color: ${stylingConfig.hintOfRed};
    border: 1px solid ${stylingConfig.hintOfRed};
    transition: all 0.3s;
    font-size: 16px;
    font-weight: 700;
  }
  input:hover {
    border: 1px solid ${stylingConfig.pictonBlue};
  }
  input::placeholder,
  .wrapper.disabledinput::placeholder {
    opacity: 1; /* Firefox */
    color: ${stylingConfig.emperor} !important;
  }
  input:-ms-input-placeholder,
  .wrapper.disabledinput:-ms-input-placeholder {
    color: ${stylingConfig.emperor} !important;
  }
  input::-ms-input-placeholder,
  .wrapper.disabledinput::-ms-input-placeholder {
    color: ${stylingConfig.emperor} !important;
  }
  // Focus
  .wrapper.focused input {
    outline: 0;
  }
`;

const Input = ({
  value,
  label,
  onChange,
  onKeyUp
}: {
  value: string;
  label?: string;
  onChange?: (e: any) => void;
  onKeyUp?: (e:any) => void;
}) => {
  const [focused, setFocused] = useState(false);

  return (
    <div
      className={`wrapper ${focused ? "focused" : ""}`}
      data-testid="input-wrapper"
    >
      {label && (
        <div className="label" data-testid="input-label">
          {label}
        </div>
      )}
      <div className="inputWrapper">
        <input
          onKeyUp={onKeyUp}
          data-testid="input"
          value={value}
          onChange={onChange}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
        />
      </div>
      <style jsx>{styles}</style>
    </div>
  );
};

export default Input;
