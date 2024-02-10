import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Register() {
  const Redircet = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      Redircet("/" + sessionStorage.getItem("role"));
    }
  }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://backendpooja.vercel.app/api/create/customer",
        {
          name,
          email,
          password,
        }
      );
      if (response.data.code === 1) {
        toast.success(response.data.message);
        Redircet("/");
      } else {
        toast.error(response.data.message);
      }
      // Handle success, such as redirecting to another page
    } catch (error) {
      console.error("Registration failed:", error);
      // Handle error, such as displaying an error message to the user
    }
  };

  return (
    <div className="loginform">
      <h2>Register</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <p>Username</p>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <p>E-mail</p>
        <input
          type="email"
          name="email"
          placeholder="E-mail"
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
        <input type="submit" name="register-btn" value="Register" />
      </form>
      <Link to="/" className="text-primary">
        Go To Login
      </Link>
    </div>
  );
}

export default Register;
