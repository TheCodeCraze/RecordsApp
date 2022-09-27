import React from "react";
import Title from "./Title";
import UserID from "./UserID";
import Body from "./Body";

const SelectedDetails = ({ id, title, userId, body }) => {
  return (
    <div className="sel-details">
      <Title title={title} />
      <UserID userId={userId} />
      <Body body={body} />
    </div>
  );
};

export default SelectedDetails;
