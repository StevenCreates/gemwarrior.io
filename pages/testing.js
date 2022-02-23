import React from "react";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { CircleRank } from "../components/CircleRank";
import { Button } from "../components/Button";

const coins = [
  {
    rank: 1,
    symbol: "SPROUT",
    icon: "",
  },
  {
    rank: 2,
    symbol: "BTH",
    icon: "",
  },
  {
    rank: 3,
    symbol: "MCRT",
    icon: "",
  },
];

export default function testing() {
  return (
    <>
      {coins.map((coin) => (
        <div className="rank-card" key={coin.rank}>
          <Card padding="8px" height="86px" width="200px">
            <div className="coin-info">
              <div className="rank-container">
                <CircleRank coin={coin} />
              </div>
              <div className="symbol-container">
                <div className="symbol-container-inner">{coin.symbol}</div>
              </div>
              <Container type="inset" borderRadius={"0"}>
                +10
              </Container>
              <Container type="inset" borderRadius={"0 0 10px 0"}>
                -
              </Container>
            </div>
          </Card>
        </div>
      ))}
      <style jsx>
        {`
          .rank-card {
            margin: 36px;
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
          .symbol-container {
            height: 100%;
            width: 100%;
            display: flex;
            padding: 6px;
            justify-content: center;
            font-size: 1rem;
            align-items: center;
            align-content: center;
            text-align: center;
            grid-row-start: 1;
            grid-column-start: 2;
            grid-row-end: 1;
            grid-column-end: 4;
            background: #272727;
            color: #e4ebf5;
            box-shadow: -4px -2px 4px 0px #ffffff, 4px 2px 6px 0px #4f5153;
            border-radius: 0 10px 0 0;
          }
          .symbol-container-inner {
            border-radius: 0 10px 0 0;
            width: 100%;
            height: 100%;
            box-shadow: inset 10px 10px 15px -10px #353535,
              inset -10px -10px 15px -10px #5f5f5f;
            paddint: 2px;
          }
          .symbol-container::before {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            box-shadow: 2px 2px 2px 0px #dfe4ea inset,
              -2px -2px 2px 0px #ffffff inset;
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
}
