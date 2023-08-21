export const GetAllCards = async (currentPage: number, category: string) => {
  const data = await fetch(
    `https://api.pokemontcg.io/v2/cards?page=${currentPage}&pageSize=6&count=6&${
      category ? category : ""
    }`,
    {
      headers: import.meta.env.API_KEY,
    }
  );
  const jsonData = await data.json();

  return jsonData;
};
