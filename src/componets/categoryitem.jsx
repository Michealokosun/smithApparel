import React from "react";
import { useNavigate } from "react-router-dom";

export default function Categoryitem({ categories }) {
  const navigate = useNavigate();
  const { title, imageUrl } = categories;
  return (
    <div
      onClick={() => navigate(`shop/${title}`)}
      className="category-container"
    >
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
