import { Link } from "react-router-dom";

export const Register = () => {
  return (
    <div className="authentication">
      <h1>Register</h1>
      <form>
        <input required type="text" placeholder="username" />
        <input required type="text" placeholder="email" />
        <input required type="password" placeholder="password" />
        <button>Register</button>
        <p>This an error</p>
        <span>
          Do you have an account? <Link to="/login">Login</Link>
        </span>
      </form>
    </div>
  );
};
