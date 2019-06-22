class RegexExecIterator {
  constructor(regex) {
    this.regex = regex;
  }

  exec(text, regex) {
    const regexToExec = regex || this.regex;
    const iterable = {};
    iterable[Symbol.iterator] = function*() {
      let matchGroup;
      while ((matchGroup = regexToExec.exec(text)) !== null) {
        if (matchGroup.index === regexToExec.lastIndex) regexToExec.lastIndex++;

        yield matchGroup;
      }
    };
    return iterable;
  }
}

export { RegexExecIterator };
