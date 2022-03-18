/* eslint-disable react/display-name */
import React, { forwardRef } from "react";

export const BUTTON_VARIANTS = {
  PRIMARY: "primary",
  NEUTRAL: "neutral",
  TRANSPARENT: "transparent",
  TRANSPARENT_TERTIARY: "transparent-tertiary",
  LINK: "link",
  LINK_TERTIARY: "link-tertiary",
  LINK_DESTRUCTIVE: "link-destructive",
  DESTRUCTIVE: "destructive",
};

const boxShadowSelector = {
  inset: "inset 3px 3px 3px rgba(255, 255, 255, 0.5), inset -3px -3px 3px rgba(0, 0, 0, 0.05)",
  standard: "5px 5px 10px #c8d0e7, -5px -5px 10px #ffffff;",
};

export const GemButton = forwardRef(
  ({ borderRadius, children, color, className = "", disabled, onClick, paddingProp, size, type = "standard", ...rest }, ref) => {
    const boxShadowProp = boxShadowSelector[type]
    return (
      <>
        <button
          className={`gem-button ${className}`}
          onClick={!disabled ? onClick : (e) => e.preventDefault()}
          ref={ref}
          type="button"
          {...rest}
        >
          {children}
        </button>
        <style jsx>
          {`
          button {
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            border-radius: ${borderRadius ? borderRadius : '10px'};
            padding: ${paddingProp ? paddingProp : '12px'};
            cursor: disabled ? not-allowed : pointer;
            white-space: nowrap;
            position: relative;
            margin: 0;
            width: auto;
            box-sizing: border-box;
            height: 32px;
            background: ${color ? color : '#E4EBF5'};
            box-shadow: ${boxShadowProp}
          }
          button:hover {
            box-shadow: ${type === "standard" ? boxShadowSelector.inset : boxShadowSelector.standard};
        }
          `}
        </style>
      </>
    );
  }
);
