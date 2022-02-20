import React from "react";
import { Container } from "./Container";

export const Card = ({ args, height = "300px", width = "400px", children, padding }) => {
  return (
    <>
      <Container height={height} width={width} {...args} padding={padding}>
        {children}
      </Container>
    </>
  );
};
