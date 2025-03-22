import React from "react";
import { useNavigate } from "react-router-dom";

const CharacterCard = ({ character }) => {
  const navigate = useNavigate(); 

  return (
    <div
      onClick={() => navigate(`/character/${character.id}`)}  
      style={{ ...styles.card, cursor: "pointer" }}
    >
      <img src={character.image} alt={character.name} style={styles.image} />
      <h3>{character.name}</h3>
      <p>Status: {character.status}</p>
      <p>Species: {character.species}</p>
    </div>
  );
};

const styles = {
  card: {
    flex: "1 1 200px",
    border: "1px solid #ccc",
    borderRadius: 8,
    padding: 12,
    margin: 10,
    width: 200,
    textAlign: "center",
    cursor: "pointer", 
  },
  image: {
    width: "100%",
    borderRadius: 8,
  },
};

export default CharacterCard;
