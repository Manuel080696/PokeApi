import { useEffect, useState, useContext } from "react";
import { GetAllCards } from "../services/services";
import { CardContext } from "../context/CardContext";

export const useAllCards = () => {
  const { cards, setCards, categories } = useContext(CardContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const loadAllProduts = async () => {
      try {
        setLoading(true);

        setCards(cards);

        const data = await GetAllCards(
          currentPage,
          categories ? categories : ""
        );
        setCards(data);
      } catch (error) {
        typeof error == "string" && setError(error);
      } finally {
        setLoading(false);
      }
    };
    loadAllProduts();
  }, [currentPage, categories]);

  return { setCurrentPage, currentPage, cards, setCards, loading, error };
};
