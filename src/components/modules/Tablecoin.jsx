import React from "react";
import TableRow from "./TableRow";
import {RotatingLines} from 'react-loader-spinner'
import style from "../modules/Tablecoin.module.css"

function Tablecoin({ coins, isLoading }) {
  return (
    <div className={style.mainDiv}>
      {isLoading ? (
        <RotatingLines strokeColor="#3874ff" strokeWidth="2" />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Volumes</th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow coin={coin} key={coin.id} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Tablecoin;
