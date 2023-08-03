const baseUrl = "https://api.coinpaprika.com/v1";

export function fetchCoins() {
  return fetch(`${baseUrl}/coins/`).then((response) => response.json());
}

export function fetchCoin(coinId: string) {
  return fetch(`${baseUrl}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchTicker(coinId: string) {
  return fetch(`${baseUrl}/coins/${coinId}`).then((response) =>
    response.json()
  );
}
