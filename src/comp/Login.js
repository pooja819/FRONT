import React, { useEffect, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const Redircet = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      Redircet("/" + sessionStorage.getItem("role"));
    }
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://backendpooja.vercel.app/api/login",
        {
          email,
          password,
        }
      );
      if (response.data.code === 1) {
        toast.success(response.data.message);
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("role", response.data.role);
        Redircet("/" + response.data.role);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="loginform">
      <h2>Login</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <p>E-mail</p>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <p>Password</p>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input type="submit" name="login-btn" value="Login" />
      </form>
      <Link to="/register" className="text-primary">
        Create new Account
      </Link>
    </div>
  );
}

export default Login;
