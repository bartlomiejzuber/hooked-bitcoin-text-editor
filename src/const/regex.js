const regexAllOccurences = /{{\s+(Name|Price)\/\w+\s+}}/gm;
const regexGetCoinSymbol = /(?<=\/)\w+/gm;

export { regexAllOccurences, regexGetCoinSymbol };
