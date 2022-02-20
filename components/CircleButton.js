import React from "react";

export const CircleButton = ({ size, shape, children }) => {
  return (
    <>
      <button className="button">{children}</button>
      <style jsx>{`
        .button {
          cursor: pointer;
          position: relative;
          background-color: transparent;
          border: none;
          outline: none;
          padding: 26px;
          width: 76px;
          z-index: 899;
          height: 76px;
          border-radius: 50%;
          display: block;
          transition: all 0.3s;
          box-shadow: 9px 9px 9px rgba(0, 0, 0, 0.06),
            -9px -9px 9px rgba(255, 255, 255, 0.6),
            inset 5px 5px 5px rgba(0, 0, 0, 0.07),
            inset -5px -5px 5px rgba(255, 255, 255, 0.7);
        }
        .button::before {
          content: "";
          position: absolute;
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background-color: #ff4980;
          top: 50%;
          left: 50%;
          margin: -35px 0 0 -35px;
          box-shadow: inset 3px 3px 3px rgba(255, 255, 255, 0.5),
            inset -3px -3px 3px rgba(0, 0, 0, 0.05);
        }
        .button:hover::before {
          box-shadow: inset 3px 3px 3px rgba(255, 255, 255, 0.35),
            inset -3px -3px 3px rgba(0, 0, 0, 0.035);
        }
        .button:active::before {
          box-shadow: inset 3px 3px 3px rgba(0, 0, 0, 0.05),
            inset -3px -3px 3px rgba(255, 255, 255, 0.5);
        }

      `}</style>
    </>
  );
};
