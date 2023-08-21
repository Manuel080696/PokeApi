import { useState } from "react";

import Atropos from "atropos/react";

export const CardElement = ({ card }) => {
  const [rotatex, setRotateX] = useState(0);
  const [rotatey, setRotateY] = useState(0);

  console.log(rotatex, rotatey);

  const rotator = {};

  const hanldeMouseMove = (x, y) => {
    setRotateX(x);
    setRotateY(y);
  };

  return (
    <li key={card.id}>
      <Atropos
        className={`my-atropos`}
        onRotate={(x, y) => hanldeMouseMove(x, y)}
      >
        {/* <img
                src="https:tcg.pokemon.com/assets/img/global/tcg-card-back-2x.jpg"
                className="card__back"
              /> */}

        <div
          className={`${card.rarity.split(" ").join("_")}`}
          style={{ backgroundPosition: `${rotatey}px ${rotatex}px` }}
        >
          <img
            src={card.images?.large}
            className={`${card.rarity.split(" ").join("_")}`}
          ></img>
        </div>
      </Atropos>
    </li>
  );
};
