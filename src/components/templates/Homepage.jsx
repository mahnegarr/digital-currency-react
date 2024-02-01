import React, { useEffect, useState } from "react";
import Tablecoin from "../modules/Tablecoin";
import getCoinList from "../../services/cryptoAPI.js";
import Pagination from "../modules/Pagination";
import Search from "../modules/Search";

function Homepage() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(getCoinList());
      const json = res.json();
      setCoins(json);
    };
  }, []);

  return (
    <div>

      <Tablecoin coins={coins} />
    </div>
  );
}

export default Homepage;
