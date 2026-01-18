import { useState } from "react";

function Register({ onRegister }) {
  const [Name, setName] = useState("");
  const [Adress, setAdress] = useState("");
const [error, setError] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
   
    };

    return (
        <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px", }}>
        <h2>REGISTRATION FORM</h2>
        <form onSubmit={handleSubmit}>
            <input
            type="Name"
            placeholder="Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <br /> 
          <input
            type="Adress"
            placeholder="Adress"
            value={Adress}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
          <br/>
          <button type="submit">Register</button>
          </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
            </div>
    );
}
export default Register;