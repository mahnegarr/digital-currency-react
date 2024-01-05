import React, { useEffect, useState } from "react";
import Tablecoin from "../modules/Tablecoin"

function Homepage() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=2&sparkline=false&locale=en&x_cg_demo_api_key=CG-QhShH2Lb5wntC2i6yqhZcmj4"
    )
      .then((res) => res.json())
      .then((json) => setCoins(json));
  }, []);
  return (
    <div>
      <Tablecoin coins={coins} />
    </div>
  );
}

export default Homepage;
