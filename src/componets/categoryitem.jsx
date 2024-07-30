import React from "react";

export default function Categoryitem({ categories }) {
  const { title, imageUrl } = categories;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="category-text">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
}
