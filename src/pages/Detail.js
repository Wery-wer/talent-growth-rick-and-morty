import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((res) => res.json())
      .then((data) => setCharacter(data))
      .catch(() => setError("Failed to fetch character."));
  }, [id]);

  if (error) return <p>{error}</p>;
  if (!character) return <p>Loading...</p>;

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} style={{ borderRadius: 8 }} />
      <p>Status: {character.status}</p>
      <p>Gender: {character.gender}</p>
      <p>Origin: {character.origin.name}</p>
      <p>Location: {character.location.name}</p>
    </div>
  );
};

export default Detail;
