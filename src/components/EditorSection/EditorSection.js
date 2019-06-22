import React, { useCallback } from "react";
import { RegexExecIterator } from "../../utils/regex-exec-iterator";
import CoinpaprikaRepository from "../../repository/CoinpaprikaRepository";
import EDITOR_METHODS from "../../const/editor-methods";

const regexExecIterator = new RegexExecIterator(regexAllOccurences);
const coinpaprikaRepository = new CoinpaprikaRepository();
const getValue = async (symbol, type) => {
  switch (type) {
    case EDITOR_METHODS.NAME:
      return coinpaprikaRepository.getName(symbol);
    case EDITOR_METHODS.PRICE:
      return coinpaprikaRepository.getPrice(symbol);
  }

  throw Error("Method not supported");
};

const handleChange = async (e, dispatch) => {
  const editorContentText = e.currentTarget.textContent || "";
  let editorContentHtml = e.currentTarget.innerHTML;
  const iterable = regexExecIterator.exec(editorContentText);
  for (let [target, actionType] of iterable) {
    try {
      const targetValue = await getValue(target, actionType);
      editorContentHtml = editorContentHtml.replace(target, targetValue);
    } catch (e) {
      dispatch(e.message);
    }
  }

  dispatch({ __html: editorContentHtml });
};

const EditorSection = ({ dispatch }) => {
  const handleChangeCallback = useCallback(e => handleChange(e, dispatch), [
    dispatch
  ]);
  return (
    <div className="section">
      <header>Editor</header>
      <div className="editor-container">
        <div
          className="editor"
          contentEditable
          onInput={handleChangeCallback}
        />
      </div>
    </div>
  );
};

export default EditorSection;
