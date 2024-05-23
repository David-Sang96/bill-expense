import React, { useState } from "react";
import Button from "./Button";

const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
  const [inputValue, setInputValue] = useState({
    bill: "",
    expense: "",
    billPayer: "user",
  });

  const friendExpense = inputValue.bill
    ? inputValue.bill - inputValue.expense
    : "";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.bill || !inputValue.expense) return;

    onSplitBill(
      inputValue.billPayer === "user" ? friendExpense : -inputValue.expense
    );

    setInputValue({
      bill: "",
      expense: "",
      billPayer: "user",
    });
  };

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label htmlFor="">Bill value</label>
      <input
        type="text"
        value={inputValue.bill}
        onChange={(e) =>
          setInputValue({ ...inputValue, bill: Number(e.target.value) })
        }
      />

      <label htmlFor="">Your expense</label>
      <input
        type="text"
        value={inputValue.expense}
        onChange={(e) =>
          setInputValue({
            ...inputValue,
            expense:
              Number(e.target.value) > inputValue.bill
                ? friendExpense
                : Number(e.target.value),
          })
        }
      />

      <label htmlFor="">{selectedFriend.name}'s expense</label>
      <input type="text" value={friendExpense} disabled />

      <label htmlFor="">Who is paying the bill?</label>
      <select
        value={inputValue.billPayer}
        onChange={(e) =>
          setInputValue({ ...inputValue, billPayer: e.target.value })
        }
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
};

export default FormSplitBill;
