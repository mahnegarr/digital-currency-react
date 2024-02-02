const BASE_URL = "https://api.coingecko.com/api";
const API_KEY = "CG-jvGLYx23RWizTMRcGsj88SGK";

export const getCoinList = (page) => {
  return `${BASE_URL}/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${page}&x_cg_demo_api_key=${API_KEY}`;
};
