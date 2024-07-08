import React from "react";
import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_URL;

const Transactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch(`${API}/transactions`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTransactions(data);
      });
  }, []);

  return (
    <div>
      Transactions
      {transactions.map((transaction) => {
        return (
          <h4 key={transaction.id}>
            {transaction.item_name} {transaction.amount}
          </h4>
        );
      })}
    </div>
  );
};

export default Transactions;
