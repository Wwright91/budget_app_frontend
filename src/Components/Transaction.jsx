import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const Transaction = () => {
  const [transaction, setTransaction] = useState([]);
  const { id } = useParams();
  const { item_name, amount, from } = transaction;

  useEffect(() => {
    fetch(`${API}/transactions/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTransaction(data);
      });
  }, []);

  return (
    <div>
      Transaction
      <h3>{item_name}</h3>
      <h3>{amount}</h3>
      <h3>{from}</h3>
    </div>
  );
};

export default Transaction;
