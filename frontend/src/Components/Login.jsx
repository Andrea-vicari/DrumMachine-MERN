import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom'
import { useLogin } from "../hooks/useLogin";

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, isLoading, error} = useLogin()

    const handleSubmit = async (e) => {
      e.preventDefault()

      await login(email,password)
    }

  return (
    <div className="bg-dj-console d-flex justify-content-center align-items-center vh-100">
      <div className="bg-black p-3 rounded w-75 text-white">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              name="email"
              className="form-control rounded-0"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              className="form-control rounded-0"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button type="submit" className="btn acid-green w-100 rounded-0" disabled={isLoading}>
            Login
          </button>
          {error && <div className="error text-danger fs-4 mt-3">{error}</div>}
          </form>
          <p className="mt-3">Don't have an account?</p>
          <Link to="/signup" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
            Signup
          </Link>

      </div>
    </div>
  );
}

export default Login;

