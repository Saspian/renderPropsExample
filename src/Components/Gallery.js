import React from "react";
import GalleryRenderProps from "./GalleryRenderProps";

const styles = {
  flex: () => ({
    display: "flex",
    flexWrap: "wrap"
  }),
  gallery: () => ({
    display: "flex",
    flexDirection: "column",
    margin: "5px",
    width: "150px"
  })
};
const Gallery = () => {
  return (
    <>
      <h1>This is the image gallery from componentRenderProps</h1>
      <GalleryRenderProps>
        {({ imageInfo, maxPhoto }) => {
          return (
            <div style={styles.flex()}>
              {imageInfo.map((image, index) => {
                return index < maxPhoto ? (
                  <div style={styles.gallery()} key={index}>
                    <img src={image.thumbnailUrl} alt={index} />
                    {image.id}. {image.title}
                  </div>
                ) : (
                  ""
                );
              })}
            </div>
          );
        }}
      </GalleryRenderProps>
    </>
  );
};

export default Gallery;
