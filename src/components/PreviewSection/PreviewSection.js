import React, { useState } from "react";

const PreviewSection = ({ content }) => {
  return (
    <div className="section">
      <header>Preview</header>
      <div className="editor-container">
        <div dangerouslySetInnerHTML={content} />
      </div>
    </div>
  );
};

export default PreviewSection;
