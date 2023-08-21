import { CardContext } from "../context/CardContext";
import { useAllCards } from "../hooks/useAllCards";
import { Card } from "../models";
import "./Cards.css";
import "./cards/base.css";
import { Categories } from "./Categories";
import { useContext } from "react";

import "./cards/amazing-rare.css";
import "./cards/radiant-holo.css";
import "./cards/cards-gx.css";

import { CardElement } from "./Card";

export const CardsCard = () => {
  const { currentPage, setCurrentPage } = useAllCards();
  const { cards } = useContext(CardContext);

  const data = cards?.data;

  return (
    <section className="cards">
      <div className="join">
        <button
          className="join-item btn"
          onClick={() =>
            setCurrentPage(currentPage === 1 ? 1 : currentPage - 1)
          }
        >
          «
        </button>
        <button className="join-item btn">{currentPage}</button>
        <button
          className="join-item btn"
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          »
        </button>
      </div>
      <Categories />
      <ul className="cards-list">
        {data?.map((card: Card) => (
          <CardElement card={card} key={card.id} />
        ))}
      </ul>
    </section>
  );
};
