import React, { useState, useRef } from "react";

const Search = ({ getQuery }) => {
  const [text, setText] = useState("");
  const onChange = (event) => {
    setText(event);
    getQuery(event);
  };

  return (
    <section>
      <form>
        <input
          type="text"
          className="form-control"
          placeholder="Search Characters"
          autoFocus
          value={text}
          onChange={(event) => onChange(event.target.value)}
        />
      </form>
    </section>
  );
};

export default Search;
