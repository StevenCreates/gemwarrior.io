import React, { useState } from "react";
import { Card } from "./Card";
import { Container } from "./Container";
import { CircleRank } from "./CircleRank";
import { LinkButton } from "./LinkButton";
import { SymbolDisplay } from "./SymbolDisplay";
import { GemButton } from "./GemButton";
import Hamburger from "./icons/Hamburger"

export const SmallCard = ({ coin, ...rest }) => {
  const [show, setShow] = useState(false);
  const handleShowMore = () => {
    console.log(show);
  };
  const handleClick = () => {
    console.log(coin);
  };
  return (
    <>
      <div
        className="rank-card"
        {...rest}
        id={coin.rank + coin.symbol}
        key={coin.rank + coin.symbol}
      >
        <Card
          key={coin.rank + coin.symbol}
          padding="8px"
          height="86px"
          width="200px"
        >
          <div className="coin-info">
            <div className="rank-container">
              <CircleRank coin={coin} />
            </div>
            <SymbolDisplay symbol={coin.symbol} />
            {/* <LinkButton key={coin.rank + coin.symbol} borderRadius="5px" /> */}
            <GemButton onClick={() => console.log(coin)} >
              <Hamburger />
            </GemButton>
            <Container type="inset" borderRadius={"0"}>
              +10
            </Container>
          </div>
        </Card>
      </div>
      <style jsx>
        {`
          .rank-card {
            margin: 0 0 16px 16px;
            box-sizing: border-box;
          }
          .coin-info {
            height: 100%;
            padding-left: 16px;
            display: grid;
            align-items: center;
            align-content: center;
            text-align: center;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(2, 50%);
            grid-column-gap: 8px;
            grid-row-gap: 8px;
            box-sizing: border-box;
          }
          .third-column {
            height: 100%;
            display: grid;
            box-sizing: border-box;
            grid-row-start: 2;
            grid-column-start: 2;
            grid-row-end: 3;
            grid-column-end: 4;
          }
          .rank-container {
            grid-row-start: 1;
            grid-column-start: 1;
            grid-row-end: 3;
            grid-column-end: 1;
          }
          .link-container {
            height: 100%;
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-column-gap: 4px;
            align-items: center;
            align-content: center;
            text-align: center;
          }
        `}
      </style>
    </>
  );
};
