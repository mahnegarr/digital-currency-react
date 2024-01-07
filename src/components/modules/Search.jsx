import React, { useEffect, useState } from "react";
import search from "../../services/cryptoAPI.js";

function Search({ currency, setCurrency }) {
  const [text, setText] = useState("");
  useEffect(() => {
    if (!text) return;
    const searchBox = async () => {
      const res = await fetch(search.search(text));
      const json = await res.json();

      console.log(json);
    };
    searchBox();
  }, [text]);
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="jpy">JPY</option>
      </select>
    </div>
  );
}

export default Search;
