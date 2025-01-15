import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="authentication">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>Login</button>
        <p>This an error</p>
        <span>
          Do not have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};
