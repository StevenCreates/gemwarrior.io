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
          <Card padding="4px" height="86px" width="200px">
            <div className="coin-info">
              <div className="rank-container">
                <CircleRank coin={coin} />
              </div>
              <div>

              </div>
              <div className="third-column">
                <Container 
                height={"100%"} 
                padding="2px" 
                borderRadius={"0px 0px 10px 0px"}
                type="inset"
                >
                <div className="link-container">
                  {/* <Button type="inset" />
                  <Button type="inset" />
                  <Button type="inset" />
                  <Button type="inset" /> */}
                </div>
                </Container>
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
            grid-template-rows: repeat(2, 50%);
            grid-column-gap: 8px;
            grid-row-gap: 2px;
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
            grid-column-end: 2;
          }
          .link-container {
              height: 100%;
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              grid-column-gap: 4px;
          }
        `}
      </style>
    </>
  );
}
