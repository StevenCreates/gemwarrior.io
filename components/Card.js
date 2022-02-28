import React from "react";
import { Container } from "./Container";

export const Card = ({  height = "300px", width = "400px", children, padding, ...args }) => {
  return (
    <>
      <Container height={height} width={width} {...args} padding={padding}{...args}>
        {children}
      </Container>
    </>
  );
};
