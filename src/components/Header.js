import React from "react";

const Header = ({ input, setInput, setSelect }) => {
  const handleClick = () => {
    setSelect((prev) => {
      return {
        ...prev,
        selCount: parseInt(input),
        isSel: true,
      };
    });
    setInput("");
  };
  return (
    <header>
      <input
        type="text"
        className="sel-input"
        placeholder="No. of Records"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="sel-btn" onClick={input !== "" ? handleClick : null}>
        go
      </button>
    </header>
  );
};

export default Header;
