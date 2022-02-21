import React from "react";
import { CmcIcon } from "./icons/CmcIcon";

const colorSelector = {
  blue: "#0071FF",
  red: "#FF515F",
  disabled: "greyf",
};

const shapeSelector = {
  brand: "50%",
  standard: "10px",
};

const boxShadowSelector = {
  inset: "inset 3px 3px 3px rgba(255, 255, 255, 0.5), inset -3px -3px 3px rgba(0, 0, 0, 0.05)",
  standard: "5px 5px 10px #c8d0e7, -5px -5px 10px #ffffff;",
};



export const Button = ({
  className,
  color = "#0071FF",
  icon = "cmc",
  onClick,
  ariaLabel,
  showIcon = true,
  borderRadius,
  type = "standard",
  ...args
}) => {
  const boxShadow = boxShadowSelector[type]
  return (
    <>
      <button
        aria-label={ariaLabel ? ariaLabel : "button"}
        onClick={onClick ? onClick : ""}
        className={`button ${className}`}
      >
        <CmcIcon className="icon" />
      </button>
      <style jsx>{`
        .button {
          cursor: pointer;
          background-color: ${color ? color : "#0071FF"};
          border: none;
          outline: none;
          padding: 4px;
          width: 24px;
          height: 24px;
          border-radius: ${borderRadius ? borderRadius : "10px"};
          display: block;
          transition: all 0.3s;
          box-shadow: ${boxShadow}
        }
        .button:hover {
          box-shadow: ${type === "standard" ? boxShadowSelector.inset : boxShadowSelector.standard};
        }
        .button:active {
          box-shadow: ${type === "standard" ? boxShadowSelector.inset : boxShadowSelector.standard};
        }
      `}</style>
    </>
  );
};
