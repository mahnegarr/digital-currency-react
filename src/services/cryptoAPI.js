const BASE_URL = "https://api.coingecko.com/api";
const API_KEY = "CG-QhShH2Lb5wntC2i6yqhZcmj4";
const getCoinList = () => {
  return `${BASE_URL}/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=2&sparkline=false&locale=en&x_cg_demo_api_key=${API_KEY}`;
};

export default getCoinList ;

