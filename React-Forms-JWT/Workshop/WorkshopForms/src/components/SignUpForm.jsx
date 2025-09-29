import { useState } from "react";

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    if (password === "" || username === "") {
      setError("Please enter in a valid username and password.");
      return;
    }

    try {
      // clears error
      setError("");
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ username, password }),
        }
      );

      const json = await response.json();
      // json shows a success, message, and a token. This passes just the token to setToken
      setToken(json.token);

      // resets username and password
      setUsername("");
      setPassword("");
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <>
      <div className="signupForm">
        <h2>Sign Up Form</h2>

        {/* shows error if there is an error */}
        {error && <p>{error}</p>}
        <form onSubmit={handleSubmit}>
          <label>
            Username:
            <br />
            <input
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </label>
          <br />
          <label>
            Password:
            <br />
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <br />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
