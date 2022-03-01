import React, { useState } from "react";
import { Card } from "./Card";
import { Container } from "./Container";
import { CircleRank } from "./CircleRank";
import { LinkButton } from "./LinkButton";
import { SymbolDisplay } from "./SymbolDisplay";
import { GemButton } from "./GemButton";
import Hamburger from "./icons/Hamburger";
import Info from "./icons/Info";
import EmptyHeart from "./icons/EmptyHeart";
import Share from "./icons/Share";

export const SmallCard = ({ coin, ...rest }) => {
  // Coming soon to show drawer below card
  // const [show, setShow] = useState(false);

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
            <div className="action-container">
              <GemButton borderRadius={'0'} onClick={() => console.log(coin)}>
                <Info />
              </GemButton>
              <GemButton
                // color={"#331327"}
                borderRadius={'0'}
                onClick={() => console.log(coin)}
              >
                <EmptyHeart />
              </GemButton>
              <GemButton 
              borderRadius={'0 0 10px 0'}
              onClick={() => console.log(coin)}>
                <Share />
              </GemButton>
            </div>
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
          .rank-container {
            grid-row-start: 1;
            grid-column-start: 1;
            grid-row-end: 3;
            grid-column-end: 1;
          }
          .action-container {
            height: 100%;
            width: 100%;
            display: grid;
            grid-row-start: 2;
            grid-row-end: 2;
            grid-column-start: 2;
            grid-column-end: 4;
            align-items: center;
            grid-template-columns: repeat(3, 1fr);
            align-content: center;
            text-align: center;
            grid-column-gap: 6px;
          }
          .action-container-item {
            margin-left: 6px;
          }
        `}
      </style>
    </>
  );
};
