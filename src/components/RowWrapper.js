import React, { useState } from "react";
import Row from "./Row";
import SelectedDetails from "./SelectedDetails";

const RowWrapper = ({ id, title, userId, body }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div className="row-wrapper">
      <Row
        id={id}
        title={title}
        userId={userId}
        body={body}
        setChecked={setChecked}
        checked={checked}
      />
      {checked && <SelectedDetails title={title} userId={userId} body={body} />}
    </div>
  );
};

export default RowWrapper;
