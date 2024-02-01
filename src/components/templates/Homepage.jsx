import React, { useEffect, useState } from "react";
import Tablecoin from "../modules/Tablecoin";
import { getCoinList } from "../../services/cryptoAPI.js";


function Homepage() {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(getCoinList());
      const json = await res.json();
      setCoins(json);
    };

    getData();
  }, []);

  return (
    <div>
      <Tablecoin coins={coins} />
    </div>
  );
}

export default Homepage;
