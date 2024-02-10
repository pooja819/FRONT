import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

function ShowCustomer() {
  const Redircet = useNavigate();
  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      Redircet("/");
    }
  }, []);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const token = sessionStorage.getItem("token").toString();
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    // Mak
    const fetchCustomers = async () => {
      try {
        const response = await axios.get(
          "https://backendpooja.vercel.app/api/get/all/customer",
          config
        );
        setCustomers(response.data);
      } catch (error) {
        console.error("Error fetching customers:", error);
      }
    };

    fetchCustomers();
  }, []);

  return (
    <div className="mt-4">
      <h1>Customer List</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default ShowCustomer;
