import React, { useCallback, useRef } from "react";
import { RegexExecIterator } from "../../utils/regex-exec-iterator";
import CoinpaprikaRepository from "../../repository/CoinpaprikaRepository";
import EDITOR_METHODS from "../../const/editor-methods";
import {
  regexAllDirectivesOccurences,
  regexGetCoinSymbol
} from "../../const/regex";
import { errorActions, contentActions } from "../../actions";

const regexExecIterator = new RegexExecIterator(regexAllDirectivesOccurences);
const coinpaprikaRepository = new CoinpaprikaRepository();
const getValue = async (target, type) => {
  const coinSymbol = target.match(regexGetCoinSymbol)[0];
  switch (type) {
    case EDITOR_METHODS.NAME:
      return coinpaprikaRepository.getName(coinSymbol);
    case EDITOR_METHODS.PRICE:
      return coinpaprikaRepository.getPrice(coinSymbol);
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
      dispatch(errorActions.showError(e.message));
    }
  }

  dispatch(contentActions.updateContent(editorContentHtml));
};

const EditorSection = ({
  dispatch,
  title,
  sectionClassName,
  editorContainerClassName,
  editorAreaClassName
}) => {
  const editorAreaRef = useRef();
  const handleChangeCallback = useCallback(e => handleChange(e, dispatch), [
    dispatch
  ]);
  const handleEditorAreaFocus = useCallback(
    () => editorAreaRef.current.focus(),
    [editorAreaRef]
  );
  return (
    <div className={sectionClassName} onClick={handleEditorAreaFocus}>
      <header>{title}</header>
      <div className={editorContainerClassName}>
        <div
          className={editorAreaClassName}
          onInput={handleChangeCallback}
          ref={editorAreaRef}
          contentEditable
        />
      </div>
    </div>
  );
};

export default EditorSection;
