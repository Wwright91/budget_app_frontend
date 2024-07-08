import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const TransactionNewForm = () => {
  const [transactionDetails, setTransactionDetails] = useState({
    item_name: "",
    amount: 0,
    from: "",
    category: "",
    date: "",
  });
  const { item_name, amount, from, category, date } = transactionDetails;
  let navigate = useNavigate();

  const addTransaction = () => {
    fetch(`${API}/transactions`, {
      method: "POST",
      body: JSON.stringify(transactionDetails),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        navigate(`/transactions/${data.id}`);
      })
      .catch((err) => console.error(err));
  };

  const handleTextChange = (e) => {
    setTransactionDetails({
      ...transactionDetails,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTransaction();
  };
  return (
    <div>
      TransactionNewForm
      <form onSubmit={handleSubmit}>
        <label htmlFor="item_name">Item Name:</label>
        <input
          id="item_name"
          type="text"
          value={item_name}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="amount">Amount: </label>
        <input
          id="amount"
          type="number"
          value={amount}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="from">From: </label>
        <input
          id="from"
          type="text"
          value={from}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="category">Category: </label>
        <input
          id="category"
          type="text"
          value={category}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="date">Date: </label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={handleTextChange}
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default TransactionNewForm;
