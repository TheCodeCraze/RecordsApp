import React from "react";
import Checkbox from "./Checkbox";
import Title from "./Title";
import UserID from "./UserID";
import Body from "./Body";

const Row = ({ id, title, userId, body, setChecked, checked }) => {
  return (
    <div
      className="row"
      id={id}
      style={{
        backgroundColor: checked
          ? "rgb(167, 210, 203)"
          : "rgba(243, 145, 137, 0.5)",
      }}
    >
      <Checkbox id={id} setChecked={setChecked} checked={checked} />
      <Title title={title} />
      <UserID userId={userId} />
      <Body body={body} />
    </div>
  );
};

export default Row;
