import React from "react";

export const ActionCardButton = ({
    disabled = false,
    onClick,
    ariaLabel,
    background,
    children,
    showIcon = true,
    borderRadius,
    boxShadow
}) => {
    const handleClick = () => {
        console.log('clicked')
    }
  return (
    <>
      <button
      aria-disabled={disabled}
        aria-label={ariaLabel ? ariaLabel : "button"}
        type="button"
        onClick={!disabled ? handleClick : e => e.preventDefault()}
        className={`action-button`}
      >
          test
       {/* {children} */}
      </button>
      <style jsx>{`
        button {
          cursor: pointer;
          border: none;
          outline: none;
          box-sizing: border-box;
          padding: 12px;
          cursor: pointer;
          display: flex;
          align-content: center;
          justify-content: center;
          width: auto;
          max-height: 100%;
          border-radius: ${borderRadius ? borderRadius : "10px"};
          background: ${background ? background : '#F2A663'};
          box-shadow: ${boxShadow ? boxShadow : '-4px -2px 4px 0px #f1f5fa, 4px 2px 6px 0px #b9c0d6;'};
        }
        button:hover {
            box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
        }
      `}</style> 
    </>
  );
};
