import React from "react";
import { SmallCard } from "../components/SmallCard";
// import { Button } from "thor-components";

const coins = [
  {
    rank: 1,
    symbol: "SPROUT",
    icon: "",
  },
  {
    rank: 2,
    symbol: "ZINU",
    icon: "",
  },
  {
    rank: 3,
    symbol: "BTH",
    icon: "",
  },
];

export default function testing() {


  return (
    <div className="rank-container">
     {/* <Button size="small">Button</Button> */}
      {coins.map((coin, index) => {
        return (
          <div key={`${coin.symbol}-${index}`}>
            <SmallCard coin={coin} key={`${coin.symbol}-${index}`}/> 
          </div>
        );
      })}
      <style jsx>{`
        .rank-container {
          display: flex;
          margin-top: 24px;
        }
      `}</style>
    </div>
  );
}
