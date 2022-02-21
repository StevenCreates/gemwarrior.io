import React from "react";

export const Container = ({
  type,
  children,
  args,
  height,
  width,
  padding,
  className,
  borderRadius,
}) => {
  return (
    <>
      <div
        className={`${type === "inset" ? "inset-container" : "container"} ${className}`}
        {...args}
      >
        {children}
      </div>
      <style jsx>{`
        .container {
          background: #E4EBF5;
          border-radius: ${borderRadius ? borderRadius : '10px'};
          box-sizing: border-box;
          box-shadow: 5px 5px 10px #c8d0e7, -5px -5px 10px #ffffff;
          height: ${height};
          padding: ${padding};
          width: ${width};
        }
        .inset-container {
          background: #E4EBF5;
          border-radius: ${borderRadius ? borderRadius : '10px'};
          box-sizing: border-box;
          box-shadow: inset 0.2rem 0.2rem 0.5rem #c8d0e7,
            inset -0.2rem -0.2rem 0.5rem #ffffff;
          height: ${height ? height : '100%'};
          padding: ${padding};
          width: ${width};
        }
      `}</style>
    </>
  );
};
