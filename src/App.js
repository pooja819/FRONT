import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./comp/NotFound";
// import Master from "./comp/Master";
import Login from "./comp/Login";
import Register from "./comp/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Master from "./comp/Master";
import ShowCustomer from "./comp/admin/ShowCustomer";
import Customer from "./comp/customer/Customer";

function App() {
  return (
    <BrowserRouter>
      <ToastContainer></ToastContainer>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin" element={<Master Cmp={ShowCustomer} />} />
        <Route path="/customer" element={<Master Cmp={Customer} />} />
        <Route Component={NotFound} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
