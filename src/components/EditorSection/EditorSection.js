import React, { useCallback } from "react";
import memoize from "lodash/memoize";
import cp from "coinpaprika-js";
import { RegexExecIterator } from "../../utils/regex-exec-iterator";

// import "./styles/App.scss";

// const getValue = (symbol, type) => {
//   switch (type) {
//     case "Name":
//       return getName(symbol);
//     case "Price":
//       return getPrice(symbol);
//   }

//   throw Error("Method not supported");
// };

// const memonizedGetValue = memoize((target, type) => getValue(target, type));

// const searchCoin = async symbol => {
//   const result = await cp.search(symbol, {
//     c: "currencies",
//     modifier: "symbol_search",
//     limit: 1
//   });
//   return result.currencies[0];
// };

// const getName = async symbol => {
//   const coinSymbol = symbol.match(regexGetCoinSymbol);
//   const coin = await searchCoin(coinSymbol[0]);

//   if (!coin) throw Error(`Can't find coin with symbol: ${coinSymbol[0]}.`);

//   return coin.name;
// };
// const getPrice = async symbol => {
//   const coinSymbol = symbol.match(regexGetCoinSymbol);
//   const coin = await searchCoin(coinSymbol[0]);

//   if (!coin) throw Error(`Can't find coin with symbol: ${coinSymbol[0]}.`);

//   const result = await fetch(
//     `https://api.coinpaprika.com/v1/tickers/${coin.id}`
//   );
//   const ticker = await result.json();
//   return `$${ticker.quotes.USD.price.toFixed(2)}`;
// };

const regexExecIterator = new RegexExecIterator(regexAllOccurences);
const handleChange = async (e, dispatch) => {
  const editorContentText = e.currentTarget.textContent || "";
  // let editorContentHtml = e.currentTarget.innerHTML;
  const iterable = regexExecIterator.exec(editorContentText);
  for (let [target, actionType] of iterable) {
    try {
      //   const targetValue = await memonizedGetValue(target, actionType);
      // editorContentHtml = editorContentHtml.replace(target, targetValue);
    } catch (e) {
      dispatch(e.message);
    }
  }

  dispatch({ __html: editorContentHtml });
};

const EditorSection = ({ dispatch }) => {
  const handleChange = useCallback(e => handleChange(e, dispatch), [dispatch]);
  return (
    <div className="section">
      <header>Editor</header>
      <div className="editor-container">
        <div className="editor" contentEditable onInput={handleChange} />
      </div>
    </div>
  );
};

export default EditorSection;
