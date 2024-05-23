import React from "react";
import Button from "./Button";

const FormSplitBill = ({ selectedFriend }) => {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label htmlFor="">Bill value</label>
      <input type="text" />

      <label htmlFor="">Your expense</label>
      <input type="text" />

      <label htmlFor="">{selectedFriend.name}'s expense</label>
      <input type="text" disabled />

      <label htmlFor="">Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
};

export default FormSplitBill;
