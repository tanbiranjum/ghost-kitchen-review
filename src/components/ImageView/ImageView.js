import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";

const ImageView = ({ src, children }) => {
  return (
    <PhotoProvider>
      <PhotoView src={src}>{children}</PhotoView>
    </PhotoProvider>
  );
};

export default ImageView;
