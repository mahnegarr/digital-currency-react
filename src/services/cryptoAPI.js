
const BASE_URL = "https://api.coingecko.com/api";
const API_KEY = "CG-QhShH2Lb5wntC2i6yqhZcmj4";

const getCoinList = (page, currency) =>
  `${BASE_URL}/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&sparkline=false&locale=en&x_cg_demo_api_key=${API_KEY}`;

 const search = (query) =>
  `${BASE_URL}/v3/search?query=${query}&x_cg_demo_api_key=${API_KEY}`;

  export default {getCoinList,search}