import React, { useEffect, useState } from "react";
import Tablecoin from "../modules/Tablecoin";
import { getCoinList } from "../../services/cryptoAPI.js";
import Pagination from "../modules/Pagination.jsx";

function Homepage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const res = await fetch(getCoinList(page));
      const json = await res.json();
      setCoins(json);
      setIsLoading(false);
    };

    getData();
  }, [page]);

  return (
    <div>
      <Pagination page={page} setPage={setPage} />
      <Tablecoin coins={coins} isLoading={isLoading} />
    </div>
  );
}

export default Homepage;
