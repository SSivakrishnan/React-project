import React from "react";
const Searchbox = ({ handleInput }) => {
  return (
    <div>
      <input onChange={handleInput} type="text" />
    </div>
  );
};

export default Searchbox;
