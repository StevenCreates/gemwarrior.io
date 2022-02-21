import React from "react";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { CircleRank } from "../components/CircleRank";

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
          <Card padding="4px" height="80px" width="200px">
            <div className="coin-info">
            <CircleRank coin={coin} />
            <div></div>
            <div className="third-column">
              <Container borderRadius={'0px 0px 10px 0px'} type="inset">s</Container>
              <Container borderRadius={'0px 0px 10px 0px'} type="inset">d</Container>
            </div>
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
            grid-template-rows: 1fr;
            grid-column-gap: 8px;
            grid-row-gap: 8px;
            box-sizing: border-box;
          }
          .third-column {
            height: 100%;
            display: grid;
            align-items: center;
            align-content: center;
            text-align: center;
            box-sizing: border-box;
            grid-row-gap: 4px;
            grid-template-rows: repeat(2, 1fr);
          }
        `}
      </style>
    </>
  );
}
