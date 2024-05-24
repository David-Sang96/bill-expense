import React, { useState } from "react";
import Button from "./Button";

const FormAddFriend = ({ handleAddFriend }) => {
  const [user, setUser] = useState({
    name: "",
    imgUrl: "https://i.pravatar.cc/48",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user.name || !user.imgUrl) return;

    const capitalizeName = user.name
      .split(" ")
      .map((item) => item.slice(0, 1).toUpperCase() + item.slice(1))
      .join(" ");

    const id = crypto.randomUUID();
    const newFriend = {
      name: capitalizeName,
      image: `${user.imgUrl}?=${id}`,
      balance: 0,
      id,
    };
    handleAddFriend(newFriend);
    setUser({ name: "", imgUrl: "https://i.pravatar.cc/48" });
  };

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="">Friend name</label>
      <input
        type="text"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
      />

      <label htmlFor="">Image Url</label>
      <input
        type="text"
        value={user.imgUrl}
        onChange={(e) => setUser({ ...user, imgUrl: e.target.value })}
      />

      <Button>Add</Button>
    </form>
  );
};

export default FormAddFriend;
