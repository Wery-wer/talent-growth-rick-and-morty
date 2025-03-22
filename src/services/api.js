export const fetchCharacters = async (page = 1) => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Failed to fetch data.");
    }
  };
  