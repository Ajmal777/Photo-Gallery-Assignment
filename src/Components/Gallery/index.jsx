import React from "react";
import Card from "../Common/Card";
import "./style.css";
const Gallery = ({ images }) => {
  return (
    <>
      <div className="gallery">
        <div className="grid">
          {images && images.map((image) => <Card data={image} />)}
        </div>
      </div>
    </>
  );
};

export default Gallery;
