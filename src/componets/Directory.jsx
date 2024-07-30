import React from "react";
import Categoryitem from "./categoryitem";

export default function Directory({ categories }) {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return (
          <>
            <Categoryitem key={category.id} categories={category} />
          </>
        );
      })}
    </div>
  );
}
