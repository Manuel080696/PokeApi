import React from "react";
import { Card } from "../models";
import { useState } from "react";

type ProductContextType = {
  cards: Card[];
  setCards: React.Dispatch<React.SetStateAction<Card[] | undefined>>;
  categories: string;
  setCategories: React.Dispatch<React.SetStateAction<string>>;
};

export const CardContext = React.createContext<ProductContextType>(
  {} as ProductContextType
);

export const CardProviderComponent = ({ children }: any) => {
  const [cards, setCards] = useState<Card[]>();
  const [categories, setCategories] = useState<string>("");

  return (
    <CardContext.Provider
      value={{
        cards,
        setCards,
        categories,
        setCategories,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
