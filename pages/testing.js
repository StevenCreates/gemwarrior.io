import React from "react";
import { Card } from "../components/Card";
import { Container } from "../components/Container";
import { CircleRank } from "../components/CircleRank";
import { GemButton } from "../components/GemButton";
import { ActionCardButton } from "../components/ActionCardButton";
import Hamburger from "../components/icons/Hamburger";
import { Button } from "../components/LinkButton";
import { SmallCard } from "../components/SmallCard";

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
  const handleClick = (e) => {
    console.log("hello");
  };

  return (
    <div className="rank-container">
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
