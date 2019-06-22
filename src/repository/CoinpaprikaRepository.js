import memoize from "lodash/memoize";
import cpApi from "coinpaprika-js";

class CoinpaprikaRepository {
  async find(coinSymbol, modifier = "symbol_search") {
    const result = await cp.search(coinSymbol, {
      modifier,
      c: "currencies",
      limit: 1
    });
    return result.currencies[0];
  }

  memoizedFind = memoize(coinSymbol => this.find(coinSymbol));

  async getName(symbol) {
    const coinSymbol = symbol.match(regexGetCoinSymbol);
    const coin = await this.memoizedFind(coinSymbol[0]);

    if (!coin) throw Error(`Can't find coin with symbol: ${coinSymbol[0]}.`);

    return coin.name;
  }

  async getPrice(symbol) {
    const coinSymbol = symbol.match(regexGetCoinSymbol);
    const coin = await this.memoizedFind(coinSymbol[0]);

    if (!coin) throw Error(`Can't find coin with symbol: ${coinSymbol[0]}.`);

    const result = await fetch(
      `https://api.coinpaprika.com/v1/tickers/${coin.id}`
    );
    const ticker = await result.json();
    return `$${ticker.quotes.USD.price.toFixed(2)}`;
  }
}

export default CoinpaprikaRepository;
