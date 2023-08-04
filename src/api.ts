const baseUrl = "https://api.coinpaprika.com/v1";
const historyUrl = "https://ohlcv-api.nomadcoders.workers.dev";

export function fetchCoins() {
  return fetch(`${baseUrl}/coins/`).then((response) => response.json());
}

export function fetchCoin(coinId: string) {
  return fetch(`${baseUrl}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchTicker(coinId: string) {
  return fetch(`${baseUrl}/tickers/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchCoinHistory(coinId: string) {
  return fetch(`${historyUrl}/?coinId=${coinId}`).then((response) =>
    response.json()
  );
}
