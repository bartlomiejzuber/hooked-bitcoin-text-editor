import React from "react";

const PreviewSection = ({
  title,
  content,
  sectionClassName,
  previewContainerClassName,
  previewAreaClassName
}) => (
  <div className={sectionClassName}>
    <header>{title}</header>
    <div className={previewContainerClassName}>
      <div
        className={previewAreaClassName}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  </div>
);

export default PreviewSection;
