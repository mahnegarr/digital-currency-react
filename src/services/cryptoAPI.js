// const BASE_URL = "https://api.coingecko.com/api";
// const API_KEY = "CG-jvGLYx23RWizTMRcGsj88SGK";

export const getCoinList = () => {
  return `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&x_cg_demo_api_key=CG-jvGLYx23RWizTMRcGsj88SGK`;
};


