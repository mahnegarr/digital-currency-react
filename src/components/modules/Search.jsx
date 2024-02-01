// import React, { useEffect, useState } from "react";
// import search from "../../services/cryptoAPI.js";
// import { RotatingLines } from "react-loader-spinner";

// function Search({ currency, setCurrency }) {
//   const [text, setText] = useState("");
//   const [coins, setCoins] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);

//   useEffect(() => {
//     const controller = new AbortController();

//     setCoins([]);

//     if (!text) return;
//     const searchBox = async () => {
//       try {
//         const res = await fetch(search.search(text), {
//           signal: controller.signal,
//         });
//         const json = await res.json();
//         if (json.coins) {
//             setCoins(json.coins);
//             setIsLoading(false);
//         } else {
//           alert(json.status.error_message);
//         }
//       } catch (error) {
//         if (error.name != "AbortError") {
//           alert(error.message);
//         }
//       }
//     };

//     setIsLoading(true);
//     searchBox();

//     return () => controller.abort();
//   }, [text]);
//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
//         <option value="usd">USD</option>
//         <option value="eur">EUR</option>
//         <option value="jpy">JPY</option>
//       </select>

//       <div>
//         {isLoading && (
//           <RotatingLines
//             width="50px"
//             height="50px"
//             strokeColor="#3874ff"
//             strokeWidth="2"
//           />
//         )}
//         <ul>
//           {coins.map((coin) => (
//             <li key={coin.id}>
//               <img src={coin.thumb} alt={coin.name} />
//               <p>{coin.name}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Search;
