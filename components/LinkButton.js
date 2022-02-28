import React from "react";
import { CmcIcon } from "./icons/CmcIcon";


const boxShadowSelector = {
  inset: "inset 3px 3px 3px rgba(255, 255, 255, 0.5), inset -3px -3px 3px rgba(0, 0, 0, 0.05)",
  standard: "5px 5px 10px #c8d0e7, -5px -5px 10px #ffffff;",
};



export const LinkButton = ({
  className,
  color = "#0071FF",
  icon = "cmc",
  onClick,
  ariaLabel,
  showIcon = true,
  borderRadius,
  type = "standard",
  ...rest
}) => {
  const boxShadow = boxShadowSelector[type]
  return (
    <>
      <a
        href="https://coinmarketcap.com/"
        className={`button ${className}`}
        {...rest}
      >
        <CmcIcon className="icon" />
      </a>
      <style jsx>{`
        a {
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
        a:hover {
          box-shadow: ${type === "standard" ? boxShadowSelector.inset : boxShadowSelector.standard};
        }
        a:active {
          box-shadow: ${type === "standard" ? boxShadowSelector.inset : boxShadowSelector.standard};
        }
      `}</style>
    </>
  );
};
