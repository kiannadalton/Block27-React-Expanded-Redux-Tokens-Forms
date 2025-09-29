import { useState } from "react";

export default function Authenticate({ token }) {
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  async function handleClick() {
    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/authenticate",
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const json = await response.json();
      setSuccessMessage(json.message);

    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <h2>Authenticate</h2>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
      <button onClick={handleClick}>Authenticate Token</button>
    </>
  );
}
