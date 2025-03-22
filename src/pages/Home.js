import React, { useEffect, useState } from "react";
import { fetchCharacters } from "../services/api";
import CharacterCard from "../components/CharacterCard";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);  
  const [totalPages, setTotalPages] = useState(1);  

  useEffect(() => {
    fetchCharacters(page)
      .then((data) => {
        setCharacters(data.results);
        setTotalPages(data.info.pages);  
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [page]);  

  const filteredCharacters = characters.filter((char) =>
    char.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <p style={styles.center}>Loading...</p>;
  if (error) return <p style={styles.center}>{error}</p>;
  if (characters.length === 0) return <p style={styles.center}>No data found.</p>;

  return (
    <div>
      <input
        type="text"
        placeholder="Search character..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.search}
      />

      <div style={styles.container}>
        {filteredCharacters.length > 0 ? (
          filteredCharacters.map((char) => (
            <CharacterCard key={char.id} character={char} />
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>

      {}
      <div style={styles.pagination}>
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "16px",
    padding: "0 16px",
  },
  search: {
    margin: "20px auto",
    padding: "8px 16px",
    display: "block",
    width: "80%",
    maxWidth: "400px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
  center: {
    textAlign: "center",
    marginTop: "20px",
  },
  pagination: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0",
    gap: "10px",
  },
};

export default Home;
