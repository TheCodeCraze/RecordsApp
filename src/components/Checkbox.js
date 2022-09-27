import { CheckCount } from "./App";
import React, { useContext, useRef } from "react";

const Checkbox = ({ id, setChecked, checked }) => {
  const { count, setCount, select, setSelect, selItems, selItemsArr } =
    useContext(CheckCount);
  const checkRef = useRef();

  if (select.isSel) {
    setChecked(false);
    setCount(0);
  }

  const handleCheck = () => {
    setSelect((prev) => {
      return {
        ...prev,
        isSel: false,
      };
    });
    if (selItemsArr.includes(checkRef.current.id)) {
      if (checkRef.current.checked) {
        if (count !== select.selCount) {
          setChecked((prev) => !prev);
          setCount((prev) => prev + 1);
        }
      } else {
        setChecked((prev) => !prev);
        setCount((prev) => prev - 1);
      }
    } else {
      if (count !== select.selCount) {
        selItems(checkRef.current.id);
        setChecked((prev) => !prev);
        setCount((prev) => prev + 1);
      }
    }
  };

  return (
    <input
      id={`check-${id}`}
      ref={checkRef}
      checked={checked ? true : false}
      type="checkbox"
      className="row-check"
      onChange={handleCheck}
    />
  );
};

export default Checkbox;
