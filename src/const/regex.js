const regexAllDirectivesOccurences = /\[\s+(Name|Price)\/\w+\s+\]/gm;
const regexGetCoinSymbol = /(?<=\/)\w+/gm;

export { regexAllDirectivesOccurences, regexGetCoinSymbol };
