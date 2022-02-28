import React from "react";

export const SymbolDisplay = ({ symbol }) => {
  return (
    <>
      <div className="symbol-container">
        <div className="symbol-container-inner">{symbol}</div>
      </div>
      <style jsx>{`
        .symbol-container {
          height: 100%;
          width: 100%;
          display: flex;
          padding: 1.5px;
          justify-content: center;
          font-size: 1rem;
          align-items: center;
          align-content: center;
          justify-content: center;
          justify-items: center;
          text-align: center;
          grid-row-start: 1;
          grid-column-start: 2;
          grid-row-end: 1;
          grid-column-end: 4;
          background: #e4ebf5;
          color: #404040;
          box-shadow: -4px -2px 4px 0px #f1f5fa, 4px 2px 6px 0px #b9c0d6;
          border-radius: 0 10px 0 0;
        }
        .symbol-container-inner {
          border-radius: 0 10px 0 0;
          width: 100%;
          height: 100%;
          margin: auto;
          display: flex;
          align-content: center;
          justify-content: center;
          padding-top: 6px;
          justify-items: center;
          font-weight: 450;
          box-shadow: inset 10px 10px 15px -10px #b9c0d6,
            inset -10px -10px 15px -10px #f1f5fa;
        }
      `}</style>
    </>
  );
};
