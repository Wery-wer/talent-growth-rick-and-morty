import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const isAuthenticated = localStorage.getItem("isAuthenticated");
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.link}>Home</Link>
      {!isAuthenticated ? (
        <>
          <Link to="/login" style={styles.link}>Login</Link>
          <Link to="/register" style={styles.link}>Register</Link>
        </>
      ) : (
        <>
          <Link to="/profile" style={styles.link}>Profile</Link>
          <button onClick={handleLogout} style={styles.button}>Logout</button>
        </>
      )}
    </nav>
  );
};

const styles = {
  nav: {
    display: "flex",
    gap: "15px",
    padding: "10px 20px",
    background: "#eee",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "20px"
  },
  link: {
    textDecoration: "none",
    color: "#333",
    fontWeight: "bold",
  },
  button: {
    cursor: "pointer",
    padding: "6px 12px",
    fontWeight: "bold",
    backgroundColor: "#f44",
    color: "#fff",
    border: "none",
    borderRadius: "4px"
  }
};

export default Navbar;
