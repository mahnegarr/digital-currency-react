import React, { useEffect, useState } from "react";
import Tablecoin from "../modules/Tablecoin";
import getCoinList from "../../services/cryptoAPI";

function Homepage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(getCoinList());
      const json = await res.json();
      setCoins(json);
      setIsLoading(false)
    };

    getData();
  }, []);
  return (
    <div>
      <Tablecoin coins={coins} isLoading={isLoading} />
    </div>
  );
}

export default Homepage;
