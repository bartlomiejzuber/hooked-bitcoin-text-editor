import React from "react";
import PropTypes from "prop-types";
import { EditorSection, PreviewSection } from "./index";
import { rootReducer, INITIAL_STATE } from "./reducer";

// ClassNames defaults
const defaultEditorClassName = "editor";
const defaultSectionClassName = "section";
const defaultEditorContainerClassName = "editor-container";
const defaultEditorAreaClassName = "editor-area";
const defaultPreviewContainerClassName = "preview-container";
const defaultPreviewAreaClassName = "preview-area";

// Titles
const defaultEditorSectionTitle = "Editor";
const defaultPreviewSectionTitle = "Preview";

const Editor = ({
  editorClassName = defaultEditorClassName,
  editorSectionClassName = defaultSectionClassName,
  editorContainerClassName = defaultEditorContainerClassName,
  editorAreaClassName = defaultEditorAreaClassName,
  previewSectionClassName = defaultSectionClassName,
  previewContainerClassName = defaultPreviewContainerClassName,
  previewAreaClassName = defaultPreviewAreaClassName,
  editorSectionTitle = defaultEditorSectionTitle,
  previewSectionTitle = defaultPreviewSectionTitle
}) => {
  const [state, dispatch] = React.useReducer(rootReducer, INITIAL_STATE);

  return (
    <div className={editorClassName}>
      <EditorSection
        title={editorSectionTitle}
        dispatch={dispatch}
        sectionClassName={editorSectionClassName}
        editorContainerClassName={editorContainerClassName}
        editorAreaClassName={editorAreaClassName}
      />
      <PreviewSection
        title={previewSectionTitle}
        content={state.content}
        sectionClassName={previewSectionClassName}
        previewContainerClassName={previewContainerClassName}
        previewAreaClassName={previewAreaClassName}
      />
    </div>
  );
};

Editor.propTypes = {
  editorClassName: PropTypes.string,
  editorSectionClassName: PropTypes.string,
  previewSectionClassName: PropTypes.string
};

export default Editor;
