import React from "react";

function CategoryFilter({ categories, onCategoryClicked, categorySelected }) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category, index) => (
        <button
          onClick={() => onCategoryClicked(category)}
          className={categorySelected === category ? "selected" : ""}
          key={index}
        >
          {category}
        </button>
      ))}
    </div>
  );
}


export default CategoryFilter;
