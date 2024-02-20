import React from "react";
import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";
import style from "../modules/Tablecoin.module.css";

function TableRow({
  coin: {
    image,
    symbol,
    name,
    current_price,
    total_volume,
    price_change_percentage_24h: price_change,
  },
  setChart,
}) {
  const showHandler = () => {
    setChart(true);
  };
  return (
    <tr>
      <td>
        <div className={style.symbol} onClick={showHandler}>
          <img src={image} alt="" />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>{current_price.toLocaleString()}</td>
      <td className={price_change > 0 ? style.success : style.error}>
        {price_change.toFixed(2)}
      </td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change > 0 ? chartUp : chartDown} alt="" />
      </td>
    </tr>
  );
}

export default TableRow;
