import React from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  if (!user) return <p style={styles.center}>No user found. Please login.</p>;

  return (
    <div style={styles.container}>
      <h2>Welcome, {user.email}!</h2>
      <button onClick={handleLogout} style={styles.button}>Logout</button>
    </div>
  );
};

const styles = {
  container: { textAlign: "center", padding: "20px" },
  button: { padding: "10px", marginTop: "10px", cursor: "pointer" },
  center: { textAlign: "center", marginTop: "20px" },
};

export default Profile;
