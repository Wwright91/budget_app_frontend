import React from "react";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

const TransactionDetails = () => {
  const [transaction, setTransaction] = useState({
    item_name: "",
    amount: 0,
    from: "",
  });
  const { id } = useParams();
  const { item_name, amount, from } = transaction;
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/transactions/${id}`)
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw new Error(`id: ${id} ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setTransaction(data);
      })
      .catch((err) => {
        navigate("/404");
        console.log("catch", err);
      });
  }, [id, navigate]);

  return (
    <div>
      TransactionDetails
      <h3>{item_name}</h3>
      <h3>{amount}</h3>
      <h3>{from}</h3>
      <button>
        <Link to={`/transactions/${id}/edit`}>Edit</Link>
      </button>
    </div>
  );
};

export default TransactionDetails;
