/* eslint-disable react/display-name */
import Link from "next/link";
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

export const GemButton = forwardRef(
  ({ children, className = "", disabled, onClick, size, ...rest }, ref) => {
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
        <style>
          
        </style>
      </>
    );
  }
);
