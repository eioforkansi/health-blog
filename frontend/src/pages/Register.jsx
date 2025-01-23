import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [err, setErr] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/auth/register", inputs);
      navigate("/login");
    } catch (error) {
      setErr(error.response);
    }
  };

  return (
    <div className="authentication">
      <h1>REGISTER</h1>
      <form>
        <input
          required
          type="text"
          placeholder="Full name"
          name="username"
          onChange={handleChange}
        />
        <input
          required
          type="text"
          placeholder="Email"
          name="email"
          onChange={handleChange}
        />
        <input
          required
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <button onClick={handleSumbit}>Register</button>
        {err && <p>{err.data}</p>}
        <span>
          Do you have an account? <br />
          <Link to="/login">
            <b>Login</b>
          </Link>
        </span>
      </form>
    </div>
  );
};
